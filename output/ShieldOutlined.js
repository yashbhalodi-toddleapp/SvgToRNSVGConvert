import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ShieldOutlined = (props) => {
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
          d="M4 6.83789C4 5.8704 4.69254 5.04163 5.64463 4.86972L15.6446 3.06416C15.8796 3.02173 16.1204 3.02173 16.3554 3.06416L26.3554 4.86972C27.3075 5.04163 28 5.8704 28 6.83789V13.2511C28 19.5405 24.3152 25.2466 18.5827 27.8342L16 29L13.4173 27.8342C7.6848 25.2466 4 19.5405 4 13.2511V6.83789Z"
          stroke={fill}
          strokeWidth={2}
          strokeLinejoin="round"
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
        d="M4 6.83789C4 5.8704 4.69254 5.04163 5.64463 4.86972L15.6446 3.06416C15.8796 3.02173 16.1204 3.02173 16.3554 3.06416L26.3554 4.86972C27.3075 5.04163 28 5.8704 28 6.83789V13.2511C28 19.5405 24.3152 25.2466 18.5827 27.8342L16 29L13.4173 27.8342C7.6848 25.2466 4 19.5405 4 13.2511V6.83789Z"
        stroke={fill}
        strokeWidth={3}
        strokeLinejoin="round"
      />
    </Svg>
  );
};

ShieldOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ShieldOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ShieldOutlined.displayName = "ShieldOutlined";

export default ShieldOutlined;
