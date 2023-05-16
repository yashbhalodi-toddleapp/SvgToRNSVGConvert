import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const TickOutlined = (props) => {
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
        d="M29.0607 6.93934C29.6464 7.52513 29.6464 8.47487 29.0607 9.06066L13.0607 25.0607C12.4749 25.6464 11.5251 25.6464 10.9393 25.0607L2.93934 17.0607C2.35355 16.4749 2.35355 15.5251 2.93934 14.9393C3.52513 14.3536 4.47487 14.3536 5.06066 14.9393L12 21.8787L26.9393 6.93934C27.5251 6.35355 28.4749 6.35355 29.0607 6.93934Z"
        fill="#808080"
      />
    </Svg>
  );
};
TickOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
TickOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default TickOutlined;
