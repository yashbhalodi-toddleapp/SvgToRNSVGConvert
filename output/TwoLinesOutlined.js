import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const TwoLinesOutlined = (props) => {
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
          d="M3 12C2.44772 12 2 12.4477 2 13C2 13.5523 2.44772 14 3 14L29 14C29.5523 14 30 13.5523 30 13C30 12.4477 29.5523 12 29 12H3Z"
          fill={fill}
        />
        <Path
          d="M3 18C2.44772 18 2 18.4477 2 19C2 19.5523 2.44772 20 3 20L15 20C15.5523 20 16 19.5523 16 19C16 18.4477 15.5523 18 15 18L3 18Z"
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
        d="M3 11.5C2.17157 11.5 1.5 12.1716 1.5 13C1.5 13.8284 2.17157 14.5 3 14.5L29 14.5C29.8284 14.5 30.5 13.8284 30.5 13C30.5 12.1716 29.8284 11.5 29 11.5H3Z"
        fill={fill}
      />
      <Path
        d="M3 17.5C2.17157 17.5 1.5 18.1716 1.5 19C1.5 19.8284 2.17157 20.5 3 20.5L15 20.5C15.8284 20.5 16.5 19.8284 16.5 19C16.5 18.1716 15.8284 17.5 15 17.5L3 17.5Z"
        fill={fill}
      />
    </Svg>
  );
};

TwoLinesOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

TwoLinesOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

TwoLinesOutlined.displayName = "TwoLinesOutlined";

export default TwoLinesOutlined;
