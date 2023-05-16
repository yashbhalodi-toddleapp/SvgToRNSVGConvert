import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const LeftArrowOutlined = (props) => {
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
          d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L3.29289 15.2929C3.19352 15.3923 3.11944 15.5073 3.07064 15.6301C3.02506 15.7446 3 15.8694 3 16C3 16.141 3.02917 16.2752 3.08181 16.3968C3.12308 16.4924 3.17996 16.5828 3.25246 16.6643C3.26696 16.6806 3.28198 16.6964 3.2975 16.7117L11.2929 24.7071C11.6834 25.0976 12.3166 25.0976 12.7071 24.7071C13.0976 24.3166 13.0976 23.6834 12.7071 23.2929L6.41424 17L28 17C28.5523 17 29 16.5523 29 16C29 15.4477 28.5523 15 28 15L6.41418 15L12.7071 8.70711Z"
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
        d="M13.0607 9.06066C13.6464 8.47487 13.6464 7.52513 13.0607 6.93934C12.4749 6.35355 11.5251 6.35355 10.9393 6.93934L2.93934 14.9393C2.79183 15.0868 2.68147 15.2574 2.60825 15.4395C2.53843 15.6127 2.5 15.8019 2.5 16C2.5 16.2089 2.54268 16.4077 2.61979 16.5884C2.68364 16.7383 2.77301 16.8799 2.8879 17.0066C2.90643 17.0271 2.92552 17.047 2.94514 17.0665L10.9393 25.0607C11.5251 25.6464 12.4749 25.6464 13.0607 25.0607C13.6464 24.4749 13.6464 23.5251 13.0607 22.9393L7.62135 17.5L28 17.5C28.8284 17.5 29.5 16.8285 29.5 16C29.5 15.1716 28.8284 14.5 28 14.5L7.62129 14.5L13.0607 9.06066Z"
        fill={fill}
      />
    </Svg>
  );
};
LeftArrowOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
LeftArrowOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default LeftArrowOutlined;
