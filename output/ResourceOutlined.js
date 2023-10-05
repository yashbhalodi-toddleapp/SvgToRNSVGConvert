import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ResourceOutlined = (props) => {
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
          d="M12 15C12 14.4477 12.4477 14 13 14H19C19.5523 14 20 14.4477 20 15C20 15.5523 19.5523 16 19 16H13C12.4477 16 12 15.5523 12 15Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28 10.8293C29.1652 10.4175 30 9.30622 30 8V6C30 4.34315 28.6569 3 27 3H5C3.34315 3 2 4.34315 2 6V8C2 9.30622 2.83481 10.4175 4 10.8293V24C4 26.7614 6.23858 29 9 29H23C25.7614 29 28 26.7614 28 24V10.8293ZM4 8C4 8.55228 4.44772 9 5 9H27C27.5523 9 28 8.55229 28 8V6C28 5.44771 27.5523 5 27 5H5C4.44772 5 4 5.44771 4 6V8ZM26 11H6V24C6 25.6569 7.34315 27 9 27H23C24.6569 27 26 25.6569 26 24V11Z"
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
        d="M11.5 15C11.5 14.1716 12.1716 13.5 13 13.5H19C19.8284 13.5 20.5 14.1716 20.5 15C20.5 15.8284 19.8284 16.5 19 16.5H13C12.1716 16.5 11.5 15.8284 11.5 15Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.5 11.1632C29.6825 10.6015 30.5 9.3962 30.5 8V6C30.5 4.067 28.933 2.5 27 2.5H5C3.067 2.5 1.5 4.067 1.5 6V8C1.5 9.3962 2.31753 10.6015 3.5 11.1632V24C3.5 27.0376 5.96243 29.5 9 29.5H23C26.0376 29.5 28.5 27.0376 28.5 24V11.1632ZM4.5 8C4.5 8.27614 4.72386 8.5 5 8.5H27C27.2761 8.5 27.5 8.27614 27.5 8V6C27.5 5.72386 27.2761 5.5 27 5.5H5C4.72386 5.5 4.5 5.72386 4.5 6V8ZM25.5 11.5H6.5V24C6.5 25.3807 7.61929 26.5 9 26.5H23C24.3807 26.5 25.5 25.3807 25.5 24V11.5Z"
        fill={fill}
      />
    </Svg>
  );
};

ResourceOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ResourceOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ResourceOutlined.displayName = "ResourceOutlined";

export default ResourceOutlined;
