import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const UnitPlanOutlined = (props) => {
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
          d="M8 2C5.23858 2 3 4.23858 3 7V17C3 19.7614 5.23858 22 8 22H24C26.7614 22 29 19.7614 29 17V7C29 4.23858 26.7614 2 24 2H8ZM5 7C5 5.34315 6.34315 4 8 4H24C25.6569 4 27 5.34315 27 7V17C27 18.6569 25.6569 20 24 20H8C6.34315 20 5 18.6569 5 17V7Z"
          fill={fill}
        />
        <Path
          d="M5 26C4.44772 26 4 26.4477 4 27C4 27.5523 4.44772 28 5 28H21C21.5523 28 22 27.5523 22 27C22 26.4477 21.5523 26 21 26H5Z"
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
        d="M8 1.5C4.96243 1.5 2.5 3.96243 2.5 7V17C2.5 20.0376 4.96243 22.5 8 22.5H24C27.0376 22.5 29.5 20.0376 29.5 17V7C29.5 3.96243 27.0376 1.5 24 1.5H8ZM5.5 7C5.5 5.61929 6.61929 4.5 8 4.5H24C25.3807 4.5 26.5 5.61929 26.5 7V17C26.5 18.3807 25.3807 19.5 24 19.5H8C6.61929 19.5 5.5 18.3807 5.5 17V7Z"
        fill={fill}
      />
      <Path
        d="M5 25.5C4.17157 25.5 3.5 26.1716 3.5 27C3.5 27.8284 4.17157 28.5 5 28.5H21C21.8284 28.5 22.5 27.8284 22.5 27C22.5 26.1716 21.8284 25.5 21 25.5H5Z"
        fill={fill}
      />
    </Svg>
  );
};

UnitPlanOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

UnitPlanOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default UnitPlanOutlined;
