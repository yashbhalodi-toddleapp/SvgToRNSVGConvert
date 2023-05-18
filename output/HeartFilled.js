import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const HeartFilled = (props) => {
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
        d="M10.2035 3.5C5.39336 3.5 1.5 7.40757 1.5 12.2204C1.5 14.3771 2.28337 16.3547 3.57931 17.877L3.87638 18.2506C6.85205 21.9922 10.3801 25.2569 14.3387 27.9318C15.5085 28.7222 17.0494 28.6849 18.1797 27.8392L18.8563 27.3329C22.0877 24.915 25.0052 22.1023 27.5413 18.9601L28.3411 17.9692C29.6844 16.435 30.5 14.4211 30.5 12.2204C30.5 7.40757 26.6066 3.5 21.7965 3.5C19.5691 3.5 17.5378 4.33922 16 5.71551C14.4622 4.33922 12.4309 3.5 10.2035 3.5Z"
        fill={fill}
      />
    </Svg>
  );
};

HeartFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

HeartFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

HeartFilled.displayName = "HeartFilled";

export default HeartFilled;
