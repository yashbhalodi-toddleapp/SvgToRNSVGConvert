import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const HashtagOutlined = (props) => {
  const { size, weight, fill } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15 5L10 27M6 12H26M6 20H26M22 5L17 27"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

HashtagOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

HashtagOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

HashtagOutlined.displayName = "HashtagOutlined";

export default HashtagOutlined;
