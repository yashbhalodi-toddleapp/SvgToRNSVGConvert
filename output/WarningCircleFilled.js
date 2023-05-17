import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const WarningCircleFilled = (props) => {
  const { size, weight, fill } = props;

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
          d="M2 16C2 8.268 8.268 2 16 2S30 8.268 30 16c0 7.732 -6.268 14 -14 14C8.268 30 2 23.732 2 16Zm13 -6a1 1 0 1 1 2 0v7a1 1 0 1 1 -2 0V10ZM16 20a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0 -3Z"
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 16C2 8.26801 8.26802 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16ZM14.5 10.5C14.5 9.67157 15.1716 9 16 9C16.8284 9 17.5 9.67157 17.5 10.5V16.5C17.5 17.3284 16.8284 18 16 18C15.1716 18 14.5 17.3284 14.5 16.5V10.5ZM17.5 21.5C17.5 20.6716 16.8284 20 16 20C15.1716 20 14.5 20.6716 14.5 21.5C14.5 22.3284 15.1716 23 16 23C16.8284 23 17.5 22.3284 17.5 21.5Z"
        fill={fill}
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
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default WarningCircleFilled;
