import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const CaretLeftFilled = (props) => {
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
        d="M12.7072 15.2928C12.3167 15.6833 12.3167 16.3165 12.7072 16.707L18.293 22.2928C18.923 22.9228 20.0001 22.4766 20.0001 21.5857L20.0001 10.4141C20.0001 9.52321 18.923 9.07704 18.293 9.70701L12.7072 15.2928Z"
        fill={fill}
      />
    </Svg>
  );
};

CaretLeftFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

CaretLeftFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

CaretLeftFilled.displayName = "CaretLeftFilled";

export default CaretLeftFilled;
