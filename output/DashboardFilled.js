import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const DashboardFilled = (props) => {
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
          d="M28 8V24C28 26.2091 26.2091 28 24 28H8C5.79086 28 4 26.2091 4 24V8C4 5.79086 5.79086 4 8 4H24C26.2091 4 28 5.79086 28 8ZM10 11C10 10.4477 10.4477 10 11 10H21C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12L11 12C10.4477 12 10 11.5523 10 11ZM14 16C14 15.4477 14.4477 15 15 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H15C14.4477 17 14 16.5523 14 16ZM14 21C14 20.4477 14.4477 20 15 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H15C14.4477 22 14 21.5523 14 21ZM10 16C10 15.4477 10.4477 15 11 15H12C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17H11C10.4477 17 10 16.5523 10 16ZM10 21C10 20.4477 10.4477 20 11 20H12C12.5523 20 13 20.4477 13 21C13 21.5523 12.5523 22 12 22H11C10.4477 22 10 21.5523 10 21Z"
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
        d="M26 2C28.2091 2 30 3.79086 30 6V26C30 28.2091 28.2091 30 26 30H6C3.79086 30 2 28.2091 2 26V6C2 3.79086 3.79086 2 6 2H26ZM10 8.5C9.17157 8.5 8.5 9.17157 8.5 10C8.5 10.8284 9.17157 11.5 10 11.5L22 11.5C22.8284 11.5 23.5 10.8284 23.5 10C23.5 9.17157 22.8284 8.5 22 8.5H10ZM16 14.5C15.1716 14.5 14.5 15.1716 14.5 16C14.5 16.8284 15.1716 17.5 16 17.5H22C22.8284 17.5 23.5 16.8284 23.5 16C23.5 15.1716 22.8284 14.5 22 14.5H16ZM14.5 22C14.5 21.1716 15.1716 20.5 16 20.5H22C22.8284 20.5 23.5 21.1716 23.5 22C23.5 22.8284 22.8284 23.5 22 23.5H16C15.1716 23.5 14.5 22.8284 14.5 22ZM10 14.5C9.17157 14.5 8.5 15.1716 8.5 16C8.5 16.8284 9.17157 17.5 10 17.5H11C11.8284 17.5 12.5 16.8284 12.5 16C12.5 15.1716 11.8284 14.5 11 14.5H10ZM8.5 22C8.5 21.1716 9.17157 20.5 10 20.5H11C11.8284 20.5 12.5 21.1716 12.5 22C12.5 22.8284 11.8284 23.5 11 23.5H10C9.17157 23.5 8.5 22.8284 8.5 22Z"
        fill={fill}
      />
    </Svg>
  );
};

DashboardFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

DashboardFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

DashboardFilled.displayName = "DashboardFilled";

export default DashboardFilled;
