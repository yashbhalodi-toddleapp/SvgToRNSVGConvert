import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ArrowCircleLeftFilled = (props) => {
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
          d="M30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16ZM14.7071 20.7071C14.3166 21.0976 13.6834 21.0976 13.2929 20.7071L9.29389 16.7081L9.28639 16.7006C9.19374 16.6062 9.12357 16.4981 9.07588 16.3828C9.02773 16.2667 9.00082 16.1395 9.00002 16.0062L9 16L9.00002 15.9936C9.00163 15.7398 9.09926 15.4865 9.29289 15.2929L13.2929 11.2929C13.6834 10.9024 14.3166 10.9024 14.7071 11.2929C15.0976 11.6834 15.0976 12.3166 14.7071 12.7071L12.4142 15L22 15C22.5523 15 23 15.4477 23 16C23 16.5523 22.5523 17 22 17L12.4142 17L14.7071 19.2929C15.0976 19.6834 15.0976 20.3166 14.7071 20.7071Z"
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26802 30 2 23.732 2 16ZM15.0607 10.9393C15.6464 11.5251 15.6464 12.4749 15.0607 13.0607L13.6213 14.5L22 14.5C22.8284 14.5 23.5 15.1716 23.5 16C23.5 16.8284 22.8284 17.5 22 17.5H13.6213L15.0607 18.9393C15.6464 19.5251 15.6464 20.4749 15.0607 21.0607C14.4749 21.6464 13.5251 21.6464 12.9393 21.0607L8.93934 17.0607C8.65804 16.7794 8.5 16.3978 8.5 16C8.5 15.6022 8.65804 15.2206 8.93934 14.9393L12.9393 10.9393C13.5251 10.3536 14.4749 10.3536 15.0607 10.9393Z"
        fill={fill}
      />
    </Svg>
  );
};

ArrowCircleLeftFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ArrowCircleLeftFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ArrowCircleLeftFilled.displayName = "ArrowCircleLeftFilled";

export default ArrowCircleLeftFilled;
