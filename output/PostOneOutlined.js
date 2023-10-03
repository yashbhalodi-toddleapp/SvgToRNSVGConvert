import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const PostOneOutlined = (props) => {
  const { size, weight, fill } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M16 25C16.5523 25 17 24.5523 17 24C17 23.4477 16.5523 23 16 23H8C7.44772 23 7 23.4477 7 24C7 24.5523 7.44772 25 8 25H16Z"
        fill={fill}
      />
      <Path
        d="M20 23C19.4477 23 19 23.4477 19 24C19 24.5523 19.4477 25 20 25H24C24.5523 25 25 24.5523 25 24C25 23.4477 24.5523 23 24 23H20Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 7C8.34315 7 7 8.34315 7 10V18C7 19.6569 8.34315 21 10 21H22C23.6569 21 25 19.6569 25 18V10C25 8.34315 23.6569 7 22 7H10ZM9 10C9 9.44771 9.44772 9 10 9H22C22.5523 9 23 9.44772 23 10V18C23 18.5523 22.5523 19 22 19H10C9.44772 19 9 18.5523 9 18V10Z"
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
};

PostOneOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

PostOneOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

PostOneOutlined.displayName = "PostOneOutlined";

export default PostOneOutlined;
