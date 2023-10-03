import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const NoteOutlined = (props) => {
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
        d="M9 10C9 9.44772 9.44772 9 10 9H22C22.5523 9 23 9.44772 23 10C23 10.5523 22.5523 11 22 11H10C9.44772 11 9 10.5523 9 10Z"
        fill={fill}
      />
      <Path
        d="M10 14C9.44772 14 9 14.4477 9 15C9 15.5523 9.44772 16 10 16H18C18.5523 16 19 15.5523 19 15C19 14.4477 18.5523 14 18 14H10Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 8C29 5.23858 26.7614 3 24 3H8C5.23858 3 3 5.23858 3 8V24C3 26.7614 5.23858 29 8 29L20 29C20.0166 29 20.0331 28.9996 20.0496 28.9988C20.2968 28.9865 20.5313 28.8829 20.7071 28.7071L28.7071 20.7071C28.8946 20.5196 29 20.2652 29 20L29 8ZM5 24C5 25.6569 6.34315 27 8 27L19 27V22C19 20.3431 20.3431 19 22 19L27 19L27 8C27 6.34315 25.6569 5 24 5L8 5C6.34315 5 5 6.34315 5 8L5 24ZM25.5858 21H22C21.4477 21 21 21.4477 21 22V25.5858L25.5858 21Z"
        fill={fill}
      />
    </Svg>
  );
};

NoteOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

NoteOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

NoteOutlined.displayName = "NoteOutlined";

export default NoteOutlined;
