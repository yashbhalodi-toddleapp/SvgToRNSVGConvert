import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const GridOutlined = (props) => {
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
          d="M5 3C3.89543 3 3 3.89543 3 5V12C3 13.1046 3.89543 14 5 14H12C13.1046 14 14 13.1046 14 12V5C14 3.89543 13.1046 3 12 3H5ZM5 5H12V12H5V5Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 18C3.89543 18 3 18.8954 3 20V27C3 28.1046 3.89543 29 5 29H12C13.1046 29 14 28.1046 14 27V20C14 18.8954 13.1046 18 12 18H5ZM5 20H12V27H5V20Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 5C18 3.89543 18.8954 3 20 3H27C28.1046 3 29 3.89543 29 5V12C29 13.1046 28.1046 14 27 14H20C18.8954 14 18 13.1046 18 12V5ZM27 5H20V12H27V5Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 18C18.8954 18 18 18.8954 18 20V27C18 28.1046 18.8954 29 20 29H27C28.1046 29 29 28.1046 29 27V20C29 18.8954 28.1046 18 27 18H20ZM20 20H27V27H20V20Z"
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
        d="M5 2.5C3.61929 2.5 2.5 3.61929 2.5 5V12C2.5 13.3807 3.61929 14.5 5 14.5H12C13.3807 14.5 14.5 13.3807 14.5 12V5C14.5 3.61929 13.3807 2.5 12 2.5H5ZM5.5 11.5V5.5H11.5V11.5H5.5Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 17.5C3.61929 17.5 2.5 18.6193 2.5 20V27C2.5 28.3807 3.61929 29.5 5 29.5H12C13.3807 29.5 14.5 28.3807 14.5 27V20C14.5 18.6193 13.3807 17.5 12 17.5H5ZM5.5 26.5V20.5H11.5V26.5H5.5Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 5C17.5 3.61929 18.6193 2.5 20 2.5H27C28.3807 2.5 29.5 3.61929 29.5 5V12C29.5 13.3807 28.3807 14.5 27 14.5H20C18.6193 14.5 17.5 13.3807 17.5 12V5ZM20.5 5.5V11.5H26.5V5.5H20.5Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 17.5C18.6193 17.5 17.5 18.6193 17.5 20V27C17.5 28.3807 18.6193 29.5 20 29.5H27C28.3807 29.5 29.5 28.3807 29.5 27V20C29.5 18.6193 28.3807 17.5 27 17.5H20ZM20.5 26.5V20.5H26.5V26.5H20.5Z"
        fill={fill}
      />
    </Svg>
  );
};

GridOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

GridOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

GridOutlined.displayName = "GridOutlined";

export default GridOutlined;
