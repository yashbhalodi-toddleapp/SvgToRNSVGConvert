import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const ArrowCircleRightFilled = (props) => {
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
          d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z"
          fill="#808080"
        />
        <Path
          d="M18.7071 11.2929C18.3166 10.9024 17.6834 10.9024 17.2929 11.2929C16.9024 11.6834 16.9024 12.3166 17.2929 12.7071L19.5858 15H10C9.44771 15 9 15.4477 9 16C9 16.5523 9.44772 17 10 17H19.5858L17.2929 19.2929C16.9024 19.6834 16.9024 20.3166 17.2929 20.7071C17.6834 21.0976 18.3166 21.0976 18.7071 20.7071L22.7071 16.7071C22.9007 16.5135 22.9984 16.2602 23 16.0064C23 16.0043 23 16.0021 23 16C23 15.9979 23 15.9959 23 15.9938C22.9992 15.8605 22.9723 15.7333 22.9241 15.6172C22.8764 15.502 22.8063 15.3938 22.7136 15.2995C22.7111 15.2969 22.7086 15.2944 22.7061 15.2919L18.7071 11.2929Z"
          fill="white"
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
        d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z"
        fill="#808080"
      />
      <Path
        d="M19.0607 10.9393C18.4749 10.3536 17.5251 10.3536 16.9393 10.9393C16.3536 11.5251 16.3536 12.4749 16.9393 13.0607L18.3787 14.5L10 14.5C9.17157 14.5 8.5 15.1716 8.5 16C8.5 16.8284 9.17157 17.5 10 17.5H18.3787L16.9393 18.9393C16.3536 19.5251 16.3536 20.4749 16.9393 21.0607C17.5251 21.6464 18.4749 21.6464 19.0607 21.0607L23.0607 17.0607C23.6464 16.4749 23.6464 15.5251 23.0607 14.9393L19.0607 10.9393Z"
        fill="white"
      />
    </Svg>
  );
};
ArrowCircleRightFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
ArrowCircleRightFilled.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default ArrowCircleRightFilled;
