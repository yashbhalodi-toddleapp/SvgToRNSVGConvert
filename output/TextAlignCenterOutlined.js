import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const TextAlignCenterOutlined = (props) => {
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
          d="M4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H28C28.5523 8 29 7.55228 29 7C29 6.44772 28.5523 6 28 6H4Z"
          fill={fill}
        />
        <Path
          d="M4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H28C28.5523 20 29 19.5523 29 19C29 18.4477 28.5523 18 28 18H4Z"
          fill={fill}
        />
        <Path
          d="M7 13C7 12.4477 7.44772 12 8 12H24C24.5523 12 25 12.4477 25 13C25 13.5523 24.5523 14 24 14H8C7.44772 14 7 13.5523 7 13Z"
          fill={fill}
        />
        <Path
          d="M8 24C7.44772 24 7 24.4477 7 25C7 25.5523 7.44772 26 8 26H24C24.5523 26 25 25.5523 25 25C25 24.4477 24.5523 24 24 24H8Z"
          fill={fill}
        />
      </Svg>
    );
  }

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4 5.5C3.17157 5.5 2.5 6.17157 2.5 7C2.5 7.82843 3.17157 8.5 4 8.5H28C28.8284 8.5 29.5 7.82843 29.5 7C29.5 6.17157 28.8284 5.5 28 5.5H4Z"
        fill={fill}
      />
      <Path
        d="M4 17.5C3.17157 17.5 2.5 18.1716 2.5 19C2.5 19.8284 3.17157 20.5 4 20.5H28C28.8284 20.5 29.5 19.8284 29.5 19C29.5 18.1716 28.8284 17.5 28 17.5H4Z"
        fill={fill}
      />
      <Path
        d="M6.5 13C6.5 12.1716 7.17157 11.5 8 11.5H24C24.8284 11.5 25.5 12.1716 25.5 13C25.5 13.8284 24.8284 14.5 24 14.5H8C7.17157 14.5 6.5 13.8284 6.5 13Z"
        fill={fill}
      />
      <Path
        d="M8 23.5C7.17157 23.5 6.5 24.1716 6.5 25C6.5 25.8284 7.17157 26.5 8 26.5H24C24.8284 26.5 25.5 25.8284 25.5 25C25.5 24.1716 24.8284 23.5 24 23.5H8Z"
        fill={fill}
      />
    </Svg>
  );
};

TextAlignCenterOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

TextAlignCenterOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

TextAlignCenterOutlined.displayName = "TextAlignCenterOutlined";

export default TextAlignCenterOutlined;
