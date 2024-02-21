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
          d="M4 8C4 7.44772 4.44772 7 5 7H26.3333C26.8856 7 27.3333 7.44772 27.3333 8C27.3333 8.55228 26.8856 9 26.3333 9H5C4.44772 9 4 8.55228 4 8Z"
          fill={fill}
        />
        <Path
          d="M6.66699 16C6.66699 15.4477 7.11471 15 7.66699 15H23.667C24.2193 15 24.667 15.4477 24.667 16C24.667 16.5523 24.2193 17 23.667 17H7.66699C7.11471 17 6.66699 16.5523 6.66699 16Z"
          fill={fill}
        />
        <Path
          d="M11.667 23C11.1147 23 10.667 23.4477 10.667 24C10.667 24.5523 11.1147 25 11.667 25H19.667C20.2193 25 20.667 24.5523 20.667 24C20.667 23.4477 20.2193 23 19.667 23H11.667Z"
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
        d="M3.5 8C3.5 7.17157 4.17157 6.5 5 6.5H26.3333C27.1618 6.5 27.8333 7.17157 27.8333 8C27.8333 8.82843 27.1618 9.5 26.3333 9.5H5C4.17157 9.5 3.5 8.82843 3.5 8Z"
        fill={fill}
      />
      <Path
        d="M6.16699 16C6.16699 15.1716 6.83857 14.5 7.66699 14.5H23.667C24.4954 14.5 25.167 15.1716 25.167 16C25.167 16.8284 24.4954 17.5 23.667 17.5H7.66699C6.83857 17.5 6.16699 16.8284 6.16699 16Z"
        fill={fill}
      />
      <Path
        d="M11.667 22.5C10.8386 22.5 10.167 23.1716 10.167 24C10.167 24.8284 10.8386 25.5 11.667 25.5H19.667C20.4954 25.5 21.167 24.8284 21.167 24C21.167 23.1716 20.4954 22.5 19.667 22.5H11.667Z"
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
