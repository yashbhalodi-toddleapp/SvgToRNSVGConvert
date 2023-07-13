import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const JournalOutlined = (props) => {
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
          d="M12 10C11.4477 10 11 10.4477 11 11C11 11.5523 11.4477 12 12 12H20C20.5523 12 21 11.5523 21 11C21 10.4477 20.5523 10 20 10H12Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 7C4 4.23858 6.23858 2 9 2H23C25.7614 2 28 4.23858 28 7V25C28 27.7614 25.7614 30 23 30H9C6.23858 30 4 27.7614 4 25V7ZM26 7V17C26 19.7614 23.7614 22 21 22H6V7C6 5.34315 7.34315 4 9 4H23C24.6569 4 26 5.34315 26 7ZM21 24C22.9587 24 24.7295 23.1955 26 21.899V25C26 26.6569 24.6569 28 23 28H9C7.34315 28 6 26.6569 6 25V24H21Z"
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
        d="M3.5 7C3.5 3.96243 5.96243 1.5 9 1.5H23C26.0376 1.5 28.5 3.96243 28.5 7V25C28.5 28.0376 26.0376 30.5 23 30.5H9C5.96243 30.5 3.5 28.0376 3.5 25V7ZM9 4.5C7.61929 4.5 6.5 5.61929 6.5 7V25C6.5 26.3807 7.61929 27.5 9 27.5H23C24.3807 27.5 25.5 26.3807 25.5 25V7C25.5 5.61929 24.3807 4.5 23 4.5H9Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 7C3.5 3.96243 5.96243 1.5 9 1.5H23C26.0376 1.5 28.5 3.96243 28.5 7V17C28.5 21.1421 25.1421 24.5 21 24.5H3.5V7ZM9 4.5C7.61929 4.5 6.5 5.61929 6.5 7V21.5H21C23.4853 21.5 25.5 19.4853 25.5 17V7C25.5 5.61929 24.3807 4.5 23 4.5H9Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 11C10.5 10.1716 11.1716 9.5 12 9.5H20C20.8284 9.5 21.5 10.1716 21.5 11C21.5 11.8284 20.8284 12.5 20 12.5H12C11.1716 12.5 10.5 11.8284 10.5 11Z"
        fill={fill}
      />
    </Svg>
  );
};

JournalOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

JournalOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

JournalOutlined.displayName = "JournalOutlined";

export default JournalOutlined;
