import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const ClockOutlined = (props) => {
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
          d="M17 10C17 9.44772 16.5523 9 16 9C15.4477 9 15 9.44772 15 10V16C15 16.2652 15.1054 16.5196 15.2929 16.7071L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L17 15.5858V10Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2ZM4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16Z"
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
        d="M17.5 10C17.5 9.17157 16.8284 8.5 16 8.5C15.1716 8.5 14.5 9.17157 14.5 10V16C14.5 16.3978 14.658 16.7794 14.9393 17.0607L18.9393 21.0607C19.5251 21.6464 20.4749 21.6464 21.0607 21.0607C21.6464 20.4749 21.6464 19.5251 21.0607 18.9393L17.5 15.3787V10Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 1.5C7.99187 1.5 1.5 7.99187 1.5 16C1.5 24.0081 7.99187 30.5 16 30.5C24.0081 30.5 30.5 24.0081 30.5 16C30.5 7.99187 24.0081 1.5 16 1.5ZM4.5 16C4.5 9.64873 9.64873 4.5 16 4.5C22.3513 4.5 27.5 9.64873 27.5 16C27.5 22.3513 22.3513 27.5 16 27.5C9.64873 27.5 4.5 22.3513 4.5 16Z"
        fill={fill}
      />
    </Svg>
  );
};
ClockOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
ClockOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default ClockOutlined;
