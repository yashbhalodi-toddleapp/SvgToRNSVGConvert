### Svg to React Native Component Generator scripts

#### Steps:

- Clone this repo
- Run `npm install`
- in `input` directory
  - in `Bold` directory put all svg files of bold weight icons
  - in `Regular` directory put all svg files of regular weight icons
- Run `npm run generate`
- `output` directory will have all the generated components

Note: We have assumed that default weight for the icons will be Bold. That means Regular weight icon may or may not be available, but Bold weight icon will always be available.

Note: In `input` directory the file name for the svg should be same for all the weights, and this name will be the component name in the output.
