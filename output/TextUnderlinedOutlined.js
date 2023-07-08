import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const TextUnderlinedOutlined = (props) => {
  const { size, weight, fill } = props;

  if (weight === "REGULAR") {
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M8 4C8 3.44772 7.55228 3 7 3C6.44772 3 6 3.44772 6 4V15C6 20.5228 10.4772 25 16 25C21.5228 25 26 20.5228 26 15V4C26 3.44772 25.5523 3 25 3C24.4477 3 24 3.44772 24 4V15C24 19.4183 20.4183 23 16 23C11.5817 23 8 19.4183 8 15V4Z"
          fill={fill}
        />
        <Path
          d="M5 28C4.44772 28 4 28.4477 4 29C4 29.5523 4.44772 30 5 30H27C27.5523 30 28 29.5523 28 29C28 28.4477 27.5523 28 27 28H5Z"
          fill={fill}
        />
      </Svg>
    );
  }

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M8.5 4.5C8.5 3.67157 7.82843 3 7 3C6.17157 3 5.5 3.67157 5.5 4.5V15.5C5.5 21.299 10.201 26 16 26C21.799 26 26.5 21.299 26.5 15.5V4.5C26.5 3.67157 25.8284 3 25 3C24.1716 3 23.5 3.67157 23.5 4.5V15.5C23.5 19.6421 20.1421 23 16 23C11.8579 23 8.5 19.6421 8.5 15.5V4.5Z"
        fill={fill}
      />
      <Path
        d="M5 28C4.17157 28 3.5 28.6716 3.5 29.5C3.5 30.3284 4.17157 31 5 31H27C27.8284 31 28.5 30.3284 28.5 29.5C28.5 28.6716 27.8284 28 27 28H5Z"
        fill={fill}
      />
    </Svg>
  );
};

TextUnderlinedOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

TextUnderlinedOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

TextUnderlinedOutlined.displayName = "TextUnderlinedOutlined";

export default TextUnderlinedOutlined;
