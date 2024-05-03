import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const DashboardOutlined = (props) => {
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
          d="M11 10C10.4477 10 10 10.4477 10 11C10 11.5523 10.4477 12 11 12L21 12C21.5523 12 22 11.5523 22 11C22 10.4477 21.5523 10 21 10L11 10Z"
          fill={fill}
        />
        <Path
          d="M14 16C14 15.4477 14.4477 15 15 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H15C14.4477 17 14 16.5523 14 16Z"
          fill={fill}
        />
        <Path
          d="M15 20C14.4477 20 14 20.4477 14 21C14 21.5523 14.4477 22 15 22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20H15Z"
          fill={fill}
        />
        <Path
          d="M10 16C10 15.4477 10.4477 15 11 15H12C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17H11C10.4477 17 10 16.5523 10 16Z"
          fill={fill}
        />
        <Path
          d="M11 20C10.4477 20 10 20.4477 10 21C10 21.5523 10.4477 22 11 22H12C12.5523 22 13 21.5523 13 21C13 20.4477 12.5523 20 12 20H11Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 3C5.23858 3 3 5.23858 3 8V24C3 26.7614 5.23858 29 8 29H24C26.7614 29 29 26.7614 29 24V8C29 5.23858 26.7614 3 24 3H8ZM5 8C5 6.34315 6.34315 5 8 5H24C25.6569 5 27 6.34315 27 8V24C27 25.6569 25.6569 27 24 27H8C6.34315 27 5 25.6569 5 24V8Z"
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
        d="M10 8.5C9.17157 8.5 8.5 9.17157 8.5 10C8.5 10.8284 9.17157 11.5 10 11.5L22 11.5C22.8284 11.5 23.5 10.8284 23.5 10C23.5 9.17157 22.8284 8.5 22 8.5L10 8.5Z"
        fill={fill}
      />
      <Path
        d="M14.5 16C14.5 15.1716 15.1716 14.5 16 14.5H22C22.8284 14.5 23.5 15.1716 23.5 16C23.5 16.8284 22.8284 17.5 22 17.5H16C15.1716 17.5 14.5 16.8284 14.5 16Z"
        fill={fill}
      />
      <Path
        d="M16 20.5C15.1716 20.5 14.5 21.1716 14.5 22C14.5 22.8284 15.1716 23.5 16 23.5H22C22.8284 23.5 23.5 22.8284 23.5 22C23.5 21.1716 22.8284 20.5 22 20.5H16Z"
        fill={fill}
      />
      <Path
        d="M8.5 16C8.5 15.1716 9.17157 14.5 10 14.5H11C11.8284 14.5 12.5 15.1716 12.5 16C12.5 16.8284 11.8284 17.5 11 17.5H10C9.17157 17.5 8.5 16.8284 8.5 16Z"
        fill={fill}
      />
      <Path
        d="M10 20.5C9.17157 20.5 8.5 21.1716 8.5 22C8.5 22.8284 9.17157 23.5 10 23.5H11C11.8284 23.5 12.5 22.8284 12.5 22C12.5 21.1716 11.8284 20.5 11 20.5H10Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.48535 2.00537C4.44779 2.00537 1.98535 4.4678 1.98535 7.50537V24.5117C1.98535 27.5493 4.44778 30.0117 7.48535 30.0117H24.4917C27.5293 30.0117 29.9917 27.5493 29.9917 24.5117V7.50537C29.9917 4.46781 27.5293 2.00537 24.4917 2.00537H7.48535ZM4.98535 7.50537C4.98535 6.12466 6.10464 5.00537 7.48535 5.00537H24.4917C25.8724 5.00537 26.9917 6.12466 26.9917 7.50537V24.5117C26.9917 25.8924 25.8724 27.0117 24.4917 27.0117H7.48535C6.10464 27.0117 4.98535 25.8924 4.98535 24.5117V7.50537Z"
        fill={fill}
      />
    </Svg>
  );
};

DashboardOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

DashboardOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

DashboardOutlined.displayName = "DashboardOutlined";

export default DashboardOutlined;
