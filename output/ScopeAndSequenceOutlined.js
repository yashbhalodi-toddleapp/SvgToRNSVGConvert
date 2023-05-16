import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const ScopeAndSequenceOutlined = (props) => {
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
          d="M11 15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H21C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15H11Z"
          fill={fill}
        />
        <Path
          d="M10 10C10 9.44772 10.4477 9 11 9H21C21.5523 9 22 9.44772 22 10C22 10.5523 21.5523 11 21 11H11C10.4477 11 10 10.5523 10 10Z"
          fill={fill}
        />
        <Path
          d="M11 21C10.4477 21 10 21.4477 10 22C10 22.5523 10.4477 23 11 23H21C21.5523 23 22 22.5523 22 22C22 21.4477 21.5523 21 21 21H11Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 2C25.7614 2 28 4.23858 28 7V25C28 27.7614 25.7614 30 23 30H9C6.23858 30 4 27.7614 4 25V7C4 4.23858 6.23858 2 9 2H23ZM26 7C26 5.34315 24.6569 4 23 4H9C7.34314 4 6 5.34315 6 7V25C6 26.6569 7.34314 28 9 28H23C24.6569 28 26 26.6569 26 25V7Z"
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
        d="M11 14.5C10.1716 14.5 9.5 15.1716 9.5 16C9.5 16.8284 10.1716 17.5 11 17.5H21C21.8284 17.5 22.5 16.8284 22.5 16C22.5 15.1716 21.8284 14.5 21 14.5H11Z"
        fill={fill}
      />
      <Path
        d="M9.5 10C9.5 9.17157 10.1716 8.5 11 8.5H21C21.8284 8.5 22.5 9.17157 22.5 10C22.5 10.8284 21.8284 11.5 21 11.5H11C10.1716 11.5 9.5 10.8284 9.5 10Z"
        fill={fill}
      />
      <Path
        d="M11 20.5C10.1716 20.5 9.5 21.1716 9.5 22C9.5 22.8284 10.1716 23.5 11 23.5H21C21.8284 23.5 22.5 22.8284 22.5 22C22.5 21.1716 21.8284 20.5 21 20.5H11Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 1.5C26.0376 1.5 28.5 3.96243 28.5 7V25C28.5 28.0376 26.0376 30.5 23 30.5H9C5.96243 30.5 3.5 28.0376 3.5 25V7C3.5 3.96243 5.96243 1.5 9 1.5H23ZM25.5 7C25.5 5.61929 24.3807 4.5 23 4.5H9C7.61929 4.5 6.5 5.61929 6.5 7V25C6.5 26.3807 7.61929 27.5 9 27.5H23C24.3807 27.5 25.5 26.3807 25.5 25V7Z"
        fill={fill}
      />
    </Svg>
  );
};
ScopeAndSequenceOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
ScopeAndSequenceOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default ScopeAndSequenceOutlined;
