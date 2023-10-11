import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const FamilyChannelOutlined = (props) => {
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
        d="M9.99935 18C6.73271 18 3.98869 20.5572 3.21638 24.0156C2.97564 25.0936 3.89478 26 4.99935 26H7.49935M12.4993 9.99999C10.4283 9.99999 8.74935 11.6789 8.74935 13.75C8.74935 15.821 10.4283 17.5 12.4993 17.5C12.6689 17.5 12.8358 17.4887 12.9993 17.4669M18.9993 16C13.7475 16 9.28356 19.3739 7.65684 24.0724C6.93409 26.16 8.79021 28 10.9993 28M18.9993 16C22.3131 16 24.9993 13.3137 24.9993 10C24.9993 6.68629 22.3131 4 18.9993 4C15.6856 4 12.9993 6.68629 12.9993 10C12.9993 13.3137 15.6856 16 18.9993 16ZM10.9993 28H13.4993M10.9993 28H15.9994M18.9993 21.3333H28.3327M18.9993 25.3333H28.3327M22.9993 18L20.3327 28.6667M26.9993 18L24.3327 28.6667"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

FamilyChannelOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

FamilyChannelOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

FamilyChannelOutlined.displayName = "FamilyChannelOutlined";

export default FamilyChannelOutlined;
