import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const ExpandOutlined = (props) => {
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
        d="M5.5 8C5.5 6.61929 6.61929 5.5 8 5.5H12C12.8284 5.5 13.5 4.82843 13.5 4C13.5 3.17157 12.8284 2.5 12 2.5H8C4.96243 2.5 2.5 4.96243 2.5 8V12C2.5 12.8284 3.17157 13.5 4 13.5C4.82843 13.5 5.5 12.8284 5.5 12V8Z"
        fill={fill}
      />
      <Path
        d="M24 5.5C25.3807 5.5 26.5 6.61929 26.5 8V12C26.5 12.8284 27.1716 13.5 28 13.5C28.8284 13.5 29.5 12.8284 29.5 12V8C29.5 4.96243 27.0376 2.5 24 2.5H20C19.1716 2.5 18.5 3.17157 18.5 4C18.5 4.82843 19.1716 5.5 20 5.5L24 5.5Z"
        fill={fill}
      />
      <Path
        d="M24 26.5C25.3807 26.5 26.5 25.3807 26.5 24V20C26.5 19.1716 27.1716 18.5 28 18.5C28.8284 18.5 29.5 19.1716 29.5 20V24C29.5 27.0376 27.0376 29.5 24 29.5H20C19.1716 29.5 18.5 28.8284 18.5 28C18.5 27.1716 19.1716 26.5 20 26.5H24Z"
        fill={fill}
      />
      <Path
        d="M8 26.5C6.61929 26.5 5.5 25.3807 5.5 24L5.5 20C5.5 19.1716 4.82843 18.5 4 18.5C3.17157 18.5 2.5 19.1716 2.5 20V24C2.5 27.0376 4.96243 29.5 8 29.5H12C12.8284 29.5 13.5 28.8284 13.5 28C13.5 27.1716 12.8284 26.5 12 26.5H8Z"
        fill={fill}
      />
    </Svg>
  );
};
ExpandOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
ExpandOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default ExpandOutlined;
