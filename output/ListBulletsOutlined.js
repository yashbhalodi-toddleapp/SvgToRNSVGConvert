import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const ListBulletsOutlined = (props) => {
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
          d="M5 4C3.89543 4 3 4.89544 3 6C3 7.10458 3.89544 8 5 8C6.10456 8 7 7.10458 7 6C7 4.89544 6.10457 4 5 4Z"
          fill={fill}
        />
        <Path
          d="M12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7H28C28.5523 7 29 6.55228 29 6C29 5.44772 28.5523 5 28 5H12Z"
          fill={fill}
        />
        <Path
          d="M12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17H28C28.5523 17 29 16.5523 29 16C29 15.4477 28.5523 15 28 15H12Z"
          fill={fill}
        />
        <Path
          d="M11 26C11 25.4477 11.4477 25 12 25H28C28.5523 25 29 25.4477 29 26C29 26.5523 28.5523 27 28 27H12C11.4477 27 11 26.5523 11 26Z"
          fill={fill}
        />
        <Path
          d="M3 16C3 14.8954 3.89543 14 5 14C6.10457 14 7 14.8954 7 16C7 17.1046 6.10456 18 5 18C3.89544 18 3 17.1046 3 16Z"
          fill={fill}
        />
        <Path
          d="M5 24C3.89543 24 3 24.8954 3 26C3 27.1046 3.89544 28 5 28C6.10456 28 7 27.1046 7 26C7 24.8954 6.10457 24 5 24Z"
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
        d="M7 6.00001C7 7.10458 6.10457 8 5 8C3.89543 8 3 7.10458 3 6.00001C3 4.89544 3.89543 4 5 4C6.10457 4 7 4.89544 7 6.00001Z"
        fill={fill}
      />
      <Path
        d="M12 4.5C11.1716 4.5 10.5 5.17157 10.5 6C10.5 6.82843 11.1716 7.5 12 7.5H28C28.8284 7.5 29.5 6.82843 29.5 6C29.5 5.17157 28.8284 4.5 28 4.5H12Z"
        fill={fill}
      />
      <Path
        d="M12 14.5C11.1716 14.5 10.5 15.1716 10.5 16C10.5 16.8284 11.1716 17.5 12 17.5H28C28.8284 17.5 29.5 16.8284 29.5 16C29.5 15.1716 28.8284 14.5 28 14.5H12Z"
        fill={fill}
      />
      <Path
        d="M10.5 26C10.5 25.1716 11.1716 24.5 12 24.5H28C28.8284 24.5 29.5 25.1716 29.5 26C29.5 26.8284 28.8284 27.5 28 27.5H12C11.1716 27.5 10.5 26.8284 10.5 26Z"
        fill={fill}
      />
      <Path
        d="M5 18C6.10457 18 7 17.1046 7 16C7 14.8954 6.10457 14 5 14C3.89543 14 3 14.8954 3 16C3 17.1046 3.89543 18 5 18Z"
        fill={fill}
      />
      <Path
        d="M7 26C7 27.1046 6.10457 28 5 28C3.89543 28 3 27.1046 3 26C3 24.8954 3.89543 24 5 24C6.10457 24 7 24.8954 7 26Z"
        fill={fill}
      />
    </Svg>
  );
};
ListBulletsOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
ListBulletsOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default ListBulletsOutlined;
