import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const SortOutlined = (props) => {
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
          d="M24.874 7C24.4299 8.72523 22.8638 10 21 10C19.1362 10 17.5701 8.72523 17.126 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H17.126C17.5701 3.27477 19.1362 2 21 2C22.8638 2 24.4299 3.27477 24.874 5H29C29.5523 5 30 5.44772 30 6C30 6.55228 29.5523 7 29 7H24.874ZM23 6C23 7.10457 22.1046 8 21 8C19.8954 8 19 7.10457 19 6C19 4.89543 19.8954 4 21 4C22.1046 4 23 4.89543 23 6Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 15C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H7.12602C7.57006 18.7252 9.13616 20 11 20C12.8638 20 14.4299 18.7252 14.874 17H29C29.5523 17 30 16.5523 30 16C30 15.4477 29.5523 15 29 15H14.874C14.4299 13.2748 12.8638 12 11 12C9.13616 12 7.57006 13.2748 7.12602 15H3ZM11 18C9.89543 18 9 17.1046 9 16C9 14.8954 9.89543 14 11 14C12.1046 14 13 14.8954 13 16C13 17.1046 12.1046 18 11 18Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 26C2 25.4477 2.44772 25 3 25H17.126C17.5701 23.2748 19.1362 22 21 22C22.8651 22 24.4321 23.2765 24.8749 25.0036C24.903 25.0012 24.9313 25 24.96 25H29C29.5523 25 30 25.4477 30 26C30 26.5523 29.5523 27 29 27H24.96C24.9313 27 24.903 26.9988 24.8749 26.9964C24.4321 28.7235 22.8651 30 21 30C19.1362 30 17.5701 28.7252 17.126 27H3C2.44772 27 2 26.5523 2 26ZM23 26C23 27.1046 22.1046 28 21 28C19.8954 28 19 27.1046 19 26C19 24.8954 19.8954 24 21 24C22.1046 24 23 24.8954 23 26Z"
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
        d="M3 26H18"
        stroke={fill}
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 16H29"
        stroke={fill}
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 6H18"
        stroke={fill}
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M24 26H29"
        stroke={fill}
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 16H8"
        stroke={fill}
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M24 6H29"
        stroke={fill}
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 9C23.6569 9 25 7.65685 25 6C25 4.34315 23.6569 3 22 3C20.3431 3 19 4.34315 19 6C19 7.65685 20.3431 9 22 9Z"
        fill="white"
        stroke={fill}
        strokeWidth={3}
        strokeMiterlimit={10}
      />
      <Path
        d="M9 19C10.6569 19 12 17.6569 12 16C12 14.3431 10.6569 13 9 13C7.34315 13 6 14.3431 6 16C6 17.6569 7.34315 19 9 19Z"
        fill="white"
        stroke={fill}
        strokeWidth={3}
        strokeMiterlimit={10}
      />
      <Path
        d="M22 28C23.6569 28 25 26.6569 25 25C25 23.3431 23.6569 22 22 22C20.3431 22 19 23.3431 19 25C19 26.6569 20.3431 28 22 28Z"
        fill="white"
        stroke={fill}
        strokeWidth={3}
        strokeMiterlimit={10}
      />
    </Svg>
  );
};

SortOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

SortOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

SortOutlined.displayName = "SortOutlined";

export default SortOutlined;
