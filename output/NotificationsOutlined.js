import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const NotificationsOutlined = (props) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 12C5.5 6.75329 9.75329 2.5 15 2.5H17C22.2467 2.5 26.5 6.75329 26.5 12V21.5H27C27.8284 21.5 28.5 22.1716 28.5 23C28.5 23.8284 27.8284 24.5 27 24.5H26.5H22.3246C21.6439 27.3601 19.0625 29.5 16 29.5C12.9375 29.5 10.3561 27.3601 9.6754 24.5H5.5H5C4.17157 24.5 3.5 23.8284 3.5 23C3.5 22.1716 4.17157 21.5 5 21.5H5.5V12ZM12.8411 24.5C13.4065 25.6788 14.614 26.5 16 26.5C17.386 26.5 18.5935 25.6788 19.1589 24.5H12.8411ZM23.5 12V21.5H8.5V12C8.5 8.41015 11.4101 5.5 15 5.5H17C20.5899 5.5 23.5 8.41015 23.5 12Z"
        fill="#808080"
      />
    </Svg>
  );
};
NotificationsOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
NotificationsOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default NotificationsOutlined;
