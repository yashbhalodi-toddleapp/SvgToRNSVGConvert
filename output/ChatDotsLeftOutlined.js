import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ChatDotsLeftOutlined = (props) => {
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
          d="M8 3C5.23858 3 3 5.23858 3 8V28C3 28.4045 3.24364 28.7691 3.61732 28.9239C3.99099 29.0787 4.42111 28.9931 4.70711 28.7071L9.12132 24.2929C9.30886 24.1054 9.56321 24 9.82843 24H24C26.7614 24 29 21.7614 29 19V8C29 5.23858 26.7614 3 24 3H8ZM5 8C5 6.34315 6.34315 5 8 5H24C25.6569 5 27 6.34315 27 8V19C27 20.6569 25.6569 22 24 22H9.82843C9.03278 22 8.26972 22.3161 7.70711 22.8787L5 25.5858V8Z"
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
        d="M25 13.5195C25 14.6241 24.1046 15.5195 23 15.5195C21.8954 15.5195 21 14.6241 21 13.5195C21 12.415 21.8954 11.5195 23 11.5195C24.1046 11.5195 25 12.415 25 13.5195Z"
        fill={fill}
      />
      <Path
        d="M9 15.5195C10.1046 15.5195 11 14.6241 11 13.5195C11 12.415 10.1046 11.5195 9 11.5195C7.89543 11.5195 7 12.415 7 13.5195C7 14.6241 7.89543 15.5195 9 15.5195Z"
        fill={fill}
      />
      <Path
        d="M18 13.5195C18 14.6241 17.1046 15.5195 16 15.5195C14.8954 15.5195 14 14.6241 14 13.5195C14 12.415 14.8954 11.5195 16 11.5195C17.1046 11.5195 18 12.415 18 13.5195Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1.5C3.96243 1.5 1.5 3.96243 1.5 7V29C1.5 29.6067 1.86546 30.1536 2.42597 30.3858C2.98649 30.618 3.63166 30.4897 4.06066 30.0607L9.47487 24.6464C9.56864 24.5527 9.69582 24.5 9.82843 24.5H25C28.0376 24.5 30.5 22.0376 30.5 19V7C30.5 3.96243 28.0376 1.5 25 1.5H7ZM4.5 7C4.5 5.61929 5.61929 4.5 7 4.5H25C26.3807 4.5 27.5 5.61929 27.5 7V19C27.5 20.3807 26.3807 21.5 25 21.5H9.82843C8.90017 21.5 8.00993 21.8687 7.35355 22.5251L4.5 25.3787V7Z"
        fill={fill}
      />
    </Svg>
  );
};

ChatDotsLeftOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ChatDotsLeftOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ChatDotsLeftOutlined.displayName = "ChatDotsLeftOutlined";

export default ChatDotsLeftOutlined;
