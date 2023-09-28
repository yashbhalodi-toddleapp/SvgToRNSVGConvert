import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ChatTextLeftOutlined = (props) => {
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
          d="M3 8C3 5.23858 5.23858 3 8 3H24C26.7614 3 29 5.23858 29 8V19C29 21.7614 26.7614 24 24 24H9.82843C9.56321 24 9.30886 24.1054 9.12132 24.2929L4.70711 28.7071C4.42111 28.9931 3.99099 29.0787 3.61732 28.9239C3.24364 28.7691 3 28.4045 3 28V8ZM8 5C6.34315 5 5 6.34315 5 8V25.5858L7.70711 22.8787C8.26972 22.3161 9.03278 22 9.82843 22H24C25.6569 22 27 20.6569 27 19V8C27 6.34315 25.6569 5 24 5H8Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 11C10 10.4477 10.4477 10 11 10H21C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12H11C10.4477 12 10 11.5523 10 11Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 16C10 15.4477 10.4477 15 11 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H11C10.4477 17 10 16.5523 10 16Z"
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
        d="M8.5 10C8.5 9.17157 9.17157 8.5 10 8.5H22C22.8284 8.5 23.5 9.17157 23.5 10C23.5 10.8284 22.8284 11.5 22 11.5H10C9.17157 11.5 8.5 10.8284 8.5 10Z"
        fill={fill}
      />
      <Path
        d="M10 14.5C9.17157 14.5 8.5 15.1716 8.5 16C8.5 16.8284 9.17157 17.5 10 17.5H22C22.8284 17.5 23.5 16.8284 23.5 16C23.5 15.1716 22.8284 14.5 22 14.5H10Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 7C1.5 3.96243 3.96243 1.5 7 1.5H25C28.0376 1.5 30.5 3.96243 30.5 7V19C30.5 22.0376 28.0376 24.5 25 24.5H9.82843C9.69582 24.5 9.56864 24.5527 9.47487 24.6464L4.06066 30.0607C3.63166 30.4897 2.98649 30.618 2.42597 30.3858C1.86546 30.1536 1.5 29.6067 1.5 29V7ZM7 4.5C5.61929 4.5 4.5 5.61929 4.5 7V25.3787L7.35355 22.5251C8.00993 21.8687 8.90017 21.5 9.82843 21.5H25C26.3807 21.5 27.5 20.3807 27.5 19V7C27.5 5.61929 26.3807 4.5 25 4.5H7Z"
        fill={fill}
      />
    </Svg>
  );
};

ChatTextLeftOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ChatTextLeftOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ChatTextLeftOutlined.displayName = "ChatTextLeftOutlined";

export default ChatTextLeftOutlined;
