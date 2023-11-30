import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const FourLinesOutlined = (props) => {
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
          d="M2 7C2 6.44772 2.44772 6 3 6H29C29.5523 6 30 6.44771 30 7C30 7.55228 29.5523 8 29 8L3 8C2.44772 8 2 7.55229 2 7Z"
          fill={fill}
        />
        <Path
          d="M3 12C2.44772 12 2 12.4477 2 13C2 13.5523 2.44772 14 3 14L29 14C29.5523 14 30 13.5523 30 13C30 12.4477 29.5523 12 29 12L3 12Z"
          fill={fill}
        />
        <Path
          d="M3 18C2.44772 18 2 18.4477 2 19C2 19.5523 2.44772 20 3 20L29 20C29.5523 20 30 19.5523 30 19C30 18.4477 29.5523 18 29 18L3 18Z"
          fill={fill}
        />
        <Path
          d="M3 24C2.44772 24 2 24.4477 2 25C2 25.5523 2.44772 26 3 26H15C15.5523 26 16 25.5523 16 25C16 24.4477 15.5523 24 15 24H3Z"
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
        d="M1.5 7C1.5 6.17157 2.17157 5.5 3 5.5H29C29.8284 5.5 30.5 6.17157 30.5 7C30.5 7.82843 29.8284 8.5 29 8.5L3 8.5C2.17157 8.5 1.5 7.82843 1.5 7Z"
        fill={fill}
      />
      <Path
        d="M3 11.5C2.17157 11.5 1.5 12.1716 1.5 13C1.5 13.8284 2.17157 14.5 3 14.5L29 14.5C29.8284 14.5 30.5 13.8284 30.5 13C30.5 12.1716 29.8284 11.5 29 11.5L3 11.5Z"
        fill={fill}
      />
      <Path
        d="M3 17.5C2.17157 17.5 1.5 18.1716 1.5 19C1.5 19.8284 2.17157 20.5 3 20.5L29 20.5C29.8284 20.5 30.5 19.8284 30.5 19C30.5 18.1716 29.8284 17.5 29 17.5L3 17.5Z"
        fill={fill}
      />
      <Path
        d="M3 23.5C2.17157 23.5 1.5 24.1716 1.5 25C1.5 25.8284 2.17157 26.5 3 26.5H15C15.8284 26.5 16.5 25.8284 16.5 25C16.5 24.1716 15.8284 23.5 15 23.5H3Z"
        fill={fill}
      />
    </Svg>
  );
};

FourLinesOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

FourLinesOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

FourLinesOutlined.displayName = "FourLinesOutlined";

export default FourLinesOutlined;
