import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const UnitPlanFilled = (props) => {
  const { size, weight } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M3 7C3 4.23858 5.23858 2 8 2H24C26.7614 2 29 4.23858 29 7V17C29 19.7614 26.7614 22 24 22H8C5.23858 22 3 19.7614 3 17V7Z"
        fill={fill}
      />
      <Path
        d="M5 26C4.44772 26 4 26.4477 4 27C4 27.5523 4.44772 28 5 28H21C21.5523 28 22 27.5523 22 27C22 26.4477 21.5523 26 21 26H5Z"
        fill={fill}
      />
    </Svg>
  );
};
UnitPlanFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
UnitPlanFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default UnitPlanFilled;
