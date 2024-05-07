import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const CaretClosedFilled = (props) => {
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
        d="M15.2928 6.7072C15.6833 6.31668 16.3165 6.31668 16.707 6.7072L22.2928 12.293C22.9228 12.923 22.4766 14.0001 21.5857 14.0001L10.4141 14.0001C9.52321 14.0001 9.07704 12.923 9.70701 12.293L15.2928 6.7072Z"
        fill={fill}
      />
      <Path
        d="M15.2928 25.293C15.6833 25.6835 16.3165 25.6835 16.707 25.293L22.2928 19.7072C22.9228 19.0772 22.4766 18.0001 21.5857 18.0001L10.4141 18.0001C9.52321 18.0001 9.07704 19.0772 9.70701 19.7072L15.2928 25.293Z"
        fill={fill}
      />
    </Svg>
  );
};

CaretClosedFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

CaretClosedFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

CaretClosedFilled.displayName = "CaretClosedFilled";

export default CaretClosedFilled;
