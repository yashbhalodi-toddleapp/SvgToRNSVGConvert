import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const TickCircleFilled = (props) => {
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
          d="M2 16C2 8.268 8.268 2 16 2c7.732 0 14 6.268 14 14 0 7.732 -6.268 14 -14 14C8.268 30 2 23.732 2 16Zm20.707 -3.293a1 1 0 1 0 -1.414 -1.414L14 18.586 10.707 15.293a1 1 0 1 0 -1.414 1.414l4 4a1 1 0 0 0 1.414 0l8 -8Z"
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
        d="M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16ZM23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393C22.4749 10.3536 21.5251 10.3536 20.9393 10.9393L14 17.8787L11.0607 14.9393C10.4749 14.3536 9.52513 14.3536 8.93934 14.9393C8.35355 15.5251 8.35355 16.4749 8.93934 17.0607L12.9393 21.0607C13.5251 21.6464 14.4749 21.6464 15.0607 21.0607L23.0607 13.0607Z"
        fill={fill}
      />
    </Svg>
  );
};

TickCircleFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

TickCircleFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

TickCircleFilled.displayName = "TickCircleFilled";

export default TickCircleFilled;
