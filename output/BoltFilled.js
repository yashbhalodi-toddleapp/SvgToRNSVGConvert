import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const BoltFilled = (props) => {
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
        d="M19.9959 3.09042C20.034 2.67115 19.8054 2.27295 19.4241 2.09441C19.0429 1.91587 18.5906 1.99523 18.2929 2.29292L4.29292 16.2929C4.02257 16.5633 3.93003 16.9641 4.05452 17.3256C4.17901 17.6871 4.49872 17.946 4.87821 17.9926L11.9165 18.8564L11.0041 28.9096C10.9661 29.3289 11.1947 29.7271 11.5759 29.9056C11.9572 30.0842 12.4094 30.0048 12.7071 29.7071L26.7071 15.7071C26.9775 15.4368 27.07 15.0359 26.9455 14.6744C26.8211 14.3129 26.5013 14.054 26.1218 14.0075L19.0835 13.1437L19.9959 3.09042Z"
        fill={fill}
      />
    </Svg>
  );
};

BoltFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

BoltFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

BoltFilled.displayName = "BoltFilled";

export default BoltFilled;
