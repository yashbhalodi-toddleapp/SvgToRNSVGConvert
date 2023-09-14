import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const MinusCircleOutlined = (props) => {
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
          d="M10 15C9.44772 15 9 15.4477 9 16C9 16.5523 9.44772 17 10 17H22C22.5523 17 23 16.5523 23 16C23 15.4477 22.5523 15 22 15H10Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2ZM4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16Z"
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
        d="M16 4.5C9.64873 4.5 4.5 9.64873 4.5 16C4.5 22.3513 9.64873 27.5 16 27.5C22.3513 27.5 27.5 22.3513 27.5 16C27.5 9.64873 22.3513 4.5 16 4.5ZM1.5 16C1.5 7.99187 7.99187 1.5 16 1.5C24.0081 1.5 30.5 7.99187 30.5 16C30.5 24.0081 24.0081 30.5 16 30.5C7.99187 30.5 1.5 24.0081 1.5 16Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 16C8.5 15.1716 9.17157 14.5 10 14.5H22C22.8284 14.5 23.5 15.1716 23.5 16C23.5 16.8284 22.8284 17.5 22 17.5H10C9.17157 17.5 8.5 16.8284 8.5 16Z"
        fill={fill}
      />
    </Svg>
  );
};

MinusCircleOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

MinusCircleOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

MinusCircleOutlined.displayName = "MinusCircleOutlined";

export default MinusCircleOutlined;
