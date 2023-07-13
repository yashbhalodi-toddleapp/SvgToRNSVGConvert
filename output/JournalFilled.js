import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const JournalFilled = (props) => {
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
          d="M9 2C6.23858 2 4 4.23858 4 7V25C4 27.7614 6.23858 30 9 30H23C25.7614 30 28 27.7614 28 25V7C28 4.23858 25.7614 2 23 2H9ZM6 24H21C22.9587 24 24.7295 23.1955 26 21.899V25C26 26.6569 24.6569 28 23 28H9C7.34315 28 6 26.6569 6 25V24ZM11 11C11 10.4477 11.4477 10 12 10H20C20.5523 10 21 10.4477 21 11C21 11.5523 20.5523 12 20 12H12C11.4477 12 11 11.5523 11 11Z"
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
        d="M27.5288 4.87816C28.1413 5.76503 28.5 6.84062 28.5 8V25C28.5 28.0376 26.0376 30.5 23 30.5H9C5.96243 30.5 3.5 28.0376 3.5 25V8C3.5 6.84062 3.85873 5.76503 4.47124 4.87816C5.26938 3.17759 6.99717 2 9 2H23C25.0028 2 26.7306 3.17759 27.5288 4.87816ZM6.5 24V25C6.5 26.3807 7.61929 27.5 9 27.5H23C24.3807 27.5 25.5 26.3807 25.5 25V22.3621C24.2832 23.3843 22.7135 24 21 24H6.5ZM12 9.5C11.1716 9.5 10.5 10.1716 10.5 11C10.5 11.8284 11.1716 12.5 12 12.5H20C20.8284 12.5 21.5 11.8284 21.5 11C21.5 10.1716 20.8284 9.5 20 9.5H12Z"
        fill={fill}
      />
    </Svg>
  );
};

JournalFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

JournalFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

JournalFilled.displayName = "JournalFilled";

export default JournalFilled;
