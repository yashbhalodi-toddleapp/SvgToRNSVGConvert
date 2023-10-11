import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ClassChannelOutlined = (props) => {
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
        d="M15.9992 16C10.7473 16 6.28345 19.3739 4.65672 24.0724C3.93397 26.16 5.7901 28 7.99924 28H15.9992M15.9992 16C19.3129 16 21.9992 13.3137 21.9992 10C21.9992 6.68629 19.3129 4 15.9992 4C12.6855 4 9.99924 6.68629 9.99924 10C9.99924 13.3137 12.6855 16 15.9992 16ZM4.99924 4H24.9992M5.99924 4V8M18.9992 20.3333H28.3326M18.9992 24.3333H28.3326M22.9992 17L20.3326 27.6667M26.9992 17L24.3326 27.6667"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

ClassChannelOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

ClassChannelOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ClassChannelOutlined.displayName = "ClassChannelOutlined";

export default ClassChannelOutlined;
