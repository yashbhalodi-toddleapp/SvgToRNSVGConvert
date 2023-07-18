import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const DownArrowOutlined = (props) => {
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
          d="M24.7071 20.7071C25.0976 20.3166 25.0976 19.6834 24.7071 19.2929C24.3166 18.9024 23.6834 18.9024 23.2929 19.2929L17 25.5858L17 4C17 3.44771 16.5523 3 16 3C15.4477 3 15 3.44771 15 4L15 25.5858L8.70711 19.2929C8.31658 18.9024 7.68342 18.9024 7.29289 19.2929C6.90237 19.6834 6.90237 20.3166 7.29289 20.7071L15.2924 28.7066C15.2936 28.7078 15.2949 28.7091 15.2962 28.7104C15.4886 28.9011 15.7393 28.9976 15.9907 29C15.9969 29 16.0031 29 16.0093 29C16.1415 28.9987 16.2676 28.9719 16.3828 28.9241C16.5007 28.8753 16.6112 28.803 16.7071 28.7071L24.7071 20.7071Z"
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
        d="M25.0607 21.0607C25.6464 20.4749 25.6464 19.5251 25.0607 18.9393C24.4749 18.3536 23.5251 18.3536 22.9393 18.9393L17.5 24.3787L17.5 4C17.5 3.17157 16.8284 2.5 16 2.5C15.1716 2.5 14.5 3.17157 14.5 4L14.5 24.3787L9.06066 18.9393C8.47487 18.3536 7.52512 18.3536 6.93934 18.9393C6.35355 19.5251 6.35355 20.4749 6.93934 21.0607L14.9393 29.0607C15.2322 29.3536 15.6161 29.5 16 29.5C16.2034 29.5 16.3973 29.4595 16.5742 29.3862C16.7511 29.313 16.9168 29.2045 17.0607 29.0607L25.0607 21.0607Z"
        fill={fill}
      />
    </Svg>
  );
};

DownArrowOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

DownArrowOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

DownArrowOutlined.displayName = "DownArrowOutlined";

export default DownArrowOutlined;
