import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const CaretOpenedFilled = (props) => {
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
        d="M15.2928 14.2929C15.6833 14.6834 16.3165 14.6834 16.707 14.2929L22.2928 8.70711C22.9228 8.07714 22.4766 7 21.5857 7H10.4141C9.52321 7 9.07704 8.07714 9.70701 8.70711L15.2928 14.2929Z"
        fill={fill}
      />
      <Path
        d="M15.2928 17.7071C15.6833 17.3166 16.3165 17.3166 16.707 17.7071L22.2928 23.2929C22.9228 23.9229 22.4766 25 21.5857 25H10.4141C9.52321 25 9.07704 23.9229 9.70701 23.2929L15.2928 17.7071Z"
        fill={fill}
      />
    </Svg>
  );
};

CaretOpenedFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

CaretOpenedFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

CaretOpenedFilled.displayName = "CaretOpenedFilled";

export default CaretOpenedFilled;
