import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const ShareCurveLeftOutlined = (props) => {
  const { size, weight } = props;

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
          fill="#717171"
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
        d="M14.574 3.61422C14.0135 3.38205 13.3683 3.51039 12.9393 3.93938L1.93934 14.9394C1.35356 15.5252 1.35356 16.4749 1.93934 17.0607L12.9393 28.0607C13.3683 28.4897 14.0135 28.618 14.574 28.3859C15.1345 28.1537 15.5 27.6067 15.5 27V21.5H25C26.3807 21.5 27.5 22.6193 27.5 24C27.5 24.8285 28.1716 25.5 29 25.5C29.8284 25.5 30.5 24.8285 30.5 24C30.5 16.5442 24.4558 10.5 17 10.5H15.5V5.00004C15.5 4.39335 15.1345 3.8464 14.574 3.61422ZM14 13.5H17C20.8205 13.5 24.1643 15.5405 26.0014 18.591C25.6767 18.5313 25.342 18.5 25 18.5L14 18.5C13.2234 18.5 12.5846 19.0903 12.5077 19.8467C12.5026 19.8971 12.5 19.9483 12.5 20V23.3787L5.12132 16L12.5 8.62137V12C12.5 12.8285 13.1716 13.5 14 13.5Z"
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
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default ShareCurveLeftOutlined;
