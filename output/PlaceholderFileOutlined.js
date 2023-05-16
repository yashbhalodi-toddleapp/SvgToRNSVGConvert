import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const PlaceholderFileOutlined = (props) => {
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
          d="M10 5.00003C8.34315 5.00003 7 6.34318 7 8.00003V24C7 25.6569 8.34315 27 10 27H22C23.6569 27 25 25.6569 25 24V12.4142L17.5858 5.00003H10ZM5 8.00003C5 5.23861 7.23858 3.00003 10 3.00003H18C18.2652 3.00003 18.5196 3.10539 18.7071 3.29292L26.7071 11.2929C26.8946 11.4805 27 11.7348 27 12V24C27 26.7615 24.7614 29 22 29H10C7.23858 29 5 26.7615 5 24V8.00003Z"
          fill="#717171"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.6173 3.07615C17.991 2.92137 18.4211 3.00692 18.7071 3.29292L26.7071 11.2929C26.9931 11.5789 27.0787 12.009 26.9239 12.3827C26.7691 12.7564 26.4045 13 26 13H22C19.2386 13 17 10.7615 17 8.00003V4.00003C17 3.59557 17.2436 3.23093 17.6173 3.07615ZM19 6.41424V8.00003C19 9.65688 20.3431 11 22 11H23.5858L19 6.41424Z"
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
        d="M28.5 12.0118V25C28.5 28.0376 26.0376 30.5 23 30.5H9C5.96243 30.5 3.5 28.0376 3.5 25V7C3.5 3.96243 5.96243 1.5 9 1.5H17.9996C17.9995 1.5 17.9996 1.5 17.9996 1.5C18.3372 1.5 18.6635 1.61381 18.9263 1.82018C18.9732 1.857 19.0181 1.89676 19.0607 1.93934L28.0607 10.9393C28.0966 10.9753 28.1306 11.0129 28.1624 11.052C28.2864 11.2039 28.3776 11.3764 28.4337 11.5589C28.4787 11.7053 28.5012 11.8581 28.5 12.0118ZM16.5 4.5H9C7.61929 4.5 6.5 5.61929 6.5 7V25C6.5 26.3807 7.61929 27.5 9 27.5H23C24.3807 27.5 25.5 26.3807 25.5 25V13.5H22C18.9624 13.5 16.5 11.0376 16.5 8.00004V4.5ZM19.5 8.00004V6.62136L23.3787 10.5H22C20.6193 10.5 19.5 9.38076 19.5 8.00004Z"
        fill="#717171"
      />
    </Svg>
  );
};
PlaceholderFileOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
PlaceholderFileOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default PlaceholderFileOutlined;
