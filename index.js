import boldTemplate from "./templates/boldTemplate.js";
import regularTemplate from "./templates/regularTemplate.js";
import coloredTemplate from "./templates/coloredTemplate.js";

import { transform } from "@svgr/core";
import path from "path";
import { readFile, writeFile, readdir } from "fs/promises";

const inputDir = "./input/Bold";
const regularDir = "./input/Regular";
const coloredDir = "./input/Colored";

const outputDir = "./output";

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

const generateJSForSvgFile = async ({
  componentName,
  svgFilePath,
  template,
}) => {
  const svgCode = await getSvg(svgFilePath);

  const isColored = svgFilePath.includes("Colored");

  const jsCode = await transform(
    svgCode,
    {
      ...config,
      template,
    },
    { componentName }
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
      template: regularTemplate,
    });

    const jsCodeLines = jsCode.split("\n");

    const propDestructureLineIndex = jsCodeLines.findIndex((line) =>
      line.includes("} = props")
    );
    const codeSnippet = `\nif (weight === "REGULAR") {
        return ${regularJsCode.substring(1)};
      }\n`;
    jsCodeLines.splice(propDestructureLineIndex + 1, 0, codeSnippet);

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

  // add empty line before displayName declaration
  const displayNameLineIndex = lines.findIndex(
    (line) => line === `${componentName}.displayName = "${componentName}"`
  );
  lines.splice(displayNameLineIndex, 0, "\n");

  // add empty line before export declaration
  const exportLineIndex = lines.findIndex(
    (line) => line === `export default ${componentName}`
  );
  lines.splice(exportLineIndex, 0, "");

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

  if (!isColored) {
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
  }

  await writeFile(`${outputDir}/${componentName}.js`, resultJSCode);

  return {
    hasRegularWeight,
    componentName,
    isColored,
  };
};

const main = async () => {
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
    const svgFilePath = path.join(inputDir, file);
    const componentName = path.parse(svgFilePath).name;
    jsCodePromises.push(
      generateJSForSvgFile({
        componentName,
        svgFilePath,
        template: boldTemplate,
      })
    );
  });

  svgColoredFiles.forEach((file) => {
    const svgFilePath = path.join(coloredDir, file);
    const componentName = path.parse(svgFilePath).name;
    jsCodePromises.push(
      generateJSForSvgFile({
        componentName,
        svgFilePath,
        template: coloredTemplate,
      })
    );
  });

  await Promise.all(jsCodePromises).then((values) => {
    const regularWeightIconCount = values.filter(
      (value) => value.hasRegularWeight
    ).length;

    const coloredIconCount = values.filter((value) => value.isColored).length;

    console.log("====== Input Summary ======");
    console.log(`Total icons: ${svgBoldFiles.length}`);
    console.log(`Regular weight icon: ${svgRegularFiles.length}`);
    console.log(`Colored icon: ${svgColoredFiles.length}`);

    console.log("====== Output Summary ======");
    console.log(`Total icons: ${values.length}`);
    console.log(`Regular weight icon: ${regularWeightIconCount}`);
    console.log(`Colored icon: ${coloredIconCount}`);

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
