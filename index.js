import tmp from "./template.js";
import tmpRegular from "./templateRegular.js";
import coloredTmp from "./coloredTemplate.js";
import { transform } from "@svgr/core";
import path from "path";
import { readFile, writeFile, readdir } from "fs/promises";

const config = {
  plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx", "@svgr/plugin-prettier"],
  dimensions: true,
  icon: false,
  native: true,
  typescript: false,
  ref: false,
  memo: false,
  titleProp: false,
  descProp: false,
  expandProps: false,
  replaceAttrValues: {},
  svgProps: {
    width: "{size}",
    height: "{size}",
  },
  exportType: "default",
  namedExport: "ReactComponent",
  jsxRuntime: "automatic",
  svgo: false,
  svgoConfig: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeTitle: false,
          },
        },
      },
    ],
  },
  prettier: true,
  prettierConfig: {
    semi: false,
  },
};

const getSvg = async (svgPath) => {
  try {
    const svgContent = await readFile(svgPath, "utf8");
    return svgContent;
  } catch (err) {
    return "";
  }
};

const generateJSForSvgFile = async (componentName, svgFile, regularDir) => {
  const svgCode = await getSvg(svgFile);

  const isColored = svgFile.includes("Colored");

  const jsCode = await transform(
    svgCode,
    { ...config, template: isColored ? coloredTmp : tmp },
    { componentName: componentName, filePath: `./output/${componentName}.js` }
  );

  const regularPath = `${regularDir}/${componentName}.svg`;
  const regularSvgCode = await getSvg(regularPath);
  const hasRegularWeight = regularDir !== "" && regularSvgCode !== "";

  let resultJSCode;

  if (!hasRegularWeight) {
    resultJSCode = jsCode;
  } else {
    const regularJsCode = await transform(regularSvgCode, {
      ...config,
      template: tmpRegular,
    });

    const codeSnippet = `\nif (weight === "REGULAR") {
        return ${regularJsCode.substring(1)};
      }\n`;

    const jsCodeLines = jsCode.split("\n");
    jsCodeLines.splice(6, 0, codeSnippet);
    const combinedJsCode = jsCodeLines.join("\n");

    resultJSCode = combinedJsCode;
  }

  // add empty line before component declaration
  const lines = resultJSCode.split("\n");
  const componentDeclarationIndex = lines.findIndex(
    (line) => line === `const ${componentName} = (props) => {`
  );
  lines.splice(componentDeclarationIndex, 0, "");

  // add empty line before propTypes declaration
  const propTypeLineIndex = lines.findIndex(
    (line) => line === `${componentName}.propTypes = {`
  );
  lines.splice(propTypeLineIndex, 0, "");

  // add empty line before defaultProps declaration
  const defaultPropsLineIndex = lines.findIndex(
    (line) => line === `${componentName}.defaultProps = {`
  );
  lines.splice(defaultPropsLineIndex, 0, "");

  // if regular weight icon doesn't exists, change `  weight: PropTypes.oneOf(["REGULAR","BOLD"]),` to `  weight: PropTypes.oneOf(["BOLD"]),`
  if (!hasRegularWeight) {
    const weightLineIndex = lines.findIndex(
      (line) => line === `  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),`
    );
    if (weightLineIndex !== -1) {
      lines.splice(weightLineIndex, 1, `  weight: PropTypes.oneOf(["BOLD"]),`);
    }
  }

  resultJSCode = lines.join("\n");

  // replace fill="#808080", etc with fill={fill}
  resultJSCode = resultJSCode.replace(
    /fill="#([0-9a-fA-F]{6})"/g,
    "fill={fill}"
  );

  // replace stroke="#808080", etc with stroke={fill}
  resultJSCode = resultJSCode.replace(
    /stroke="#([0-9a-fA-F]{6})"/g,
    "stroke={fill}"
  );

  // if the component name contains "Filled" and resultJsCode contains word fill="white" then
  // add stroke: PropTypes.string, to propTypes
  // add stroke: colors.iconOn, to defaultProps
  // destructure stroke from props
  // replace fill="white" with fill={stroke}
  // const isFilledIcon =
  //   componentName.includes("Filled") && resultJSCode.includes(`fill="white"`);
  // if (isFilledIcon) {
  //   const lines2 = resultJSCode.split("\n");
  //   const strokePropTypeLineIndex = lines2.findIndex(
  //     (line) => line === `${componentName}.propTypes = {`
  //   );
  //   if (strokePropTypeLineIndex !== -1) {
  //     lines2.splice(
  //       strokePropTypeLineIndex + 1,
  //       0,
  //       `  stroke: PropTypes.string,`
  //     );
  //   }

  //   const strokeDefaultPropsLineIndex = lines2.findIndex(
  //     (line) => line === `${componentName}.defaultProps = {`
  //   );
  //   if (strokeDefaultPropsLineIndex !== -1) {
  //     lines2.splice(
  //       strokeDefaultPropsLineIndex + 1,
  //       0,
  //       `  stroke: colors.iconOn,`
  //     );
  //   }

  //   const strokeDestructureLineIndex = lines2.findIndex(
  //     (line) => line === `const ${componentName} = (props) => {`
  //   );
  //   if (strokeDestructureLineIndex !== -1) {
  //     lines2.splice(
  //       strokeDestructureLineIndex + 1,
  //       1,
  //       `    const { size, weight, fill, stroke } = props`
  //     );
  //   }

  //   resultJSCode = lines2.join("\n");

  //   resultJSCode = resultJSCode.replace(/fill="white"/g, "fill={stroke}");
  // }

  await writeFile(`./output/${componentName}.js`, resultJSCode);
  return {
    hasRegularWeight,
    componentName,
    isColored,
    // hasStrokeAndFill: isFilledIcon,
  };
};

