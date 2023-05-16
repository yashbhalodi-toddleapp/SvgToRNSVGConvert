import React from "react";
import Svg, { Rect, Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const QRCodeOutlined = (props) => {
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
        <Rect
          x={4}
          y={4}
          width={9}
          height={9}
          rx={1}
          stroke={fill}
          strokeWidth={2}
        />
        <Rect
          x={4}
          y={19}
          width={9}
          height={9}
          rx={1}
          stroke={fill}
          strokeWidth={2}
        />
        <Rect
          x={19}
          y={4}
          width={9}
          height={9}
          rx={1}
          stroke={fill}
          strokeWidth={2}
        />
        <Path
          d="M24 21H27C27.5523 21 28 21.4477 28 22V28"
          stroke={fill}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M19 19V28"
          stroke={fill}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M26 19V21"
          stroke={fill}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M20 25H24"
          stroke={fill}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
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
      <Rect
        x={4}
        y={4}
        width={9}
        height={9}
        rx={1}
        stroke={fill}
        strokeWidth={3}
      />
      <Rect
        x={4}
        y={19}
        width={9}
        height={9}
        rx={1}
        stroke={fill}
        strokeWidth={3}
      />
      <Rect
        x={19}
        y={4}
        width={9}
        height={9}
        rx={1}
        stroke={fill}
        strokeWidth={3}
      />
      <Path
        d="M24 21H27C27.5523 21 28 21.4477 28 22V28"
        stroke={fill}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 19V28"
        stroke={fill}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M26 19V21"
        stroke={fill}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 25H24"
        stroke={fill}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
QRCodeOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
QRCodeOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default QRCodeOutlined;
