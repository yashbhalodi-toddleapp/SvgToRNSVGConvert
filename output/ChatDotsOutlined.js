import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ChatDotsOutlined = (props) => {
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
          d="M23 13.5C23 14.3284 22.3284 15 21.5 15C20.6716 15 20 14.3284 20 13.5C20 12.6716 20.6716 12 21.5 12C22.3284 12 23 12.6716 23 13.5Z"
          fill={fill}
        />
        <Path
          d="M10.5 15C11.3284 15 12 14.3284 12 13.5C12 12.6716 11.3284 12 10.5 12C9.67158 12 9 12.6716 9 13.5C9 14.3284 9.67158 15 10.5 15Z"
          fill={fill}
        />
        <Path
          d="M17.5 13.5C17.5 14.3284 16.8284 15 16 15C15.1716 15 14.5 14.3284 14.5 13.5C14.5 12.6716 15.1716 12 16 12C16.8284 12 17.5 12.6716 17.5 13.5Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 3C5.23858 3 3 5.23858 3 8V20C3 22.7614 5.23858 25 8 25H11.5925C11.8808 25 12.1552 25.1245 12.345 25.3415L15.2474 28.6585C15.4373 28.8755 15.7116 29 16 29C16.2884 29 16.5627 28.8755 16.7526 28.6585L19.655 25.3415C19.8448 25.1245 20.1192 25 20.4075 25H24C26.7614 25 29 22.7614 29 20V8C29 5.23858 26.7614 3 24 3H8ZM5 8C5 6.34315 6.34315 5 8 5H24C25.6569 5 27 6.34315 27 8V20C27 21.6569 25.6569 23 24 23H20.4075C19.5424 23 18.7195 23.3734 18.1498 24.0245L16 26.4814L13.8502 24.0245C13.2805 23.3734 12.4576 23 11.5925 23H8C6.34315 23 5 21.6569 5 20V8Z"
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
        d="M25 14.6919C25 15.7965 24.1046 16.6919 23 16.6919C21.8954 16.6919 21 15.7965 21 14.6919C21 13.5873 21.8954 12.6919 23 12.6919C24.1046 12.6919 25 13.5873 25 14.6919Z"
        fill={fill}
      />
      <Path
        d="M9 16.6919C10.1046 16.6919 11 15.7965 11 14.6919C11 13.5873 10.1046 12.6919 9 12.6919C7.89543 12.6919 7 13.5873 7 14.6919C7 15.7965 7.89543 16.6919 9 16.6919Z"
        fill={fill}
      />
      <Path
        d="M18 14.6919C18 15.7965 17.1046 16.6919 16 16.6919C14.8954 16.6919 14 15.7965 14 14.6919C14 13.5873 14.8954 12.6919 16 12.6919C17.1046 12.6919 18 13.5873 18 14.6919Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1.5C3.96243 1.5 1.5 3.96243 1.5 7V21C1.5 24.0376 3.96243 26.5 7 26.5H11.1716C11.3042 26.5 11.4314 26.5527 11.5251 26.6464L14.9393 30.0607C15.2206 30.342 15.6022 30.5 16 30.5C16.3978 30.5 16.7794 30.342 17.0607 30.0607L20.4749 26.6464C20.5686 26.5527 20.6958 26.5 20.8284 26.5H25C28.0376 26.5 30.5 24.0376 30.5 21V7C30.5 3.96243 28.0376 1.5 25 1.5H7ZM4.5 7C4.5 5.61929 5.61929 4.5 7 4.5H25C26.3807 4.5 27.5 5.61929 27.5 7V21C27.5 22.3807 26.3807 23.5 25 23.5H20.8284C19.9002 23.5 19.0099 23.8687 18.3536 24.5251L16 26.8787L13.6464 24.5251C12.9901 23.8687 12.0998 23.5 11.1716 23.5H7C5.61929 23.5 4.5 22.3807 4.5 21V7Z"
        fill={fill}
      />
    </Svg>
  );
};

ChatDotsOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ChatDotsOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ChatDotsOutlined.displayName = "ChatDotsOutlined";

export default ChatDotsOutlined;