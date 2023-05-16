import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const ClockFilled = (props) => {
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
          d="M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16ZM17 10C17 9.44772 16.5523 9 16 9C15.4477 9 15 9.44772 15 10V16C15 16.2652 15.1054 16.5196 15.2929 16.7071L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L17 15.5858V10Z"
          fill="#808080"
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
        d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2Z"
        fill="#808080"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8.5C16.8284 8.5 17.5 9.17157 17.5 10V15.3787L21.0607 18.9393C21.6464 19.5251 21.6464 20.4749 21.0607 21.0607C20.4749 21.6464 19.5251 21.6464 18.9393 21.0607L14.9393 17.0607C14.658 16.7794 14.5 16.3978 14.5 16V10C14.5 9.17157 15.1716 8.5 16 8.5Z"
        fill="white"
      />
    </Svg>
  );
};
ClockFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
ClockFilled.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default ClockFilled;
