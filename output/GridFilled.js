import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const GridFilled = (props) => {
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
        d="M5 3C3.89543 3 3 3.89543 3 5V12C3 13.1046 3.89543 14 5 14H12C13.1046 14 14 13.1046 14 12V5C14 3.89543 13.1046 3 12 3H5Z"
        fill={fill}
      />
      <Path
        d="M5 18C3.89543 18 3 18.8954 3 20V27C3 28.1046 3.89543 29 5 29H12C13.1046 29 14 28.1046 14 27V20C14 18.8954 13.1046 18 12 18H5Z"
        fill={fill}
      />
      <Path
        d="M20 3C18.8954 3 18 3.89543 18 5V12C18 13.1046 18.8954 14 20 14H27C28.1046 14 29 13.1046 29 12V5C29 3.89543 28.1046 3 27 3H20Z"
        fill={fill}
      />
      <Path
        d="M20 18C18.8954 18 18 18.8954 18 20V27C18 28.1046 18.8954 29 20 29H27C28.1046 29 29 28.1046 29 27V20C29 18.8954 28.1046 18 27 18H20Z"
        fill={fill}
      />
    </Svg>
  );
};

GridFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

GridFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

GridFilled.displayName = "GridFilled";

export default GridFilled;
