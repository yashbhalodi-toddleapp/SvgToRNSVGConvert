import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const VideoOutlined = (props) => {
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
          d="M7 6C4.23858 6 2 8.23858 2 11V21C2 23.7614 4.23858 26 7 26H19C21.7614 26 24 23.7614 24 21V19.4142L26.5858 22C27.8457 23.2599 30 22.3676 30 20.5858V11.135C30 9.43937 28.0223 8.51305 26.7196 9.5986L24 11.865V11C24 8.23858 21.7614 6 19 6H7ZM24 14.4684V16.5858L28 20.5858V11.135L24 14.4684ZM22 11C22 9.34315 20.6569 8 19 8H7C5.34315 8 4 9.34315 4 11V21C4 22.6569 5.34315 24 7 24H19C20.6569 24 22 22.6569 22 21V11Z"
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
        d="M7 5.5C3.96243 5.5 1.5 7.96243 1.5 11V21C1.5 24.0376 3.96243 26.5 7 26.5H19C22.0376 26.5 24.5 24.0376 24.5 21V20.6213L26.2322 22.3535C27.8071 23.9285 30.5 22.813 30.5 20.5858V11.135C30.5 9.01544 28.0279 7.85754 26.3995 9.21447L24.4964 10.8004C24.3914 7.85528 21.9707 5.5 19 5.5H7ZM24.5 14.7025V16.3787L27.5 19.3787V12.2025L24.5 14.7025ZM21.5 11C21.5 9.61929 20.3807 8.5 19 8.5H7C5.61929 8.5 4.5 9.61929 4.5 11V21C4.5 22.3807 5.61929 23.5 7 23.5H19C20.3807 23.5 21.5 22.3807 21.5 21V11Z"
        fill={fill}
      />
    </Svg>
  );
};

VideoOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

VideoOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

VideoOutlined.displayName = "VideoOutlined";

export default VideoOutlined;
