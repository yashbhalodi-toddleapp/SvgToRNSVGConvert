import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const CornersOutOutlined = (props) => {
  const { size, weight, fill } = props;

  if (weight === "REGULAR") {
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M5.5 8C5.5 6.34315 6.84315 5 8.5 5H12.5C13.0523 5 13.5 4.55229 13.5 4C13.5 3.44772 13.0523 3 12.5 3H8.5C5.73858 3 3.5 5.23858 3.5 8V12C3.5 12.5523 3.94772 13 4.5 13C5.05229 13 5.5 12.5523 5.5 12V8Z"
          fill={fill}
        />
        <Path
          d="M24.5 5C26.1569 5 27.5 6.34315 27.5 8V12C27.5 12.5523 27.9477 13 28.5 13C29.0523 13 29.5 12.5523 29.5 12V8C29.5 5.23858 27.2614 3 24.5 3H20.5C19.9477 3 19.5 3.44772 19.5 4C19.5 4.55228 19.9477 5 20.5 5L24.5 5Z"
          fill={fill}
        />
        <Path
          d="M24.5 27C26.1569 27 27.5 25.6569 27.5 24V20C27.5 19.4477 27.9477 19 28.5 19C29.0523 19 29.5 19.4477 29.5 20V24C29.5 26.7614 27.2614 29 24.5 29H20.5C19.9477 29 19.5 28.5523 19.5 28C19.5 27.4477 19.9477 27 20.5 27H24.5Z"
          fill={fill}
        />
        <Path
          d="M8.5 27C6.84315 27 5.5 25.6569 5.5 24L5.5 20C5.5 19.4477 5.05228 19 4.5 19C3.94772 19 3.5 19.4477 3.5 20V24C3.5 26.7614 5.73858 29 8.5 29H12.5C13.0523 29 13.5 28.5523 13.5 28C13.5 27.4477 13.0523 27 12.5 27H8.5Z"
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
        d="M5.5 8C5.5 6.61929 6.61929 5.5 8 5.5H12C12.8284 5.5 13.5 4.82843 13.5 4C13.5 3.17157 12.8284 2.5 12 2.5H8C4.96243 2.5 2.5 4.96243 2.5 8V12C2.5 12.8284 3.17157 13.5 4 13.5C4.82843 13.5 5.5 12.8284 5.5 12V8Z"
        fill={fill}
      />
      <Path
        d="M24 5.5C25.3807 5.5 26.5 6.61929 26.5 8V12C26.5 12.8284 27.1716 13.5 28 13.5C28.8284 13.5 29.5 12.8284 29.5 12V8C29.5 4.96243 27.0376 2.5 24 2.5H20C19.1716 2.5 18.5 3.17157 18.5 4C18.5 4.82843 19.1716 5.5 20 5.5L24 5.5Z"
        fill={fill}
      />
      <Path
        d="M24 26.5C25.3807 26.5 26.5 25.3807 26.5 24V20C26.5 19.1716 27.1716 18.5 28 18.5C28.8284 18.5 29.5 19.1716 29.5 20V24C29.5 27.0376 27.0376 29.5 24 29.5H20C19.1716 29.5 18.5 28.8284 18.5 28C18.5 27.1716 19.1716 26.5 20 26.5H24Z"
        fill={fill}
      />
      <Path
        d="M8 26.5C6.61929 26.5 5.5 25.3807 5.5 24L5.5 20C5.5 19.1716 4.82843 18.5 4 18.5C3.17157 18.5 2.5 19.1716 2.5 20V24C2.5 27.0376 4.96243 29.5 8 29.5H12C12.8284 29.5 13.5 28.8284 13.5 28C13.5 27.1716 12.8284 26.5 12 26.5H8Z"
        fill={fill}
      />
    </Svg>
  );
};

CornersOutOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

CornersOutOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default CornersOutOutlined;
