import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const CaretDownFilled = (props) => {
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
        d="M16.707 19.2929L22.2928 13.7071C22.9228 13.0771 22.4766 12 21.5857 12L10.4141 12C9.52321 12 9.07704 13.0771 9.70701 13.7071L15.2928 19.2929C15.6833 19.6834 16.3165 19.6834 16.707 19.2929Z"
        fill={fill}
      />
    </Svg>
  );
};

CaretDownFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

CaretDownFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

CaretDownFilled.displayName = "CaretDownFilled";

export default CaretDownFilled;
