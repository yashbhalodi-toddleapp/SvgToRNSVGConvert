import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ChatTextOutlined = (props) => {
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
          d="M3 8C3 5.23858 5.23858 3 8 3H24C26.7614 3 29 5.23858 29 8V20C29 22.7614 26.7614 25 24 25H20.4075C20.1192 25 19.8448 25.1245 19.655 25.3415L16.7526 28.6585C16.5627 28.8755 16.2884 29 16 29C15.7116 29 15.4373 28.8755 15.2474 28.6585L12.345 25.3415C12.1552 25.1245 11.8808 25 11.5925 25H8C5.23858 25 3 22.7614 3 20V8ZM8 5C6.34315 5 5 6.34315 5 8V20C5 21.6569 6.34315 23 8 23H11.5925C12.4576 23 13.2805 23.3734 13.8502 24.0245L16 26.4814L18.1498 24.0245C18.7195 23.3734 19.5424 23 20.4075 23H24C25.6569 23 27 21.6569 27 20V8C27 6.34315 25.6569 5 24 5H8Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 12C10 11.4477 10.4477 11 11 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H11C10.4477 13 10 12.5523 10 12Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 17C10 16.4477 10.4477 16 11 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H11C10.4477 18 10 17.5523 10 17Z"
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
        d="M8.5 11C8.5 10.1716 9.17157 9.5 10 9.5H22C22.8284 9.5 23.5 10.1716 23.5 11C23.5 11.8284 22.8284 12.5 22 12.5H10C9.17157 12.5 8.5 11.8284 8.5 11Z"
        fill={fill}
      />
      <Path
        d="M10 15.5C9.17157 15.5 8.5 16.1716 8.5 17C8.5 17.8284 9.17157 18.5 10 18.5H22C22.8284 18.5 23.5 17.8284 23.5 17C23.5 16.1716 22.8284 15.5 22 15.5H10Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 7C1.5 3.96243 3.96243 1.5 7 1.5H25C28.0376 1.5 30.5 3.96243 30.5 7V21C30.5 24.0376 28.0376 26.5 25 26.5H20.8284C20.6958 26.5 20.5686 26.5527 20.4749 26.6464L17.0607 30.0607C16.7794 30.342 16.3978 30.5 16 30.5C15.6022 30.5 15.2206 30.342 14.9393 30.0607L11.5251 26.6464C11.4314 26.5527 11.3042 26.5 11.1716 26.5H7C3.96243 26.5 1.5 24.0376 1.5 21V7ZM7 4.5C5.61929 4.5 4.5 5.61929 4.5 7V21C4.5 22.3807 5.61929 23.5 7 23.5H11.1716C12.0998 23.5 12.9901 23.8687 13.6464 24.5251L16 26.8787L18.3536 24.5251C19.0099 23.8687 19.9002 23.5 20.8284 23.5H25C26.3807 23.5 27.5 22.3807 27.5 21V7C27.5 5.61929 26.3807 4.5 25 4.5H7Z"
        fill={fill}
      />
    </Svg>
  );
};

ChatTextOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ChatTextOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ChatTextOutlined.displayName = "ChatTextOutlined";

export default ChatTextOutlined;
