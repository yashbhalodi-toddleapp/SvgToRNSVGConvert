import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const StarsThreeFilled = (props) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.1997 4.53976C14.8491 3.34091 13.1508 3.34091 12.8002 4.53976L10.9311 10.9311L4.53976 12.8002C3.34091 13.1508 3.34091 14.8491 4.53976 15.1997L10.9311 17.0688L12.8002 23.4602C13.1508 24.659 14.8491 24.659 15.1997 23.4602L17.0688 17.0688L23.4602 15.1997C24.659 14.8491 24.659 13.1508 23.4602 12.8002L17.0688 10.9311L15.1997 4.53976ZM24.5999 19.8245C24.522 19.5581 24.2776 19.375 24 19.375C23.7224 19.375 23.478 19.5581 23.4001 19.8245L22.5911 22.591L19.8246 23.4001C19.5581 23.478 19.375 23.7224 19.375 24C19.375 24.2776 19.5581 24.5219 19.8246 24.5998L22.5911 25.4089L23.4001 28.1754C23.478 28.4419 23.7224 28.625 24 28.625C24.2776 28.625 24.522 28.4419 24.5999 28.1754L25.4089 25.4089L28.1754 24.5998C28.4419 24.5219 28.625 24.2776 28.625 24C28.625 23.7224 28.4419 23.478 28.1754 23.4001L25.4089 22.591L24.5999 19.8245Z"
        fill={fill}
      />
    </Svg>
  );
};

StarsThreeFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

StarsThreeFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

StarsThreeFilled.displayName = "StarsThreeFilled";

export default StarsThreeFilled;
