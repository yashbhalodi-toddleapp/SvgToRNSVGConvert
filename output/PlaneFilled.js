import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const PlaneFilled = (props) => {
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
          d="M5.79706 3.19648C6.11712 2.95937 6.54738 2.93482 6.89233 3.13398L27.6769 15.134C27.9863 15.3126 28.1769 15.6427 28.1769 16C28.1769 16.3573 27.9863 16.6874 27.6769 16.866L6.89234 28.866C6.54738 29.0652 6.11713 29.0406 5.79707 28.8035C5.477 28.5664 5.32818 28.162 5.41822 27.7739L7.91832 17H18C18.5523 17 19 16.5523 19 16C19 15.4477 18.5523 15 18 15H7.91832L5.41822 4.22605C5.32818 3.83804 5.477 3.43359 5.79706 3.19648Z"
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
        d="M5.7971 3.19648C6.11716 2.95937 6.54742 2.93482 6.89238 3.13398L27.677 15.134C27.9864 15.3126 28.177 15.6427 28.177 16C28.177 16.3573 27.9864 16.6874 27.677 16.866L6.89238 28.866C6.54743 29.0652 6.11717 29.0406 5.79711 28.8035C5.47705 28.5664 5.32823 28.162 5.41827 27.7739L7.80234 17.5H18C18.8284 17.5 19.5 16.8284 19.5 16C19.5 15.1716 18.8284 14.5 18 14.5H7.80234L5.41826 4.22605C5.32822 3.83804 5.47704 3.43359 5.7971 3.19648Z"
        fill={fill}
      />
    </Svg>
  );
};

PlaneFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

PlaneFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

PlaneFilled.displayName = "PlaneFilled";

export default PlaneFilled;
