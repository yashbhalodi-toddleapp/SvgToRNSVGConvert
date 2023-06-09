import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const DeviceDesktopOutlined = (props) => {
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
          d="M2 8C2 5.23858 4.23858 3 7 3H25C27.7614 3 30 5.23858 30 8V18C30 20.7614 27.7614 23 25 23H17.0002V27H24.0002C24.5524 27 25.0002 27.4477 25.0002 28C25.0002 28.5523 24.5524 29 24.0002 29H8.00016C7.44787 29 7.00016 28.5523 7.00016 28C7.00016 27.4477 7.44787 27 8.00016 27H15.0002V23H7C4.23858 23 2 20.7614 2 18V8ZM25 21C26.6569 21 28 19.6569 28 18V8C28 6.34315 26.6569 5 25 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H25Z"
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
        d="M1.5 8C1.5 4.96243 3.96243 2.5 7 2.5H25C28.0376 2.5 30.5 4.96243 30.5 8V18C30.5 21.0376 28.0376 23.5 25 23.5H17.5V26.5H24C24.8284 26.5 25.5 27.1716 25.5 28C25.5 28.8284 24.8284 29.5 24 29.5H8C7.17157 29.5 6.5 28.8284 6.5 28C6.5 27.1716 7.17157 26.5 8 26.5H14.5V23.5H7C3.96243 23.5 1.5 21.0376 1.5 18V8ZM25 20.5C26.3807 20.5 27.5 19.3807 27.5 18V8C27.5 6.61929 26.3807 5.5 25 5.5H7C5.61929 5.5 4.5 6.61929 4.5 8V18C4.5 19.3807 5.61929 20.5 7 20.5H25Z"
        fill={fill}
      />
    </Svg>
  );
};

DeviceDesktopOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

DeviceDesktopOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

DeviceDesktopOutlined.displayName = "DeviceDesktopOutlined";

export default DeviceDesktopOutlined;
