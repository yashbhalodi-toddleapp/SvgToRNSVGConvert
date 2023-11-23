import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const MentionOutlined = (props) => {
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
          d="M29 16C29 8.8203 23.1797 3 16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29H24"
          stroke={fill}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <Circle cx={16} cy={16} r={6} stroke={fill} strokeWidth={2} />
        <Path
          d="M22 11C22 11 22 14.3255 22 17.5001C22 19.4331 23.567 21 25.5 21V21C27.433 21 29 19.4329 29 17.5C29 16.9795 29 16.4629 29 16"
          stroke={fill}
          strokeWidth={2}
          strokeLinecap="round"
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
        d="M16 4.5C9.64873 4.5 4.5 9.64873 4.5 16C4.5 22.3513 9.64873 27.5 16 27.5H24C24.8284 27.5 25.5 28.1716 25.5 29C25.5 29.8284 24.8284 30.5 24 30.5H16C7.99187 30.5 1.5 24.0081 1.5 16C1.5 7.99187 7.99187 1.5 16 1.5C24.0081 1.5 30.5 7.99187 30.5 16V17.5C30.5 20.2614 28.2614 22.5 25.5 22.5C23.825 22.5 22.3423 21.6763 21.4349 20.4119C20.1514 21.991 18.1936 23 16 23C12.134 23 9 19.866 9 16C9 12.134 12.134 9 16 9C17.7308 9 19.3148 9.62815 20.5367 10.6689C20.6874 9.99978 21.2853 9.5 22 9.5C22.8284 9.5 23.5 10.1716 23.5 11V17.5001C23.5 18.6046 24.3954 19.5 25.5 19.5C26.6045 19.5 27.5 18.6045 27.5 17.5V16C27.5 9.64873 22.3513 4.5 16 4.5ZM16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z"
        fill={fill}
      />
    </Svg>
  );
};

MentionOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

MentionOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

MentionOutlined.displayName = "MentionOutlined";

export default MentionOutlined;
