import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const UpArrowOutlined = (props) => {
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
          d="M23.2929 12.7071C23.6834 13.0976 24.3166 13.0976 24.7071 12.7071C25.0976 12.3166 25.0976 11.6834 24.7071 11.2929L16.7071 3.29289C16.6077 3.19352 16.4927 3.11944 16.3699 3.07064C16.2554 3.02506 16.1306 3 16 3C15.859 3 15.7248 3.02917 15.6032 3.08181C15.5076 3.12308 15.4172 3.17996 15.3357 3.25246C15.3194 3.26696 15.3036 3.28198 15.2883 3.2975L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L15 6.41424L15 28C15 28.5523 15.4477 29 16 29C16.5523 29 17 28.5523 17 28L17 6.41418L23.2929 12.7071Z"
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
        d="M22.9393 13.0607C23.5251 13.6464 24.4749 13.6464 25.0607 13.0607C25.6464 12.4749 25.6464 11.5251 25.0607 10.9393L17.0607 2.93934C16.9132 2.79183 16.7426 2.68147 16.5605 2.60825C16.3873 2.53843 16.1981 2.5 16 2.5C15.7911 2.5 15.5923 2.54268 15.4116 2.61979C15.2617 2.68364 15.1201 2.77301 14.9934 2.8879C14.9729 2.90643 14.953 2.92552 14.9335 2.94514L6.93934 10.9393C6.35355 11.5251 6.35355 12.4749 6.93934 13.0607C7.52513 13.6464 8.47487 13.6464 9.06066 13.0607L14.5 7.62135L14.5 28C14.5 28.8284 15.1715 29.5 16 29.5C16.8284 29.5 17.5 28.8284 17.5 28L17.5 7.62129L22.9393 13.0607Z"
        fill={fill}
      />
    </Svg>
  );
};

UpArrowOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

UpArrowOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

UpArrowOutlined.displayName = "UpArrowOutlined";

export default UpArrowOutlined;
