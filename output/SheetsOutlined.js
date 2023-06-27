import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const SheetsOutlined = (props) => {
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
          d="M3 8C3 5.23858 5.23858 3 8 3H24C26.7614 3 29 5.23858 29 8V24C29 26.7614 26.7614 29 24 29H8C5.23858 29 3 26.7614 3 24V8ZM5 15V24C5 25.6569 6.34315 27 8 27H11L11 15H5ZM11 13H5V8C5 6.34315 6.34315 5 8 5H11L11 13ZM13 15L13 27H24C25.6569 27 27 25.6569 27 24V15H13ZM27 13H13V5H24C25.6569 5 27 6.34315 27 8V13Z"
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
        d="M2.5 8C2.5 4.96243 4.96243 2.5 8 2.5H24C27.0376 2.5 29.5 4.96243 29.5 8V24C29.5 27.0376 27.0376 29.5 24 29.5H8C4.96243 29.5 2.5 27.0376 2.5 24V8ZM5.5 15.5V24C5.5 25.3807 6.61929 26.5 8 26.5H10.5L10.5 15.5H5.5ZM10.5 12.5H5.5V8C5.5 6.61929 6.61929 5.5 8 5.5H10.5L10.5 12.5ZM13.5 15.5L13.5 26.5H24C25.3807 26.5 26.5 25.3807 26.5 24V15.5H13.5ZM26.5 12.5H13.5V5.5H24C25.3807 5.5 26.5 6.61929 26.5 8V12.5Z"
        fill={fill}
      />
    </Svg>
  );
};

SheetsOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

SheetsOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

SheetsOutlined.displayName = "SheetsOutlined";

export default SheetsOutlined;
