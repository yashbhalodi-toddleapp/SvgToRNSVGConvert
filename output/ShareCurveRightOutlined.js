import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ShareCurveRightOutlined = (props) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.7071 4.29292C18.4211 4.00692 17.991 3.92137 17.6173 4.07615C17.2436 4.23093 17 4.59557 17 5.00003V11H15C7.8203 11 2 16.8203 2 24C2 24.5523 2.44772 25 3 25C3.55228 25 4 24.5523 4 24C4 22.3431 5.34315 21 7 21H17V27C17 27.4045 17.2436 27.7691 17.6173 27.9239C17.991 28.0787 18.4211 27.9931 18.7071 27.7071L29.7071 16.7071C30.0976 16.3166 30.0976 15.6834 29.7071 15.2929L18.7071 4.29292ZM18.9797 19.7985C18.9922 19.8595 18.9991 19.9226 18.9999 19.9871C19 19.9914 19 19.9957 19 20V24.5858L27.5858 16L19 7.41424V12C19 12 19 12 19 12C19 12.069 18.993 12.1365 18.9797 12.2016C18.8864 12.6572 18.4832 13 18 13C17.9974 13 17.9948 13 17.9923 13H15C10.5603 13 6.735 15.6302 4.99712 19.4173C5.61034 19.1489 6.28778 19 7 19H18C18.4833 19 18.8864 19.3428 18.9797 19.7985Z"
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.426 3.61422C17.9865 3.38205 18.6317 3.51039 19.0607 3.93938L30.0607 14.9394C30.6464 15.5252 30.6464 16.4749 30.0607 17.0607L19.0607 28.0607C18.6317 28.4897 17.9865 28.618 17.426 28.3859C16.8655 28.1537 16.5 27.6067 16.5 27V21.5H7C5.61929 21.5 4.5 22.6193 4.5 24C4.5 24.8285 3.82843 25.5 3 25.5C2.17157 25.5 1.5 24.8285 1.5 24C1.5 16.5442 7.54416 10.5 15 10.5H16.5V5.00004C16.5 4.39335 16.8655 3.8464 17.426 3.61422ZM18 13.5L15 13.5C11.1795 13.5 7.83565 15.5405 5.9986 18.591C6.32332 18.5313 6.65801 18.5 7 18.5L18 18.5C18.8284 18.5 19.5 19.1716 19.5 20V23.3787L26.8787 16L19.5 8.62137V12C19.5 12.0518 19.4974 12.103 19.4923 12.1534C19.4154 12.9098 18.7766 13.5 18 13.5Z"
        fill={fill}
      />
    </Svg>
  );
};

ShareCurveRightOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ShareCurveRightOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ShareCurveRightOutlined.displayName = "ShareCurveRightOutlined";

export default ShareCurveRightOutlined;
