import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const DownloadOutlined = (props) => {
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
          d="M16 3C16.5523 3 17 3.44772 17 4V21.5858L23.2929 15.2929C23.6834 14.9024 24.3166 14.9024 24.7071 15.2929C25.0976 15.6834 25.0976 16.3166 24.7071 16.7071L16.7071 24.7071C16.7032 24.711 16.6993 24.7149 16.6953 24.7187C16.6912 24.7227 16.6871 24.7266 16.683 24.7304C16.5079 24.8942 16.2738 24.9958 16.0161 24.9999C16.0107 25 16.0054 25 16 25C15.9947 25 15.9894 25 15.984 24.9999C15.7219 24.9958 15.4842 24.8908 15.3082 24.7221C15.3056 24.7196 15.303 24.7171 15.3004 24.7146C15.2979 24.7121 15.2954 24.7096 15.2929 24.7071L7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929C7.68342 14.9024 8.31658 14.9024 8.70711 15.2929L15 21.5858V4C15 3.44772 15.4477 3 16 3Z"
          fill={fill}
        />
        <Path
          d="M4 28C3.44772 28 3 28.4477 3 29C3 29.5523 3.44772 30 4 30H28C28.5523 30 29 29.5523 29 29C29 28.4477 28.5523 28 28 28H4Z"
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
        d="M16 2.5C16.8284 2.5 17.5 3.17157 17.5 4V20.3787L22.9393 14.9393C23.5251 14.3536 24.4749 14.3536 25.0607 14.9393C25.6464 15.5251 25.6464 16.4749 25.0607 17.0607L17.0607 25.0607C16.7794 25.342 16.3978 25.5 16 25.5C15.6022 25.5 15.2206 25.342 14.9393 25.0607L6.93934 17.0607C6.35355 16.4749 6.35355 15.5251 6.93934 14.9393C7.52513 14.3536 8.47487 14.3536 9.06066 14.9393L14.5 20.3787V4C14.5 3.17157 15.1716 2.5 16 2.5Z"
        fill={fill}
      />
      <Path
        d="M2.5 29C2.5 28.1716 3.17157 27.5 4 27.5H28C28.8284 27.5 29.5 28.1716 29.5 29C29.5 29.8284 28.8284 30.5 28 30.5H4C3.17157 30.5 2.5 29.8284 2.5 29Z"
        fill={fill}
      />
    </Svg>
  );
};

DownloadOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

DownloadOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

DownloadOutlined.displayName = "DownloadOutlined";

export default DownloadOutlined;
