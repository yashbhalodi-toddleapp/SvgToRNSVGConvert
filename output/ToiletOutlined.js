import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ToiletOutlined = (props) => {
  const { size, weight, fill } = props;
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
        d="M6 2C5.44772 2 5 2.44772 5 3V14.3517C5 18.5468 7.441 22.3579 11.2503 24.1127L9.152 27.47C8.95933 27.7783 8.94913 28.1668 9.12536 28.4848C9.30158 28.8027 9.63648 29 10 29H22C22.3553 29 22.6839 28.8115 22.8632 28.5048C23.0426 28.1982 23.0457 27.8194 22.8716 27.5097L20.8716 23.9542C20.8519 23.9191 20.8304 23.8858 20.8072 23.8541C24.5847 21.9557 27 18.0779 27 13.808V13C27 12.4477 26.5523 12 26 12H13V3C13 2.44772 12.5523 2 12 2H6ZM11 12V4H7V12H11ZM13.186 24.7892C15.1019 25.2592 17.1184 25.1944 19.0106 24.5912C19.028 24.7087 19.0667 24.825 19.1284 24.9347L20.2902 27H11.8042L13.186 24.7892ZM7 14V14.3517C7 17.771 8.99236 20.8767 12.1003 22.3023C14.3303 23.3251 16.8873 23.3644 19.1476 22.4106L19.3495 22.3254C22.7149 20.9053 24.9228 17.6401 24.998 14H7Z"
        fill={fill}
      />
    </Svg>
  );
};

ToiletOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

ToiletOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ToiletOutlined.displayName = "ToiletOutlined";

export default ToiletOutlined;
