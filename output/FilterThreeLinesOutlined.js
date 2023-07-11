import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const FilterThreeLinesOutlined = (props) => {
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
          d="M12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17H20C20.5523 17 21 16.5523 21 16C21 15.4477 20.5523 15 20 15H12Z"
          fill={fill}
        />
        <Path
          d="M10 11C10 10.4477 10.4477 10 11 10H21C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12H11C10.4477 12 10 11.5523 10 11Z"
          fill={fill}
        />
        <Path
          d="M14 20C13.4477 20 13 20.4477 13 21C13 21.5523 13.4477 22 14 22H18C18.5523 22 19 21.5523 19 21C19 20.4477 18.5523 20 18 20H14Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16ZM16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28Z"
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
        d="M12 14.5C11.1716 14.5 10.5 15.1716 10.5 16C10.5 16.8284 11.1716 17.5 12 17.5H20C20.8284 17.5 21.5 16.8284 21.5 16C21.5 15.1716 20.8284 14.5 20 14.5H12Z"
        fill={fill}
      />
      <Path
        d="M9.5 11C9.5 10.1716 10.1716 9.5 11 9.5H21C21.8284 9.5 22.5 10.1716 22.5 11C22.5 11.8284 21.8284 12.5 21 12.5H11C10.1716 12.5 9.5 11.8284 9.5 11Z"
        fill={fill}
      />
      <Path
        d="M14 19.5C13.1716 19.5 12.5 20.1716 12.5 21C12.5 21.8284 13.1716 22.5 14 22.5H18C18.8284 22.5 19.5 21.8284 19.5 21C19.5 20.1716 18.8284 19.5 18 19.5H14Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16ZM16 27C9.92487 27 5 22.0751 5 16C5 9.92487 9.92487 5 16 5C22.0751 5 27 9.92487 27 16C27 22.0751 22.0751 27 16 27Z"
        fill={fill}
      />
    </Svg>
  );
};

FilterThreeLinesOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

FilterThreeLinesOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

FilterThreeLinesOutlined.displayName = "FilterThreeLinesOutlined";

export default FilterThreeLinesOutlined;
