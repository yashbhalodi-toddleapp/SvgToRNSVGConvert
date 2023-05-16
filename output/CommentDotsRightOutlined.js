import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const CommentDotsRightOutlined = (props) => {
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
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default CommentDotsRightOutlined;
