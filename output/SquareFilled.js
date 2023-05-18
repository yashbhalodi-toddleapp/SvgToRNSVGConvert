import React from "react";
import PropTypes from "prop-types";
import Svg, { Rect } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const SquareFilled = (props) => {
  const { size, weight, fill } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect x={4} y={4} width={24} height={24} rx={4} fill={fill} />
    </Svg>
  );
};

SquareFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

SquareFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

SquareFilled.displayName = "SquareFilled";

export default SquareFilled;
