import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const FilterThreeLinesCircleFilled = (props) => {
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
          d="M2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16ZM11 10C10.4477 10 10 10.4477 10 11C10 11.5523 10.4477 12 11 12H21C21.5523 12 22 11.5523 22 11C22 10.4477 21.5523 10 21 10H11ZM12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17H20C20.5523 17 21 16.5523 21 16C21 15.4477 20.5523 15 20 15H12ZM13 21C13 20.4477 13.4477 20 14 20H18C18.5523 20 19 20.4477 19 21C19 21.5523 18.5523 22 18 22H14C13.4477 22 13 21.5523 13 21Z"
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
        d="M2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16ZM9.5 11C9.5 10.1716 10.1716 9.5 11 9.5H21C21.8284 9.5 22.5 10.1716 22.5 11C22.5 11.8284 21.8284 12.5 21 12.5H11C10.1716 12.5 9.5 11.8284 9.5 11ZM10.5 16C10.5 15.1716 11.1716 14.5 12 14.5H20C20.8284 14.5 21.5 15.1716 21.5 16C21.5 16.8284 20.8284 17.5 20 17.5H12C11.1716 17.5 10.5 16.8284 10.5 16ZM12.5 21C12.5 20.1716 13.1716 19.5 14 19.5H18C18.8284 19.5 19.5 20.1716 19.5 21C19.5 21.8284 18.8284 22.5 18 22.5H14C13.1716 22.5 12.5 21.8284 12.5 21Z"
        fill={fill}
      />
    </Svg>
  );
};

FilterThreeLinesCircleFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

FilterThreeLinesCircleFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

FilterThreeLinesCircleFilled.displayName = "FilterThreeLinesCircleFilled";

export default FilterThreeLinesCircleFilled;
