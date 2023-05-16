import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const VideoOutlined = (props) => {
  const { size, weight } = props;
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
        fill="#808080"
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
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default VideoOutlined;
