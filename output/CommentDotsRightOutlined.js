import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const CommentDotsRightOutlined = (props) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 5C22.0751 5 27 9.92487 27 16C27 17.6376 26.6428 19.189 26.0031 20.5829C25.8433 20.9309 25.8062 21.3022 25.807 21.6136C25.8078 21.9351 25.8502 22.2723 25.9078 22.5973C26.0049 23.1451 26.1649 23.7578 26.3131 24.3256C26.3384 24.4228 26.3634 24.5186 26.3877 24.6125C26.563 25.2904 26.703 25.8777 26.7492 26.3441C26.7692 26.5457 26.7673 26.6872 26.7561 26.7796C26.6815 26.7924 26.5364 26.8063 26.2821 26.7863C25.805 26.7488 25.2057 26.6163 24.5135 26.4477C24.4079 26.422 24.3 26.3954 24.1904 26.3684C23.6186 26.2274 23.0033 26.0757 22.4509 25.9842C22.1168 25.9289 21.7718 25.8892 21.4429 25.8905C21.1223 25.8917 20.7512 25.9314 20.4028 26.0838C19.0559 26.6727 17.5675 27 16 27C9.92487 27 5 22.0751 5 16C5 9.92487 9.92487 5 16 5ZM26.7387 26.8671C26.7388 26.8671 26.739 26.8666 26.7394 26.8653L26.7387 26.8671ZM29 16C29 8.8203 23.1797 3 16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29C17.8485 29 19.6093 28.6136 21.2041 27.9162C21.2039 27.9163 21.204 27.9162 21.2041 27.9162C21.208 27.9149 21.2756 27.8912 21.4506 27.8905C21.6242 27.8898 21.8475 27.9115 22.124 27.9573C22.5926 28.035 23.1164 28.1638 23.6896 28.3049C23.8045 28.3332 23.9214 28.362 24.0403 28.3909C24.7167 28.5557 25.4651 28.7283 26.1254 28.7801C26.7126 28.8263 27.6011 28.8152 28.2083 28.2059C28.5258 27.8873 28.6632 27.4945 28.7215 27.1575C28.7797 26.8212 28.7716 26.4708 28.7394 26.1468C28.6757 25.5036 28.4947 24.7718 28.324 24.1118C28.2972 24.0082 28.2706 23.9061 28.2444 23.8056C28.095 23.2322 27.959 22.7102 27.8771 22.2482C27.8297 21.981 27.8074 21.7692 27.807 21.6084C27.8066 21.4656 27.824 21.4115 27.8235 21.4113C27.8233 21.4112 27.8225 21.4133 27.8208 21.4171C28.5782 19.7668 29 17.9313 29 16Z"
          fill={fill}
        />
        <Path
          d="M10.5 18C9.67158 18 9 17.3284 9 16.5C9 15.6716 9.67158 15 10.5 15C11.3284 15 12 15.6716 12 16.5C12 17.3284 11.3284 18 10.5 18Z"
          fill={fill}
        />
        <Path
          d="M21.5 18C20.6716 18 20 17.3284 20 16.5C20 15.6716 20.6716 15 21.5 15C22.3284 15 23 15.6716 23 16.5C23 17.3284 22.3284 18 21.5 18Z"
          fill={fill}
        />
        <Path
          d="M16 18C15.1716 18 14.5 17.3284 14.5 16.5C14.5 15.6716 15.1716 15 16 15C16.8284 15 17.5 15.6716 17.5 16.5C17.5 17.3284 16.8284 18 16 18Z"
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
        d="M24 16C24 17.1046 23.1046 18 22 18C20.8954 18 20 17.1046 20 16C20 14.8954 20.8954 14 22 14C23.1046 14 24 14.8954 24 16Z"
        fill={fill}
      />
      <Path
        d="M10 18C11.1046 18 12 17.1046 12 16C12 14.8954 11.1046 14 10 14C8.89543 14 8 14.8954 8 16C8 17.1046 8.89543 18 10 18Z"
        fill={fill}
      />
      <Path
        d="M18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 1.5C24.0081 1.5 30.5 7.99187 30.5 16C30.5 17.9897 30.0984 19.8892 29.3707 21.6189L30.2756 27.4404C30.5329 29.096 29.1207 30.5312 27.4612 30.3006L21.4043 29.459C19.7324 30.1309 17.9076 30.5 16 30.5C7.99187 30.5 1.5 24.0081 1.5 16C1.5 7.99187 7.99187 1.5 16 1.5ZM27.5 16C27.5 9.64873 22.3513 4.5 16 4.5C9.64873 4.5 4.5 9.64873 4.5 16C4.5 22.3513 9.64873 27.5 16 27.5C17.6396 27.5 19.1953 27.1578 20.6027 26.5423C20.8564 26.4314 21.1359 26.3928 21.4102 26.4309L27.2079 27.2366L26.339 21.6471C26.2938 21.3562 26.3352 21.0585 26.458 20.791C27.1265 19.3343 27.5 17.7128 27.5 16Z"
        fill={fill}
      />
    </Svg>
  );
};

CommentDotsRightOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

CommentDotsRightOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default CommentDotsRightOutlined;