const main = async () => {
  const inputDir = "./input/Bold";
  const regularDir = "./input/Regular";
  const coloredDir = "./input/Colored";
  const allBoldFiles = await readdir(inputDir);
  const allRegularFiles = await readdir(regularDir);
  const allColoredFiles = await readdir(coloredDir);
  const svgBoldFiles = allBoldFiles.filter((file) => file.endsWith(".svg"));
  const svgRegularFiles = allRegularFiles.filter((file) =>
    file.endsWith(".svg")
  );
  const svgColoredFiles = allColoredFiles.filter((file) =>
    file.endsWith(".svg")
  );

  const jsCodePromises = [];
  svgBoldFiles.forEach((file) => {
    const filePath = path.join(inputDir, file);
    const componentName = path.parse(filePath).name;

    jsCodePromises.push(
      generateJSForSvgFile(componentName, filePath, regularDir)
    );
  });

  svgColoredFiles.forEach((file) => {
    const filePath = path.join(coloredDir, file);
    const componentName = path.parse(filePath).name;
    jsCodePromises.push(generateJSForSvgFile(componentName, filePath, ""));
  });

  await Promise.all(jsCodePromises).then((values) => {
    const regularWeightIconCount = values.filter(
      (value) => value.hasRegularWeight
    ).length;
    // const hasStrokeAndFillCount = values.filter(
    //   (value) => value.hasStrokeAndFill
    // ).length;
    const coloredIconCount = values.filter((value) => value.isColored).length;

    console.log("====== Input Summary ======");
    console.log(`Total icons: ${svgBoldFiles.length}`);
    console.log(`Regular weight icon: ${svgRegularFiles.length}`);
    console.log(`Colored icon: ${svgColoredFiles.length}`);

    console.log("====== Output Summary ======");
    console.log(`Total icons: ${values.length}`);
    console.log(`Regular weight icon: ${regularWeightIconCount}`);
    console.log(`Colored icon: ${coloredIconCount}`);
    // console.log(`Has Stroke and Fill both icon: ${hasStrokeAndFillCount}`);
    console.log("====== csv for summary ======");
    console.log(`ComponentName,HasRegularWeight,IsColored`);
    values.forEach((value) => {
      console.log(
        `${value.componentName},${value.hasRegularWeight},${value.isColored}`
      );
    });
  });
};

main();
