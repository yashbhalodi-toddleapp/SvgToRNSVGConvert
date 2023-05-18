import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const RightArrowCircleOutlined = (props) => {
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
          d="M9 16C9 15.4477 9.44771 15 10 15H19.5858L17.2929 12.7071C16.9024 12.3166 16.9024 11.6834 17.2929 11.2929C17.6834 10.9024 18.3166 10.9024 18.7071 11.2929L22.7058 15.2916C22.7099 15.2957 22.714 15.2998 22.718 15.304C22.8077 15.3965 22.876 15.502 22.9229 15.6144C22.9663 15.7181 22.9927 15.8306 22.9987 15.9485C22.9996 15.9656 23 15.9827 23 16C23 16.2693 22.8935 16.5138 22.7203 16.6936C22.7155 16.6987 22.7105 16.7037 22.7055 16.7087L18.7071 20.7071C18.3166 21.0976 17.6834 21.0976 17.2929 20.7071C16.9024 20.3166 16.9024 19.6834 17.2929 19.2929L19.5858 17H10C9.44771 17 9 16.5523 9 16Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16ZM16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
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

RightArrowCircleOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

RightArrowCircleOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

RightArrowCircleOutlined.displayName = "RightArrowCircleOutlined";

export default RightArrowCircleOutlined;
