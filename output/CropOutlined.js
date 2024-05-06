import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const CropOutlined = (props) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 3C10 2.44772 9.55228 2 9 2C8.44772 2 8 2.44772 8 3V8L3 8C2.44772 8 2 8.44772 2 9C2 9.55229 2.44772 10 3 10L8 10V21C8 22.6569 9.34315 24 11 24H22V29C22 29.5523 22.4477 30 23 30C23.5523 30 24 29.5523 24 29V24H29C29.5523 24 30 23.5523 30 23C30 22.4477 29.5523 22 29 22H24L24 11C24 9.34315 22.6569 8 21 8L10 8V3ZM10 10V21C10 21.5523 10.4477 22 11 22H22L22 11C22 10.4477 21.5523 10 21 10L10 10Z"
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 3C10.5 2.17157 9.82843 1.5 9 1.5C8.17157 1.5 7.5 2.17157 7.5 3V7.5L3 7.5C2.17157 7.5 1.5 8.17157 1.5 9C1.5 9.82843 2.17157 10.5 3 10.5L7.5 10.5V21C7.5 22.933 9.067 24.5 11 24.5H21.5V29C21.5 29.8284 22.1716 30.5 23 30.5C23.8284 30.5 24.5 29.8284 24.5 29V24.5H29C29.8284 24.5 30.5 23.8284 30.5 23C30.5 22.1716 29.8284 21.5 29 21.5H24.5L24.5 11C24.5 9.067 22.933 7.5 21 7.5L10.5 7.5V3ZM10.5 10.5V21C10.5 21.2761 10.7239 21.5 11 21.5H21.5L21.5 11C21.5 10.7239 21.2761 10.5 21 10.5L10.5 10.5Z"
        fill={fill}
      />
    </Svg>
  );
};

CropOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

CropOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

CropOutlined.displayName = "CropOutlined";

export default CropOutlined;
