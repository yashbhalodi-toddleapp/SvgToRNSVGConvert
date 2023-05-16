### Svg to React Native Component Generator scripts

#### Steps:

- Clone this repo
- Run `npm install`
- in `input` directory
  - in `Bold` directory put all svg files of bold weight icons
  - in `Regular` directory put all svg files of regular weight icons
- Run `node index.js`
- Run `./generateIndexFile.sh`
- Open `./output/index.js` and remove the `index` from export object
- In Output folder
  - Search for `fill="#808080"` and replace it with `fill={fill}`.
  - Search for `stroke="#808080"` and replace it with `stroke={fill}`.

Note: We have assumed that default weight for the icons will be Bold. That means Regular weight icon may or may not be available, but Bold weight icon will always be available.

Note: In `input` directory the file name for the svg should be same for all the weights, and this name will be the component name in the output.
