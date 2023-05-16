import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const ShieldCheckOutlined = (props) => {
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
          d="M4 7.56155C4 6.64382 4.62459 5.84385 5.51493 5.62127L15.5149 3.12127C15.8334 3.04165 16.1666 3.04165 16.4851 3.12127L26.4851 5.62127C27.3754 5.84385 28 6.64382 28 7.56155V13.3333C28 19.7925 24.1162 25.6183 18.1538 28.1026L16 29L13.8462 28.1026C7.8838 25.6183 4 19.7925 4 13.3333V7.56155Z"
          stroke="#808080"
          strokeWidth={2}
          strokeLinejoin="round"
        />
        <Path
          d="M22 12L15 19L12 16"
          stroke="#808080"
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
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
        d="M4 7.56155C4 6.64382 4.62459 5.84385 5.51493 5.62127L15.5149 3.12127C15.8334 3.04165 16.1666 3.04165 16.4851 3.12127L26.4851 5.62127C27.3754 5.84385 28 6.64382 28 7.56155V13.3333C28 19.7925 24.1162 25.6183 18.1538 28.1026L16 29L13.8462 28.1026C7.8838 25.6183 4 19.7925 4 13.3333V7.56155Z"
        stroke="#808080"
        strokeWidth={3}
        strokeLinejoin="round"
      />
      <Path
        d="M22 12L15 19L12 16"
        stroke="#808080"
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
ShieldCheckOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
ShieldCheckOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default ShieldCheckOutlined;
