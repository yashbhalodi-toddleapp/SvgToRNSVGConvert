import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const ArrowCircleRightOutlined = (props) => {
  const { size, weight } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M8.5 16C8.5 15.1716 9.17157 14.5 10 14.5H18.3787L16.9393 13.0607C16.3536 12.4749 16.3536 11.5251 16.9393 10.9393C17.5251 10.3536 18.4749 10.3536 19.0607 10.9393L23.0607 14.9393C23.2045 15.0832 23.313 15.2489 23.3862 15.4258C23.4579 15.5987 23.4981 15.7878 23.4999 15.9862C23.5 15.9908 23.5 15.9954 23.5 16C23.5 16.0046 23.5 16.0092 23.4999 16.0138C23.4981 16.2122 23.4579 16.4013 23.3862 16.5742C23.313 16.7511 23.2045 16.9168 23.0607 17.0607L19.0607 21.0607C18.4749 21.6464 17.5251 21.6464 16.9393 21.0607C16.3536 20.4749 16.3536 19.5251 16.9393 18.9393L18.3787 17.5H10C9.17157 17.5 8.5 16.8284 8.5 16Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.5 16C30.5 24.0081 24.0081 30.5 16 30.5C7.99187 30.5 1.5 24.0081 1.5 16C1.5 7.99187 7.99187 1.5 16 1.5C24.0081 1.5 30.5 7.99187 30.5 16ZM16 27.5C22.3513 27.5 27.5 22.3513 27.5 16C27.5 9.64873 22.3513 4.5 16 4.5C9.64872 4.5 4.5 9.64872 4.5 16C4.5 22.3513 9.64872 27.5 16 27.5Z"
        fill={fill}
      />
    </Svg>
  );
};
ArrowCircleRightOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
ArrowCircleRightOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default ArrowCircleRightOutlined;
