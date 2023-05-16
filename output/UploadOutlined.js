import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const UploadOutlined = (props) => {
  const { size, weight } = props;

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
          d="M7.29289 10.2929C6.90237 10.6834 6.90237 11.3166 7.29289 11.7071C7.68342 12.0976 8.31658 12.0976 8.70711 11.7071L15 5.41422L15 23C15 23.5523 15.4477 24 16 24C16.5523 24 17 23.5523 17 23L17 5.41421L23.2929 11.7071C23.6834 12.0976 24.3166 12.0976 24.7071 11.7071C25.0976 11.3166 25.0976 10.6834 24.7071 10.2929L16.7071 2.29289C16.701 2.28678 16.6948 2.28075 16.6885 2.27481C16.5056 2.10113 16.2636 2.00285 16.0111 2.00006C16.0074 2.00002 16.0037 2 16 2C15.9963 2 15.9926 2.00002 15.9889 2.00006C15.7303 2.00292 15.4827 2.10594 15.2983 2.28754C15.2965 2.28931 15.2947 2.2911 15.2929 2.29289L7.29289 10.2929Z"
          fill={fill}
        />
        <Path
          d="M3 29C3 28.4477 3.44772 28 4 28H28C28.5523 28 29 28.4477 29 29C29 29.5523 28.5523 30 28 30H4C3.44772 30 3 29.5523 3 29Z"
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
        d="M14.5 6.62132L14.5 23C14.5 23.8284 15.1716 24.5 16 24.5C16.8284 24.5 17.5 23.8284 17.5 23L17.5 6.62132L22.9393 12.0607C23.5251 12.6464 24.4749 12.6464 25.0607 12.0607C25.6464 11.4749 25.6464 10.5251 25.0607 9.93934L17.061 1.93969C16.7797 1.65838 16.3978 1.5 16 1.5C15.6022 1.5 15.2206 1.65803 14.9393 1.93934L6.93934 9.93934C6.35355 10.5251 6.35355 11.4749 6.93934 12.0607C7.52513 12.6464 8.47487 12.6464 9.06066 12.0607L14.5 6.62132Z"
        fill={fill}
      />
      <Path
        d="M2.5 29C2.5 28.1716 3.17157 27.5 4 27.5H28C28.8284 27.5 29.5 28.1716 29.5 29C29.5 29.8284 28.8284 30.5 28 30.5H4C3.17157 30.5 2.5 29.8284 2.5 29Z"
        fill={fill}
      />
    </Svg>
  );
};

UploadOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

UploadOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default UploadOutlined;
