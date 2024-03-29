import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const PostTwoAddOutlined = (props) => {
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
          d="M8 5C6.34315 5 5 6.34315 5 8V24C5 25.6569 6.34315 27 8 27H16C16.5523 27 17 27.4477 17 28C17 28.5523 16.5523 29 16 29H8C5.23858 29 3 26.7614 3 24V8C3 5.23858 5.23858 3 8 3H24C26.7614 3 29 5.23858 29 8V16C29 16.5523 28.5523 17 28 17C27.4477 17 27 16.5523 27 16V8C27 6.34315 25.6569 5 24 5H8Z"
          fill={fill}
        />
        <Path
          d="M24 8C24 8.55228 23.5523 9 23 9H9C8.44771 9 8 8.55228 8 8C8 7.44772 8.44771 7 9 7H23C23.5523 7 24 7.44772 24 8Z"
          fill={fill}
        />
        <Path
          d="M25 19C25 18.4477 24.5523 18 24 18C23.4477 18 23 18.4477 23 19V23H19C18.4477 23 18 23.4477 18 24C18 24.5523 18.4477 25 19 25H23V29C23 29.5523 23.4477 30 24 30C24.5523 30 25 29.5523 25 29V25H29C29.5523 25 30 24.5523 30 24C30 23.4477 29.5523 23 29 23H25V19Z"
          fill={fill}
        />
        <Path
          d="M9 14C9 13.4477 9.44772 13 10 13H22C22.5523 13 23 13.4477 23 14V15C23 15.5523 23.4477 16 24 16C24.5523 16 25 15.5523 25 15V14C25 12.3431 23.6569 11 22 11H10C8.34315 11 7 12.3431 7 14V22C7 23.6569 8.34315 25 10 25H15C15.5523 25 16 24.5523 16 24C16 23.4477 15.5523 23 15 23H10C9.44772 23 9 22.5523 9 22V14Z"
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
        d="M8 5.5C6.61929 5.5 5.5 6.61929 5.5 8V24C5.5 25.3807 6.61929 26.5 8 26.5H16C16.8284 26.5 17.5 27.1716 17.5 28C17.5 28.8284 16.8284 29.5 16 29.5H8C4.96243 29.5 2.5 27.0376 2.5 24V8C2.5 4.96243 4.96243 2.5 8 2.5H24C27.0376 2.5 29.5 4.96243 29.5 8V16C29.5 16.8284 28.8284 17.5 28 17.5C27.1716 17.5 26.5 16.8284 26.5 16V8C26.5 6.61929 25.3807 5.5 24 5.5H8Z"
        fill={fill}
      />
      <Path
        d="M24.5 8C24.5 8.82843 23.8284 9.5 23 9.5H9C8.17157 9.5 7.5 8.82843 7.5 8C7.5 7.17157 8.17157 6.5 9 6.5H23C23.8284 6.5 24.5 7.17157 24.5 8Z"
        fill={fill}
      />
      <Path
        d="M25.5 19C25.5 18.1716 24.8284 17.5 24 17.5C23.1716 17.5 22.5 18.1716 22.5 19V22.5H19C18.1716 22.5 17.5 23.1716 17.5 24C17.5 24.8284 18.1716 25.5 19 25.5H22.5V29C22.5 29.8284 23.1716 30.5 24 30.5C24.8284 30.5 25.5 29.8284 25.5 29V25.5H29C29.8284 25.5 30.5 24.8284 30.5 24C30.5 23.1716 29.8284 22.5 29 22.5H25.5V19Z"
        fill={fill}
      />
      <Path
        d="M9.5 14C9.5 13.7239 9.72386 13.5 10 13.5H22C22.2761 13.5 22.5 13.7239 22.5 14V15C22.5 15.8284 23.1716 16.5 24 16.5C24.8284 16.5 25.5 15.8284 25.5 15V14C25.5 12.067 23.933 10.5 22 10.5H10C8.067 10.5 6.5 12.067 6.5 14V22C6.5 23.933 8.067 25.5 10 25.5H15C15.8284 25.5 16.5 24.8284 16.5 24C16.5 23.1716 15.8284 22.5 15 22.5H10C9.72386 22.5 9.5 22.2761 9.5 22V14Z"
        fill={fill}
      />
    </Svg>
  );
};

PostTwoAddOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

PostTwoAddOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

PostTwoAddOutlined.displayName = "PostTwoAddOutlined";

export default PostTwoAddOutlined;
