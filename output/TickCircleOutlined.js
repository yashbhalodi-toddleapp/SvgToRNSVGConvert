import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const TickCircleOutlined = (props) => {
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
          d="M22.7071 12.7071C23.0976 12.3166 23.0976 11.6834 22.7071 11.2929C22.3166 10.9024 21.6834 10.9024 21.2929 11.2929L14 18.5858L10.7071 15.2929C10.3166 14.9024 9.68342 14.9024 9.29289 15.2929C8.90237 15.6834 8.90237 16.3166 9.29289 16.7071L13.2929 20.7071C13.6834 21.0976 14.3166 21.0976 14.7071 20.7071L22.7071 12.7071Z"
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
        d="M23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393C22.4749 10.3536 21.5251 10.3536 20.9393 10.9393L14 17.8787L11.0607 14.9393C10.4749 14.3536 9.52513 14.3536 8.93934 14.9393C8.35355 15.5251 8.35355 16.4749 8.93934 17.0607L12.9393 21.0607C13.5251 21.6464 14.4749 21.6464 15.0607 21.0607L23.0607 13.0607Z"
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

TickCircleOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

TickCircleOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default TickCircleOutlined;
