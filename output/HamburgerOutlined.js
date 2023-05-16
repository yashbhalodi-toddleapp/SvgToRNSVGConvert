import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const HamburgerOutlined = (props) => {
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
          d="M2 6C2 5.44772 2.44772 5 3 5H29C29.5523 5 30 5.44772 30 6C30 6.55228 29.5523 7 29 7H3C2.44772 7 2 6.55228 2 6Z"
          fill={fill}
        />
        <Path
          d="M2 16C2 15.4477 2.44772 15 3 15H29C29.5523 15 30 15.4477 30 16C30 16.5523 29.5523 17 29 17H3C2.44772 17 2 16.5523 2 16Z"
          fill={fill}
        />
        <Path
          d="M3 25C2.44772 25 2 25.4477 2 26C2 26.5523 2.44772 27 3 27H29C29.5523 27 30 26.5523 30 26C30 25.4477 29.5523 25 29 25H3Z"
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
        d="M1.5 6C1.5 5.17157 2.17157 4.5 3 4.5H29C29.8284 4.5 30.5 5.17157 30.5 6C30.5 6.82843 29.8284 7.5 29 7.5H3C2.17157 7.5 1.5 6.82843 1.5 6Z"
        fill={fill}
      />
      <Path
        d="M1.5 16C1.5 15.1716 2.17157 14.5 3 14.5H29C29.8284 14.5 30.5 15.1716 30.5 16C30.5 16.8284 29.8284 17.5 29 17.5H3C2.17157 17.5 1.5 16.8284 1.5 16Z"
        fill={fill}
      />
      <Path
        d="M3 24.5C2.17157 24.5 1.5 25.1716 1.5 26C1.5 26.8284 2.17157 27.5 3 27.5H29C29.8284 27.5 30.5 26.8284 30.5 26C30.5 25.1716 29.8284 24.5 29 24.5H3Z"
        fill={fill}
      />
    </Svg>
  );
};
HamburgerOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
HamburgerOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default HamburgerOutlined;
