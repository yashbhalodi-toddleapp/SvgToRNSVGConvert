import tmp from "./template.js";
import tmpRegular from "./templateRegular.js";
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
    console.error("Error reading SVG file:", svgPath);
    return "";
  }
};

const generateJSForSvgFile = async (componentName, svgFile, regularDir) => {
  console.log("======== Generating svg:", componentName);
  const svgCode = await getSvg(svgFile);

  const jsCode = await transform(
    svgCode,
    { ...config, template: tmp },
    { componentName: componentName, filePath: `./output/${componentName}.js` }
  );

  const regularPath = `${regularDir}/${componentName}.svg`;

  const regularSvgCode = await getSvg(regularPath);

  let resultJSCode;
  if (regularSvgCode === "") {
    console.log("No regular weight icon:", componentName);
    resultJSCode = jsCode;
  } else {
    const regularJsCode = await transform(regularSvgCode, {
      ...config,
      template: tmpRegular,
    });

    const codeSnippet = `\nif (weight === "REGULAR") {
        return ${regularJsCode.substring(1)};
      }\n`;

    const sanitizedJsCodeLines = jsCode.split("\n");
    sanitizedJsCodeLines.splice(5, 0, codeSnippet);
    const combinedJsCode = sanitizedJsCodeLines.join("\n");

    console.log("Has regular weight icon:", componentName);
    resultJSCode = combinedJsCode;
  }

  writeFile(`./output/${componentName}.js`, resultJSCode);
  console.log(`======== Done Writing ${componentName} ========\n`);
};

const main = async () => {
  const inputDir = "./input/Bold";
  const regularDir = "./input/Regular";
  const allFiles = await readdir(inputDir);
  const svgFiles = allFiles.filter((file) => file.endsWith(".svg"));

  const jsCodePromises = [];
  svgFiles.forEach((file) => {
    const filePath = path.join(inputDir, file);

    const componentName = path.parse(filePath).name;
    jsCodePromises.push(
      generateJSForSvgFile(componentName, filePath, regularDir)
    );
  });
  await Promise.all(jsCodePromises).then((values) => {
    console.log("FINISH");
  });
};

main();
