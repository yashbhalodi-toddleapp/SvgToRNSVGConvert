// run this script in console of figma browser tab to download all selected components as svg files
function saveFile(svg, filename) {
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement("a");
  downloadLink.href = url;
  downloadLink.download = filename;
  console.log("downloading:", filename);
  downloadLink.click();
  URL.revokeObjectURL(url);
}

const arr = figma.currentPage.selection.map((ele) => {
  return { id: ele.id, name: ele.parent.name, element: ele };
});

let idx = 0;
const interval = setInterval(async () => {
  if (idx === arr.length) {
    clearInterval(interval);
    console.log("done");
    return;
  }
  const ele = arr[idx];
  const svg = await ele.element.exportAsync({ format: "SVG" });
  saveFile(svg, `${ele.name}.svg`);
  idx++;
}, 1000);
