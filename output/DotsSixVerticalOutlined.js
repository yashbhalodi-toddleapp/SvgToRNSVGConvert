import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const DotsSixVerticalOutlined = (props) => {
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
          d="M11 8.00001C9.89542 8.00001 9 7.10458 9 6.00001C9 4.89544 9.89542 4 11 4C12.1046 4 13 4.89544 13 6.00001C13 7.10458 12.1046 8.00001 11 8.00001Z"
          fill={fill}
        />
        <Path
          d="M11 28C9.89542 28 9 27.1046 9 26C9 24.8954 9.89542 24 11 24C12.1046 24 13 24.8954 13 26C13 27.1046 12.1046 28 11 28Z"
          fill={fill}
        />
        <Path
          d="M9 16C9 17.1046 9.89542 18 11 18C12.1046 18 13 17.1046 13 16C13 14.8954 12.1046 14 11 14C9.89542 14 9 14.8954 9 16Z"
          fill={fill}
        />
        <Path
          d="M21 28C19.8954 28 19 27.1046 19 26C19 24.8954 19.8954 24 21 24C22.1046 24 23 24.8954 23 26C23 27.1046 22.1046 28 21 28Z"
          fill={fill}
        />
        <Path
          d="M19 6.00001C19 7.10458 19.8954 8.00001 21 8.00001C22.1046 8.00001 23 7.10458 23 6.00001C23 4.89544 22.1046 4 21 4C19.8954 4 19 4.89544 19 6.00001Z"
          fill={fill}
        />
        <Path
          d="M21 18C19.8954 18 19 17.1046 19 16C19 14.8954 19.8954 14 21 14C22.1046 14 23 14.8954 23 16C23 17.1046 22.1046 18 21 18Z"
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
        d="M11 9.00002C9.34313 9.00002 8 7.65687 8 6.00001C8 4.34316 9.34313 3 11 3C12.6568 3 14 4.34316 14 6.00001C14 7.65687 12.6568 9.00002 11 9.00002Z"
        fill={fill}
      />
      <Path
        d="M11 29C9.34313 29 8 27.6569 8 26C8 24.3432 9.34313 23 11 23C12.6568 23 14 24.3432 14 26C14 27.6569 12.6568 29 11 29Z"
        fill={fill}
      />
      <Path
        d="M8 16C8 17.6569 9.34313 19 11 19C12.6568 19 14 17.6569 14 16C14 14.3432 12.6568 13 11 13C9.34313 13 8 14.3432 8 16Z"
        fill={fill}
      />
      <Path
        d="M21 29C19.3431 29 18 27.6569 18 26C18 24.3432 19.3431 23 21 23C22.6568 23 24 24.3432 24 26C24 27.6569 22.6568 29 21 29Z"
        fill={fill}
      />
      <Path
        d="M18 6.00001C18 7.65687 19.3431 9.00002 21 9.00002C22.6568 9.00002 24 7.65687 24 6.00001C24 4.34316 22.6568 3 21 3C19.3431 3 18 4.34316 18 6.00001Z"
        fill={fill}
      />
      <Path
        d="M21 19C19.3431 19 18 17.6569 18 16C18 14.3432 19.3431 13 21 13C22.6568 13 24 14.3432 24 16C24 17.6569 22.6568 19 21 19Z"
        fill={fill}
      />
    </Svg>
  );
};

DotsSixVerticalOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

DotsSixVerticalOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

DotsSixVerticalOutlined.displayName = "DotsSixVerticalOutlined";

export default DotsSixVerticalOutlined;
