import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const CaretRightFilled = (props) => {
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
        d="M20.2929 15.2928C20.6834 15.6833 20.6834 16.3165 20.2929 16.707L14.7071 22.2928C14.0771 22.9228 13 22.4766 13 21.5857L13 10.4141C13 9.52321 14.0771 9.07704 14.7071 9.70701L20.2929 15.2928Z"
        fill={fill}
      />
    </Svg>
  );
};

CaretRightFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

CaretRightFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

CaretRightFilled.displayName = "CaretRightFilled";

export default CaretRightFilled;
