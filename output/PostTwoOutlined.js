import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const PostTwoOutlined = (props) => {
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
          d="M24 8C24 8.55228 23.5523 9 23 9H9C8.44771 9 8 8.55228 8 8C8 7.44772 8.44771 7 9 7H23C23.5523 7 24 7.44772 24 8Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 11C8.34315 11 7 12.3431 7 14V22C7 23.6569 8.34315 25 10 25H22C23.6569 25 25 23.6569 25 22V14C25 12.3431 23.6569 11 22 11H10ZM9 14C9 13.4477 9.44772 13 10 13H22C22.5523 13 23 13.4477 23 14V22C23 22.5523 22.5523 23 22 23H10C9.44772 23 9 22.5523 9 22V14Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 8C3 5.23858 5.23858 3 8 3H24C26.7614 3 29 5.23858 29 8V24C29 26.7614 26.7614 29 24 29H8C5.23858 29 3 26.7614 3 24V8ZM8 5C6.34315 5 5 6.34315 5 8V24C5 25.6569 6.34315 27 8 27H24C25.6569 27 27 25.6569 27 24V8C27 6.34315 25.6569 5 24 5H8Z"
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
        d="M24.5 9C24.5 9.82843 23.8284 10.5 23 10.5H9C8.17157 10.5 7.5 9.82843 7.5 9C7.5 8.17157 8.17157 7.5 9 7.5H23C23.8284 7.5 24.5 8.17157 24.5 9Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 12.5C9.067 12.5 7.5 14.067 7.5 16V21C7.5 22.933 9.067 24.5 11 24.5H21C22.933 24.5 24.5 22.933 24.5 21V16C24.5 14.067 22.933 12.5 21 12.5H11ZM10.5 16C10.5 15.7239 10.7239 15.5 11 15.5H21C21.2761 15.5 21.5 15.7239 21.5 16V21C21.5 21.2761 21.2761 21.5 21 21.5H11C10.7239 21.5 10.5 21.2761 10.5 21V16Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 8C2.5 4.96243 4.96243 2.5 8 2.5H24C27.0376 2.5 29.5 4.96243 29.5 8V24C29.5 27.0376 27.0376 29.5 24 29.5H8C4.96243 29.5 2.5 27.0376 2.5 24V8ZM8 5.5C6.61929 5.5 5.5 6.61929 5.5 8V24C5.5 25.3807 6.61929 26.5 8 26.5H24C25.3807 26.5 26.5 25.3807 26.5 24V8C26.5 6.61929 25.3807 5.5 24 5.5H8Z"
        fill={fill}
      />
    </Svg>
  );
};

PostTwoOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

PostTwoOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default PostTwoOutlined;
