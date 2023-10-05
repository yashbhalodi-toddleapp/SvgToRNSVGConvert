import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const WorksheetClipboardOutlined = (props) => {
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
          d="M11 15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15C9 14.4477 9.44772 14 10 14C10.5523 14 11 14.4477 11 15Z"
          fill={fill}
        />
        <Path
          d="M14 14C13.4477 14 13 14.4477 13 15C13 15.5523 13.4477 16 14 16H22C22.5523 16 23 15.5523 23 15C23 14.4477 22.5523 14 22 14H14Z"
          fill={fill}
        />
        <Path
          d="M11 20C11 20.5523 10.5523 21 10 21C9.44772 21 9 20.5523 9 20C9 19.4477 9.44772 19 10 19C10.5523 19 11 19.4477 11 20Z"
          fill={fill}
        />
        <Path
          d="M14 19C13.4477 19 13 19.4477 13 20C13 20.5523 13.4477 21 14 21H22C22.5523 21 23 20.5523 23 20C23 19.4477 22.5523 19 22 19H14Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.8293 4H23C25.7614 4 28 6.23858 28 9V25C28 27.7614 25.7614 30 23 30H9C6.23858 30 4 27.7614 4 25V9C4 6.23858 6.23857 4 9 4H9.17071C9.58254 2.83481 10.6938 2 12 2H20C21.3062 2 22.4175 2.83481 22.8293 4ZM9.17071 6H9C7.34315 6 6 7.34315 6 9V25C6 26.6569 7.34315 28 9 28H23C24.6569 28 26 26.6569 26 25V9C26 7.34315 24.6569 6 23 6H22.8293C22.4175 7.16519 21.3062 8 20 8H12C10.6938 8 9.58254 7.16519 9.17071 6ZM11 5C11 4.44772 11.4477 4 12 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H12C11.4477 6 11 5.55228 11 5Z"
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
        d="M11.5 15C11.5 15.8284 10.8284 16.5 10 16.5C9.17157 16.5 8.5 15.8284 8.5 15C8.5 14.1716 9.17157 13.5 10 13.5C10.8284 13.5 11.5 14.1716 11.5 15Z"
        fill={fill}
      />
      <Path
        d="M14 13.5C13.1716 13.5 12.5 14.1716 12.5 15C12.5 15.8284 13.1716 16.5 14 16.5H22C22.8284 16.5 23.5 15.8284 23.5 15C23.5 14.1716 22.8284 13.5 22 13.5H14Z"
        fill={fill}
      />
      <Path
        d="M11.5 20C11.5 20.8284 10.8284 21.5 10 21.5C9.17157 21.5 8.5 20.8284 8.5 20C8.5 19.1716 9.17157 18.5 10 18.5C10.8284 18.5 11.5 19.1716 11.5 20Z"
        fill={fill}
      />
      <Path
        d="M14 18.5C13.1716 18.5 12.5 19.1716 12.5 20C12.5 20.8284 13.1716 21.5 14 21.5H22C22.8284 21.5 23.5 20.8284 23.5 20C23.5 19.1716 22.8284 18.5 22 18.5H14Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.1643 3.50241C26.1259 3.58931 28.5 6.0174 28.5 9V25C28.5 28.0376 26.0376 30.5 23 30.5H9C5.96243 30.5 3.5 28.0376 3.5 25V9C3.5 6.0174 5.87412 3.58931 8.83567 3.50241C9.39691 2.31864 10.6029 1.5 12 1.5H20C21.3971 1.5 22.6031 2.31864 23.1643 3.50241ZM8.83924 6.50509C7.53344 6.58796 6.5 7.67329 6.5 9V25C6.5 26.3807 7.61929 27.5 9 27.5H23C24.3807 27.5 25.5 26.3807 25.5 25V9C25.5 7.67329 24.4666 6.58796 23.1608 6.50509C22.598 7.68482 21.3942 8.5 20 8.5H12C10.6058 8.5 9.40201 7.68482 8.83924 6.50509ZM20 4.5C20.2761 4.5 20.5 4.72386 20.5 5C20.5 5.27614 20.2761 5.5 20 5.5H12C11.7239 5.5 11.5 5.27614 11.5 5C11.5 4.72386 11.7239 4.5 12 4.5H20Z"
        fill={fill}
      />
    </Svg>
  );
};

WorksheetClipboardOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

WorksheetClipboardOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

WorksheetClipboardOutlined.displayName = "WorksheetClipboardOutlined";

export default WorksheetClipboardOutlined;
