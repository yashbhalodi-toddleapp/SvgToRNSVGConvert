import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const FilterThreeLinesCircleOutlined = (props) => {
  const { size, weight, fill } = props;
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

FilterThreeLinesCircleOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

FilterThreeLinesCircleOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

FilterThreeLinesCircleOutlined.displayName = "FilterThreeLinesCircleOutlined";

export default FilterThreeLinesCircleOutlined;
