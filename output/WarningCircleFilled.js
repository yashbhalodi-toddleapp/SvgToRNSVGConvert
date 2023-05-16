import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const WarningCircleFilled = (props) => {
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
          d="M16 2C8.26802 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2Z"
          fill="#808080"
        />
        <Path
          d="M16 9C15.4477 9 15 9.44772 15 10V17C15 17.5523 15.4477 18 16 18C16.5523 18 17 17.5523 17 17V10C17 9.44772 16.5523 9 16 9Z"
          fill="white"
        />
        <Path
          d="M17.5 21.5C17.5 20.6716 16.8284 20 16 20C15.1716 20 14.5 20.6716 14.5 21.5C14.5 22.3284 15.1716 23 16 23C16.8284 23 17.5 22.3284 17.5 21.5Z"
          fill="white"
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
        fill="#808080"
      />
      <Path
        d="M14.5 10.5C14.5 9.67157 15.1716 9 16 9V9C16.8284 9 17.5 9.67157 17.5 10.5V16.5C17.5 17.3284 16.8284 18 16 18V18C15.1716 18 14.5 17.3284 14.5 16.5V10.5Z"
        fill="white"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 9C15.1716 9 14.5 9.67157 14.5 10.5V16.5C14.5 17.3284 15.1716 18 16 18C16.8284 18 17.5 17.3284 17.5 16.5V10.5C17.5 9.67157 16.8284 9 16 9ZM16.5 16.5V10.5C16.5 10.2239 16.2761 10 16 10C15.7239 10 15.5 10.2239 15.5 10.5V16.5C15.5 16.7761 15.7239 17 16 17C16.2761 17 16.5 16.7761 16.5 16.5Z"
        fill="white"
      />
      <Path
        d="M17.5 21.5C17.5 20.6716 16.8284 20 16 20C15.1716 20 14.5 20.6716 14.5 21.5C14.5 22.3284 15.1716 23 16 23C16.8284 23 17.5 22.3284 17.5 21.5Z"
        fill="white"
      />
    </Svg>
  );
};
WarningCircleFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
WarningCircleFilled.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default WarningCircleFilled;
