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

const ICON_TYPE = {
  MONOTONE: "MONOTONE",
  COLORED: "COLORED",
};

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

const addBlankLines = ({ jsCode, componentName }) => {
  let res = jsCode;
  // add empty line before component declaration
  const lines = res.split("\n");
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

  res = lines.join("\n");
  return res;
};

const replaceHardCodedColorWithProp = ({ jsCode }) => {
  let res = jsCode;

  // replace fill="#808080", etc with fill={fill}
  res = res.replace(/fill="#([0-9a-fA-F]{6})"/g, "fill={fill}");

  // replace stroke="#808080", etc with stroke={fill}
  res = res.replace(/stroke="#([0-9a-fA-F]{6})"/g, "stroke={fill}");

  return res;
};

const modifyBoldJSToSupportRegularWeight = async ({
  boldJsCode,
  regularWeightSvgCode,
}) => {
  const regularJsCode = await transform(regularWeightSvgCode, {
    ...config,
    template: regularTemplate,
  });

  const jsCodeLines = boldJsCode.split("\n");

  const propDestructureLineIndex = jsCodeLines.findIndex((line) =>
    line.includes("} = props")
  );
  const codeSnippet = `\nif (weight === "REGULAR") {
      return ${regularJsCode.substring(1)};
    }\n`;
  jsCodeLines.splice(propDestructureLineIndex + 1, 0, codeSnippet);

  const weightLineIndex = jsCodeLines.findIndex(
    (line) => line === `  weight: PropTypes.oneOf(["BOLD"]),`
  );
  if (weightLineIndex !== -1) {
    jsCodeLines.splice(
      weightLineIndex,
      1,
      `  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),`
    );
  }

  const combinedJsCode = jsCodeLines.join("\n");
  return combinedJsCode;
};

const generateJSForSvgFile = async ({
  componentName,
  svgFilePath,
  template,
  iconType,
}) => {
  const svgCode = await getSvg(svgFilePath);

  const jsCode = await transform(
    svgCode,
    {
      ...config,
      template,
    },
    { componentName }
  );

  let resultJSCode = jsCode;
  let hasRegularWeight = false;

  if (iconType === ICON_TYPE.MONOTONE) {
    const regularPath = `${regularDir}/${componentName}.svg`;
    const regularSvgCode = await getSvg(regularPath);
    hasRegularWeight = regularDir !== "" && regularSvgCode !== "";
    if (hasRegularWeight) {
      resultJSCode = await modifyBoldJSToSupportRegularWeight({
        boldJsCode: jsCode,
        regularWeightSvgCode: regularSvgCode,
      });
    }
  }

  resultJSCode = addBlankLines({ jsCode: resultJSCode, componentName });

  if (![ICON_TYPE.COLORED].includes(iconType)) {
    resultJSCode = replaceHardCodedColorWithProp({ jsCode: resultJSCode });
  }

  await writeFile(`${outputDir}/${componentName}.js`, resultJSCode);

  return {
    componentName,
    hasRegularWeight,
    iconType,
  };
};

const isSvgFile = (file) => file.endsWith(".svg");

const main = async () => {
  const allBoldFiles = await readdir(inputDir);
  const allRegularFiles = await readdir(regularDir);
  const allColoredFiles = await readdir(coloredDir);

  const svgBoldFiles = allBoldFiles.filter(isSvgFile);
  const svgRegularFiles = allRegularFiles.filter(isSvgFile);
  const svgColoredFiles = allColoredFiles.filter(isSvgFile);

  const jsCodePromises = [];
  svgBoldFiles.forEach((file) => {
    const svgFilePath = path.join(inputDir, file);
    const componentName = path.parse(svgFilePath).name;
    jsCodePromises.push(
      generateJSForSvgFile({
        componentName,
        svgFilePath,
        template: boldTemplate,
        iconType: ICON_TYPE.MONOTONE,
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
        iconType: ICON_TYPE.COLORED,
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
    console.log(`ComponentName,HasRegularWeight,iconType`);
    values.forEach((value) => {
      console.log(
        `${value.componentName},${value.hasRegularWeight},${value.iconType}`
      );
    });
  });
};

main();
