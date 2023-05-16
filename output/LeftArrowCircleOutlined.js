import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const LeftArrowCircleOutlined = (props) => {
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
          d="M12.4142 15L14.7071 12.7071C15.0976 12.3166 15.0976 11.6834 14.7071 11.2929C14.3166 10.9024 13.6834 10.9024 13.2929 11.2929L9.29289 15.2929C9.2911 15.2947 9.28931 15.2965 9.28754 15.2983C9.10972 15.4788 9 15.7266 9 16C9 16.2734 9.10972 16.5212 9.28754 16.7017C9.28931 16.7035 9.2911 16.7053 9.29289 16.7071L13.2929 20.7071C13.6834 21.0976 14.3166 21.0976 14.7071 20.7071C15.0976 20.3166 15.0976 19.6834 14.7071 19.2929L12.4142 17H22C22.5523 17 23 16.5523 23 16C23 15.4477 22.5523 15 22 15H12.4142Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16ZM16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4Z"
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
        d="M13.6213 17.5H22C22.8284 17.5 23.5 16.8284 23.5 16C23.5 15.1716 22.8284 14.5 22 14.5L13.6213 14.5L15.0607 13.0607C15.6464 12.4749 15.6464 11.5251 15.0607 10.9393C14.4749 10.3536 13.5251 10.3536 12.9393 10.9393L8.93934 14.9393C8.93396 14.9447 8.92862 14.9501 8.92333 14.9556C8.66131 15.2257 8.5 15.594 8.5 16C8.5 16.4076 8.6626 16.7773 8.92647 17.0476C8.93073 17.052 8.93502 17.0563 8.93934 17.0607L12.9393 21.0607C13.5251 21.6464 14.4749 21.6464 15.0607 21.0607C15.6464 20.4749 15.6464 19.5251 15.0607 18.9393L13.6213 17.5Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 16C1.5 7.99187 7.99187 1.5 16 1.5C24.0081 1.5 30.5 7.99187 30.5 16C30.5 24.0081 24.0081 30.5 16 30.5C7.99187 30.5 1.5 24.0081 1.5 16ZM16 4.5C9.64873 4.5 4.5 9.64873 4.5 16C4.5 22.3513 9.64873 27.5 16 27.5C22.3513 27.5 27.5 22.3513 27.5 16C27.5 9.64872 22.3513 4.5 16 4.5Z"
        fill={fill}
      />
    </Svg>
  );
};

LeftArrowCircleOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

LeftArrowCircleOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default LeftArrowCircleOutlined;
