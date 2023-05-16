import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const Print = (props) => {
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
          d="M23 3H9C7.89543 3 7 3.89543 7 5V11H25V5C25 3.89543 24.1046 3 23 3Z"
          stroke={fill}
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M23 29H9C7.89543 29 7 28.1046 7 27V19C7 17.8954 7.89543 17 9 17H23C24.1046 17 25 17.8954 25 19V27C25 28.1046 24.1046 29 23 29Z"
          stroke={fill}
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 22H5C3.34315 22 2 20.6569 2 19V13C2 11.3431 3.34315 10 5 10H27C28.6569 10 30 11.3431 30 13V19C30 20.6569 28.6569 22 27 22H25V20H27C27.5523 20 28 19.5523 28 19V13C28 12.4477 27.5523 12 27 12H5C4.44772 12 4 12.4477 4 13V19C4 19.5523 4.44772 20 5 20H7V22Z"
          fill={fill}
        />
        <Path
          d="M12 21H20"
          stroke={fill}
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 25H20"
          stroke={fill}
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
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
        d="M23 3H9C7.89543 3 7 3.89543 7 5V11H25V5C25 3.89543 24.1046 3 23 3Z"
        stroke={fill}
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23 29H9C7.89543 29 7 28.1046 7 27V19C7 17.8954 7.89543 17 9 17H23C24.1046 17 25 17.8954 25 19V27C25 28.1046 24.1046 29 23 29Z"
        stroke={fill}
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 22.5H5C3.067 22.5 1.5 20.933 1.5 19V13C1.5 11.067 3.067 9.5 5 9.5H27C28.933 9.5 30.5 11.067 30.5 13V19C30.5 20.933 28.933 22.5 27 22.5H25V19.5H27C27.2761 19.5 27.5 19.2761 27.5 19V13C27.5 12.7239 27.2761 12.5 27 12.5H5C4.72386 12.5 4.5 12.7239 4.5 13V19C4.5 19.2761 4.72386 19.5 5 19.5H7V22.5Z"
        fill={fill}
      />
      <Path
        d="M12 21H20"
        stroke={fill}
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 25H20"
        stroke={fill}
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
Print.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
Print.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default Print;
