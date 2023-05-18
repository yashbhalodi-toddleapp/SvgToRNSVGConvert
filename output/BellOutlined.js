import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const BellOutlined = (props) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 13C6 7.47715 10.4772 3 16 3C21.5228 3 26 7.47715 26 13V23H27C27.5523 23 28 23.4477 28 24C28 24.5523 27.5523 25 27 25H20.8991C20.4332 27.2765 18.41 29 16 29C13.59 29 11.5668 27.2765 11.1009 25H5C4.44772 25 4 24.5523 4 24C4 23.4477 4.44772 23 5 23H6V13ZM13.173 25C13.5879 26.1612 14.7023 27 16 27C17.2977 27 18.4121 26.1612 18.827 25H13.173ZM24 13V23H8V13C8 8.58172 11.5817 5 16 5C20.4183 5 24 8.58172 24 13Z"
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
        d="M5.5 12C5.5 6.75329 9.75329 2.5 15 2.5H17C22.2467 2.5 26.5 6.75329 26.5 12V21.5H27C27.8284 21.5 28.5 22.1716 28.5 23C28.5 23.8284 27.8284 24.5 27 24.5H26.5H22.3246C21.6439 27.3601 19.0625 29.5 16 29.5C12.9375 29.5 10.3561 27.3601 9.6754 24.5H5.5H5C4.17157 24.5 3.5 23.8284 3.5 23C3.5 22.1716 4.17157 21.5 5 21.5H5.5V12ZM12.8411 24.5C13.4065 25.6788 14.614 26.5 16 26.5C17.386 26.5 18.5935 25.6788 19.1589 24.5H12.8411ZM23.5 12V21.5H8.5V12C8.5 8.41015 11.4101 5.5 15 5.5H17C20.5899 5.5 23.5 8.41015 23.5 12Z"
        fill={fill}
      />
    </Svg>
  );
};

BellOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

BellOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

BellOutlined.displayName = "BellOutlined";

export default BellOutlined;
