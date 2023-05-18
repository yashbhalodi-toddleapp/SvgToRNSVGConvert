import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ShareCurveLeftOutlined = (props) => {
  const { size, weight, fill } = props;

  if (weight === "REGULAR") {
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.7929 4.29292C14.0789 4.00692 14.509 3.92137 14.8827 4.07615C15.2564 4.23093 15.5 4.59557 15.5 5.00003V11H17.5C24.6797 11 30.5 16.8203 30.5 24C30.5 24.5523 30.0523 25 29.5 25C28.9477 25 28.5 24.5523 28.5 24C28.5 22.3431 27.1569 21 25.5 21H15.5V27C15.5 27.4045 15.2564 27.7691 14.8827 27.9239C14.509 28.0787 14.0789 27.9931 13.7929 27.7071L2.7929 16.7071C2.40237 16.3166 2.40237 15.6834 2.7929 15.2929L13.7929 4.29292ZM13.5203 19.7985C13.5078 19.8595 13.5009 19.9226 13.5001 19.9871C13.5 19.9914 13.5 19.9957 13.5 20V24.5858L4.91422 16L13.5 7.41424V12C13.5 12 13.5 12 13.5 12C13.5 12.069 13.507 12.1365 13.5203 12.2016C13.6136 12.6572 14.0168 13 14.5 13C14.5026 13 14.5052 13 14.5077 13H17.5C21.9397 13 25.765 15.6302 27.5029 19.4173C26.8897 19.1489 26.2122 19 25.5 19H14.5C14.0167 19 13.6136 19.3428 13.5203 19.7985Z"
          fill={fill}
        />
      </Svg>
    );
  }

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.074 3.61422C14.5135 3.38205 13.8683 3.51039 13.4393 3.93938L2.43934 14.9394C1.85356 15.5252 1.85356 16.4749 2.43934 17.0607L13.4393 28.0607C13.8683 28.4897 14.5135 28.618 15.074 28.3859C15.6345 28.1537 16 27.6067 16 27V21.5H25.5C26.8807 21.5 28 22.6193 28 24C28 24.8285 28.6716 25.5 29.5 25.5C30.3284 25.5 31 24.8285 31 24C31 16.5442 24.9558 10.5 17.5 10.5H16V5.00004C16 4.39335 15.6345 3.8464 15.074 3.61422ZM14.5 13.5H17.5C21.3205 13.5 24.6643 15.5405 26.5014 18.591C26.1767 18.5313 25.842 18.5 25.5 18.5L14.5 18.5C13.7234 18.5 13.0846 19.0903 13.0077 19.8467C13.0026 19.8971 13 19.9483 13 20V23.3787L5.62132 16L13 8.62137V12C13 12.8285 13.6716 13.5 14.5 13.5Z"
        fill={fill}
      />
    </Svg>
  );
};

ShareCurveLeftOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ShareCurveLeftOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ShareCurveLeftOutlined.displayName = "ShareCurveLeftOutlined";

export default ShareCurveLeftOutlined;
