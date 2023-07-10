import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const CaretUpFilled = (props) => {
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
        d="M16.707 12.7072C16.3165 12.3167 15.6833 12.3167 15.2928 12.7072L9.70701 18.293C9.07704 18.923 9.52321 20.0001 10.4141 20.0001L21.5857 20.0001C22.4766 20.0001 22.9228 18.923 22.2928 18.293L16.707 12.7072Z"
        fill={fill}
      />
    </Svg>
  );
};

CaretUpFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

CaretUpFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

CaretUpFilled.displayName = "CaretUpFilled";

export default CaretUpFilled;
