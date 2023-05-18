import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ArrowCircleRightFilled = (props) => {
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
          d="M30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16ZM17.2929 11.2929C17.6834 10.9024 18.3166 10.9024 18.7071 11.2929L22.7061 15.2919L22.7136 15.2994C22.8063 15.3938 22.8764 15.502 22.9241 15.6172C22.9723 15.7333 22.9992 15.8605 23 15.9938L23 16L23 16.0064C22.9984 16.2602 22.9007 16.5135 22.7071 16.7071L18.7071 20.7071C18.3166 21.0976 17.6834 21.0976 17.2929 20.7071C16.9024 20.3166 16.9024 19.6834 17.2929 19.2929L19.5858 17H10C9.44772 17 9 16.5523 9 16C9 15.4477 9.44771 15 10 15H19.5858L17.2929 12.7071C16.9024 12.3166 16.9024 11.6834 17.2929 11.2929Z"
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
        d="M30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16ZM16.9393 10.9393C17.5251 10.3536 18.4749 10.3536 19.0607 10.9393L23.0607 14.9393C23.6464 15.5251 23.6464 16.4749 23.0607 17.0607L19.0607 21.0607C18.4749 21.6464 17.5251 21.6464 16.9393 21.0607C16.3536 20.4749 16.3536 19.5251 16.9393 18.9393L18.3787 17.5H10C9.17157 17.5 8.5 16.8284 8.5 16C8.5 15.1716 9.17157 14.5 10 14.5L18.3787 14.5L16.9393 13.0607C16.3536 12.4749 16.3536 11.5251 16.9393 10.9393Z"
        fill={fill}
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
  weight: "BOLD",
  fill: colors.iconDefault,
};

ArrowCircleRightFilled.displayName = "ArrowCircleRightFilled";

export default ArrowCircleRightFilled;
