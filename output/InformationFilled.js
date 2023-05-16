import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const InformationFilled = (props) => {
  const { size, weight } = props;

  if (weight === "REGULAR") {
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
          d="M2 16C2 8.26801 8.26802 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16ZM17.5 10.5C17.5 9.67158 16.8284 9 16 9C15.1716 9 14.5 9.67158 14.5 10.5C14.5 11.3284 15.1716 12 16 12C16.8284 12 17.5 11.3284 17.5 10.5ZM19 22C19 22.5523 18.5523 23 18 23H16C15.4477 23 15 22.5523 15 22V16H14C13.4477 16 13 15.5523 13 15C13 14.4477 13.4477 14 14 14H16C16.5523 14 17 14.4477 17 15V21H18C18.5523 21 19 21.4477 19 22Z"
          fill={fill}
        />
      </Svg>
    );
  }

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M16 2C8.26802 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2Z"
        fill={fill}
      />
      <Path
        d="M16 9C16.8284 9 17.5 9.67158 17.5 10.5C17.5 11.3284 16.8284 12 16 12C15.1716 12 14.5 11.3284 14.5 10.5C14.5 9.67158 15.1716 9 16 9Z"
        fill="white"
      />
      <Path
        d="M18 23C18.5523 23 19 22.5523 19 22C19 21.4477 18.5523 21 18 21H17L17 15C17 14.4477 16.5523 14 16 14H14C13.4477 14 13 14.4477 13 15C13 15.5523 13.4477 16 14 16H15L15 22C15 22.5523 15.4477 23 16 23H18Z"
        fill="white"
      />
    </Svg>
  );
};
InformationFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
InformationFilled.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default InformationFilled;
