import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const CornersInOutlined = (props) => {
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
          d="M11 8C11 9.65685 9.65685 11 8 11L4 11C3.44771 11 3 11.4477 3 12C3 12.5523 3.44771 13 4 13L8 13C10.7614 13 13 10.7614 13 8L13 4C13 3.44771 12.5523 3 12 3C11.4477 3 11 3.44771 11 4L11 8Z"
          fill="#717171"
        />
        <Path
          d="M24 11C22.3431 11 21 9.65685 21 8V4C21 3.44771 20.5523 3 20 3C19.4477 3 19 3.44771 19 4V8C19 10.7614 21.2386 13 24 13H28C28.5523 13 29 12.5523 29 12C29 11.4477 28.5523 11 28 11L24 11Z"
          fill="#717171"
        />
        <Path
          d="M24 21C22.3431 21 21 22.3431 21 24V28C21 28.5523 20.5523 29 20 29C19.4477 29 19 28.5523 19 28V24C19 21.2386 21.2386 19 24 19H28C28.5523 19 29 19.4477 29 20C29 20.5523 28.5523 21 28 21H24Z"
          fill="#717171"
        />
        <Path
          d="M8 21C9.65685 21 11 22.3431 11 24V28C11 28.5523 11.4477 29 12 29C12.5523 29 13 28.5523 13 28V24C13 21.2386 10.7614 19 8 19H4C3.44771 19 3 19.4477 3 20C3 20.5523 3.44771 21 4 21H8Z"
          fill="#717171"
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
        d="M10.5 8C10.5 9.38071 9.38071 10.5 8 10.5L4 10.5C3.17157 10.5 2.5 11.1716 2.5 12C2.5 12.8284 3.17157 13.5 4 13.5L8 13.5C11.0376 13.5 13.5 11.0376 13.5 8L13.5 4C13.5 3.17157 12.8284 2.5 12 2.5C11.1716 2.5 10.5 3.17157 10.5 4V8Z"
        fill={fill}
      />
      <Path
        d="M24 10.5C22.6193 10.5 21.5 9.38071 21.5 8V4C21.5 3.17157 20.8284 2.5 20 2.5C19.1716 2.5 18.5 3.17157 18.5 4V8C18.5 11.0376 20.9624 13.5 24 13.5H28C28.8284 13.5 29.5 12.8284 29.5 12C29.5 11.1716 28.8284 10.5 28 10.5L24 10.5Z"
        fill={fill}
      />
      <Path
        d="M24 21.5C22.6193 21.5 21.5 22.6193 21.5 24V28C21.5 28.8284 20.8284 29.5 20 29.5C19.1716 29.5 18.5 28.8284 18.5 28V24C18.5 20.9624 20.9624 18.5 24 18.5H28C28.8284 18.5 29.5 19.1716 29.5 20C29.5 20.8284 28.8284 21.5 28 21.5H24Z"
        fill={fill}
      />
      <Path
        d="M8 21.5C9.38071 21.5 10.5 22.6193 10.5 24V28C10.5 28.8284 11.1716 29.5 12 29.5C12.8284 29.5 13.5 28.8284 13.5 28V24C13.5 20.9624 11.0376 18.5 8 18.5H4C3.17157 18.5 2.5 19.1716 2.5 20C2.5 20.8284 3.17157 21.5 4 21.5H8Z"
        fill={fill}
      />
    </Svg>
  );
};

CornersInOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

CornersInOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default CornersInOutlined;
