import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const TextBoldOutlined = (props) => {
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
          d="M6 3.5C5.17157 3.5 4.5 4.17157 4.5 5V27C4.5 27.8284 5.17157 28.5 6 28.5H20.5C24.366 28.5 27.5 25.366 27.5 21.5C27.5 18.7655 25.9321 16.3973 23.6462 15.2452C24.797 13.9978 25.5 12.331 25.5 10.5C25.5 6.63401 22.366 3.5 18.5 3.5H6ZM18.5 14.5C20.7091 14.5 22.5 12.7091 22.5 10.5C22.5 8.29086 20.7091 6.5 18.5 6.5H7.5V14.5H18.5ZM7.5 17.5V25.5H20.5C22.7091 25.5 24.5 23.7091 24.5 21.5C24.5 19.2909 22.7091 17.5 20.5 17.5H7.5Z"
          fill={fill}
        />
      </Svg>
    );
  }

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4C5.17157 4 4.5 4.67157 4.5 5.5V27.5C4.5 28.3284 5.17157 29 6 29H20.5C24.366 29 27.5 25.866 27.5 22C27.5 19.2655 25.9321 16.8973 23.6462 15.7452C24.797 14.4978 25.5 12.831 25.5 11C25.5 7.13401 22.366 4 18.5 4H6ZM18.5 15C20.7091 15 22.5 13.2091 22.5 11C22.5 8.79086 20.7091 7 18.5 7H7.5V15H18.5ZM7.5 18V26H20.5C22.7091 26 24.5 24.2091 24.5 22C24.5 19.7909 22.7091 18 20.5 18H7.5Z"
        fill={fill}
      />
    </Svg>
  );
};

TextBoldOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

TextBoldOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

TextBoldOutlined.displayName = "TextBoldOutlined";

export default TextBoldOutlined;
