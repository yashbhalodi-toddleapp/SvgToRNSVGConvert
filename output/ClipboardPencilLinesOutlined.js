import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ClipboardPencilLinesOutlined = (props) => {
  const { size, weight, fill } = props;
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
        d="M8.17071 6H8C6.34315 6 5 7.34315 5 9V25C5 26.6569 6.34315 28 8 28H13C13.5523 28 14 28.4477 14 29C14 29.5523 13.5523 30 13 30H8C5.23858 30 3 27.7614 3 25V9C3 6.23858 5.23858 4 8 4H8.17071C8.58254 2.83481 9.69378 2 11 2H19C20.3062 2 21.4175 2.83481 21.8293 4H22C24.7614 4 27 6.23858 27 9V13C27 13.5523 26.5523 14 26 14C25.4477 14 25 13.5523 25 13V9C25 7.34315 23.6569 6 22 6H21.8293C21.4175 7.16519 20.3062 8 19 8H11C9.69378 8 8.58254 7.16519 8.17071 6ZM20 5C20 4.44772 19.5523 4 19 4H11C10.4477 4 10 4.44772 10 5C10 5.55228 10.4477 6 11 6H19C19.5523 6 20 5.55228 20 5Z"
        fill={fill}
      />
      <Path
        d="M10 12C10 11.4477 10.4477 11 11 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H11C10.4477 13 10 12.5523 10 12Z"
        fill={fill}
      />
      <Path
        d="M11 15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H19C19.5523 17 20 16.5523 20 16C20 15.4477 19.5523 15 19 15H11Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4737 25.5791C15.4737 25.3138 15.5791 25.0595 15.7666 24.8719L23.8719 16.7667C25.0763 15.5623 27.029 15.5623 28.2335 16.7667C29.4379 17.9711 29.4379 19.9238 28.2335 21.1283L20.1282 29.2335C19.9407 29.4211 19.6863 29.5264 19.4211 29.5264H16.4737C15.9214 29.5264 15.4737 29.0787 15.4737 28.5264L15.4737 25.5791ZM17.4737 25.9933V27.5264H19.0069L24.0595 22.4738L22.5264 20.9406L17.4737 25.9933ZM23.9406 19.5264L25.4737 21.0596L26.8192 19.714C27.2426 19.2907 27.2426 18.6043 26.8192 18.1809C26.3959 17.7575 25.7095 17.7575 25.2861 18.1809L23.9406 19.5264Z"
        fill={fill}
      />
    </Svg>
  );
};

ClipboardPencilLinesOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

ClipboardPencilLinesOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ClipboardPencilLinesOutlined.displayName = "ClipboardPencilLinesOutlined";

export default ClipboardPencilLinesOutlined;
