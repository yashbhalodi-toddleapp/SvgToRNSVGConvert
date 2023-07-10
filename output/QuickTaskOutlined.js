import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const QuickTaskOutlined = (props) => {
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
          d="M11 21C10.4477 21 10 21.4477 10 22C10 22.5523 10.4477 23 11 23H21C21.5523 23 22 22.5523 22 22C22 21.4477 21.5523 21 21 21H11Z"
          fill={fill}
        />
        <Path
          d="M10 16C10 15.4477 10.4477 15 11 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H11C10.4477 17 10 16.5523 10 16Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6C12 3.79086 13.7909 2 16 2C18.2091 2 20 3.79086 20 6H23C25.7614 6 28 8.23858 28 11V25C28 27.7614 25.7614 30 23 30H9C6.23858 30 4 27.7614 4 25V11C4 8.23858 6.23858 6 9 6H12ZM14 6C14 4.89543 14.8954 4 16 4C17.1046 4 18 4.89543 18 6C18 7.10457 17.1046 8 16 8C14.8954 8 14 7.10457 14 6ZM15 9.87398V11C15 11.5523 15.4477 12 16 12C16.5523 12 17 11.5523 17 11V9.87398C18.0508 9.60352 18.9346 8.91676 19.4649 8H23C24.6569 8 26 9.34315 26 11V25C26 26.6569 24.6569 28 23 28H9C7.34315 28 6 26.6569 6 25V11C6 9.34315 7.34315 8 9 8H12.5351C13.0654 8.91676 13.9492 9.60352 15 9.87398Z"
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
        d="M11 20.5C10.1716 20.5 9.5 21.1716 9.5 22C9.5 22.8284 10.1716 23.5 11 23.5H21C21.8284 23.5 22.5 22.8284 22.5 22C22.5 21.1716 21.8284 20.5 21 20.5H11Z"
        fill={fill}
      />
      <Path
        d="M9.5 16C9.5 15.1716 10.1716 14.5 11 14.5H21C21.8284 14.5 22.5 15.1716 22.5 16C22.5 16.8284 21.8284 17.5 21 17.5H11C10.1716 17.5 9.5 16.8284 9.5 16Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 1.5C13.7909 1.5 12 3.29086 12 5.5H9C5.96243 5.5 3.5 7.96243 3.5 11V25C3.5 28.0376 5.96243 30.5 9 30.5H23C26.0376 30.5 28.5 28.0376 28.5 25V11C28.5 7.96244 26.0376 5.5 23 5.5H20C20 3.29086 18.2091 1.5 16 1.5ZM15 5.5C15 4.94772 15.4477 4.5 16 4.5C16.5523 4.5 17 4.94772 17 5.5C17 6.05228 16.5523 6.5 16 6.5C15.4477 6.5 15 6.05228 15 5.5ZM18.6458 8.5C18.3094 8.79693 17.9226 9.03816 17.5 9.20924V11C17.5 11.8284 16.8284 12.5 16 12.5C15.1716 12.5 14.5 11.8284 14.5 11V9.20924C14.0774 9.03816 13.6906 8.79693 13.3542 8.5H9C7.61929 8.5 6.5 9.61929 6.5 11V25C6.5 26.3807 7.61929 27.5 9 27.5H23C24.3807 27.5 25.5 26.3807 25.5 25V11C25.5 9.61929 24.3807 8.5 23 8.5H18.6458Z"
        fill={fill}
      />
    </Svg>
  );
};

QuickTaskOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

QuickTaskOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

QuickTaskOutlined.displayName = "QuickTaskOutlined";

export default QuickTaskOutlined;
