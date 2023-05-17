import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ArrowCircleLeftFilled = (props) => {
  const { size, weight, fill, stroke } = props;

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
          d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z"
          fill={fill}
        />
        <Path
          d="M13.2929 20.7071C13.6834 21.0976 14.3166 21.0976 14.7071 20.7071C15.0976 20.3166 15.0976 19.6834 14.7071 19.2929L12.4142 17L22 17C22.5523 17 23 16.5523 23 16C23 15.4477 22.5523 15 22 15L12.4142 15L14.7071 12.7071C15.0976 12.3166 15.0976 11.6834 14.7071 11.2929C14.3166 10.9024 13.6834 10.9024 13.2929 11.2929L9.29289 15.2929C9.09926 15.4865 9.00163 15.7398 9.00002 15.9936C9.00001 15.9957 9 15.9979 9 16C9 16.0021 9.00001 16.0041 9.00002 16.0062C9.00082 16.1395 9.02773 16.2667 9.07588 16.3828C9.12357 16.4981 9.19374 16.6062 9.28639 16.7006C9.28888 16.7031 9.29138 16.7056 9.29389 16.7081L13.2929 20.7071Z"
          fill={stroke}
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
        d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26802 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2Z"
        fill={fill}
      />
      <Path
        d="M15.0607 13.0607C15.6464 12.4749 15.6464 11.5251 15.0607 10.9393C14.4749 10.3536 13.5251 10.3536 12.9393 10.9393L8.93934 14.9393C8.65804 15.2206 8.5 15.6022 8.5 16C8.5 16.3978 8.65804 16.7794 8.93934 17.0607L12.9393 21.0607C13.5251 21.6464 14.4749 21.6464 15.0607 21.0607C15.6464 20.4749 15.6464 19.5251 15.0607 18.9393L13.6213 17.5H22C22.8284 17.5 23.5 16.8284 23.5 16C23.5 15.1716 22.8284 14.5 22 14.5L13.6213 14.5L15.0607 13.0607Z"
        fill={stroke}
      />
    </Svg>
  );
};

ArrowCircleLeftFilled.propTypes = {
  stroke: PropTypes.string,
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ArrowCircleLeftFilled.defaultProps = {
  stroke: colors.iconOn,
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default ArrowCircleLeftFilled;
