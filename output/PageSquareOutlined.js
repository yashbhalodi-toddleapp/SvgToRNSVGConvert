import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const PageSquareOutlined = (props) => {
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
          d="M10 10C9.44772 10 9 10.4477 9 11C9 11.5523 9.44772 12 10 12H22C22.5523 12 23 11.5523 23 11C23 10.4477 22.5523 10 22 10H10Z"
          fill={fill}
        />
        <Path
          d="M9 16C9 15.4477 9.44772 15 10 15H22C22.5523 15 23 15.4477 23 16C23 16.5523 22.5523 17 22 17H10C9.44772 17 9 16.5523 9 16Z"
          fill={fill}
        />
        <Path
          d="M10 20C9.44772 20 9 20.4477 9 21C9 21.5523 9.44772 22 10 22H18C18.5523 22 19 21.5523 19 21C19 20.4477 18.5523 20 18 20H10Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 3C5.23858 3 3 5.23858 3 8V24C3 26.7614 5.23858 29 8 29H24C26.7614 29 29 26.7614 29 24V8C29 5.23858 26.7614 3 24 3H8ZM5 8C5 6.34315 6.34315 5 8 5H24C25.6569 5 27 6.34315 27 8V24C27 25.6569 25.6569 27 24 27H8C6.34315 27 5 25.6569 5 24V8Z"
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
        d="M10 9.5C9.17157 9.5 8.5 10.1716 8.5 11C8.5 11.8284 9.17157 12.5 10 12.5H22C22.8284 12.5 23.5 11.8284 23.5 11C23.5 10.1716 22.8284 9.5 22 9.5H10Z"
        fill={fill}
      />
      <Path
        d="M8.5 16C8.5 15.1716 9.17157 14.5 10 14.5H22C22.8284 14.5 23.5 15.1716 23.5 16C23.5 16.8284 22.8284 17.5 22 17.5H10C9.17157 17.5 8.5 16.8284 8.5 16Z"
        fill={fill}
      />
      <Path
        d="M10 19.5C9.17157 19.5 8.5 20.1716 8.5 21C8.5 21.8284 9.17157 22.5 10 22.5H18C18.8284 22.5 19.5 21.8284 19.5 21C19.5 20.1716 18.8284 19.5 18 19.5H10Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2.5C4.96243 2.5 2.5 4.96243 2.5 8V24C2.5 27.0376 4.96243 29.5 8 29.5H24C27.0376 29.5 29.5 27.0376 29.5 24V8C29.5 4.96243 27.0376 2.5 24 2.5H8ZM5.5 8C5.5 6.61929 6.61929 5.5 8 5.5H24C25.3807 5.5 26.5 6.61929 26.5 8V24C26.5 25.3807 25.3807 26.5 24 26.5H8C6.61929 26.5 5.5 25.3807 5.5 24V8Z"
        fill={fill}
      />
    </Svg>
  );
};

PageSquareOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

PageSquareOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

PageSquareOutlined.displayName = "PageSquareOutlined";

export default PageSquareOutlined;
