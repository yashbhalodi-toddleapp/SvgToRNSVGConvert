import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const PageDottedOutlined = (props) => {
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
          d="M5 13.0002V24.0002C5 26.2094 6.79086 28.0002 9 28.0002H23C25.2091 28.0002 27 26.2094 27 24.0002V13.0002"
          stroke={fill}
          strokeWidth={2}
          strokeLinejoin="round"
          strokeDasharray="2 4"
        />
        <Path
          d="M27 14.0005V11.0005L19 3.00049H9C6.79086 3.00049 5 4.79135 5 7.00049V14.0005"
          stroke={fill}
          strokeWidth={2}
          strokeLinejoin="round"
        />
        <Path
          d="M19 3.00024L27 11.0002H23C20.7909 11.0002 19 9.20938 19 7.00024V3.00024Z"
          stroke={fill}
          strokeWidth={2}
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
        d="M5 13.0002V24.0002C5 26.2094 6.79086 28.0002 9 28.0002H23C25.2091 28.0002 27 26.2094 27 24.0002V13.0002"
        stroke={fill}
        strokeWidth={3}
        strokeLinejoin="round"
        strokeDasharray="1 5"
      />
      <Path
        d="M27 14.0005V11.0005L19 3.00049H9C6.79086 3.00049 5 4.79135 5 7.00049V14.0005"
        stroke={fill}
        strokeWidth={3}
        strokeLinejoin="round"
      />
      <Path
        d="M19 3.00024L27 11.0002H23C20.7909 11.0002 19 9.20938 19 7.00024V3.00024Z"
        stroke={fill}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
PageDottedOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
PageDottedOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default PageDottedOutlined;
