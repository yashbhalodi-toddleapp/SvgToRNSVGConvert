import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const CalendarOutlined = (props) => {
  const { size, weight } = props;

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
          d="M11 3C11 2.44772 10.5523 2 10 2C9.44772 2 9 2.44772 9 3V4H8C5.23858 4 3 6.23858 3 9V25C3 27.7614 5.23858 30 8 30H24C26.7614 30 29 27.7614 29 25V9C29 6.23858 26.7614 4 24 4H23V3C23 2.44772 22.5523 2 22 2C21.4477 2 21 2.44772 21 3V4H11V3ZM21 7V6H11V7C11 7.55229 10.5523 8 10 8C9.44772 8 9 7.55229 9 7V6H8C6.34315 6 5 7.34315 5 9V10H27V9C27 7.34315 25.6569 6 24 6H23V7C23 7.55229 22.5523 8 22 8C21.4477 8 21 7.55229 21 7ZM27 12H5V25C5 26.6569 6.34315 28 8 28H24C25.6569 28 27 26.6569 27 25V12Z"
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
        d="M11.5 3C11.5 2.17157 10.8284 1.5 10 1.5C9.17157 1.5 8.5 2.17157 8.5 3V3.5H8C4.96243 3.5 2.5 5.96243 2.5 9V25C2.5 28.0376 4.96243 30.5 8 30.5H24C27.0376 30.5 29.5 28.0376 29.5 25V9C29.5 5.96243 27.0376 3.5 24 3.5H23.5V3C23.5 2.17157 22.8284 1.5 22 1.5C21.1716 1.5 20.5 2.17157 20.5 3V3.5H11.5V3ZM20.5 7V6.5H11.5V7C11.5 7.82843 10.8284 8.5 10 8.5C9.17157 8.5 8.5 7.82843 8.5 7V6.5H8C6.61929 6.5 5.5 7.61929 5.5 9V9.5H26.5V9C26.5 7.61929 25.3807 6.5 24 6.5H23.5V7C23.5 7.82843 22.8284 8.5 22 8.5C21.1716 8.5 20.5 7.82843 20.5 7ZM26.5 12.5H5.5V25C5.5 26.3807 6.61929 27.5 8 27.5H24C25.3807 27.5 26.5 26.3807 26.5 25V12.5Z"
        fill={fill}
      />
    </Svg>
  );
};
CalendarOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
CalendarOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default CalendarOutlined;
