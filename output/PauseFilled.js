import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const PauseFilled = (props) => {
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
        d="M10 4C8.89543 4 8 4.97005 8 6.16667V25.8333C8 27.0299 8.89543 28 10 28C11.1046 28 12 27.03 12 25.8333V6.16667C12 4.97005 11.1046 4 10 4Z"
        fill={fill}
      />
      <Path
        d="M22 4C20.8954 4 20 4.97005 20 6.16667V25.8333C20 27.0299 20.8954 28 22 28C23.1046 28 24 27.03 24 25.8333V6.16667C24 4.97005 23.1046 4 22 4Z"
        fill={fill}
      />
    </Svg>
  );
};

PauseFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

PauseFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

PauseFilled.displayName = "PauseFilled";

export default PauseFilled;
