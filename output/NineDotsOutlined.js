import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const NineDotsOutlined = (props) => {
  const { size, weight } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M26 28.5C24.6193 28.5 23.5 27.3807 23.5 26C23.5 24.6193 24.6193 23.5 26 23.5C27.3807 23.5 28.5 24.6193 28.5 26C28.5 27.3807 27.3807 28.5 26 28.5Z"
        fill={fill}
      />
      <Path
        d="M13.5 26C13.5 27.3807 14.6193 28.5 16 28.5C17.3807 28.5 18.5 27.3807 18.5 26C18.5 24.6193 17.3807 23.5 16 23.5C14.6193 23.5 13.5 24.6193 13.5 26Z"
        fill={fill}
      />
      <Path
        d="M3.5 26C3.5 27.3807 4.61928 28.5 5.99999 28.5C7.3807 28.5 8.5 27.3807 8.5 26C8.5 24.6193 7.3807 23.5 5.99999 23.5C4.61928 23.5 3.5 24.6193 3.5 26Z"
        fill={fill}
      />
      <Path
        d="M3.5 6.00001C3.5 7.38072 4.61928 8.50002 5.99999 8.50002C7.3807 8.50002 8.5 7.38072 8.5 6.00001C8.5 4.6193 7.3807 3.5 5.99999 3.5C4.61928 3.5 3.5 4.6193 3.5 6.00001Z"
        fill={fill}
      />
      <Path
        d="M16 8.50002C14.6193 8.50002 13.5 7.38072 13.5 6.00001C13.5 4.6193 14.6193 3.5 16 3.5C17.3807 3.5 18.5 4.6193 18.5 6.00001C18.5 7.38072 17.3807 8.50002 16 8.50002Z"
        fill={fill}
      />
      <Path
        d="M23.5 6.00001C23.5 7.38072 24.6193 8.50002 26 8.50002C27.3807 8.50002 28.5 7.38072 28.5 6.00001C28.5 4.6193 27.3807 3.5 26 3.5C24.6193 3.5 23.5 4.6193 23.5 6.00001Z"
        fill={fill}
      />
      <Path
        d="M5.99999 18.5C4.61928 18.5 3.5 17.3807 3.5 16C3.5 14.6193 4.61928 13.5 5.99999 13.5C7.3807 13.5 8.5 14.6193 8.5 16C8.5 17.3807 7.3807 18.5 5.99999 18.5Z"
        fill={fill}
      />
      <Path
        d="M13.5 16C13.5 17.3807 14.6193 18.5 16 18.5C17.3807 18.5 18.5 17.3807 18.5 16C18.5 14.6193 17.3807 13.5 16 13.5C14.6193 13.5 13.5 14.6193 13.5 16Z"
        fill={fill}
      />
      <Path
        d="M26 18.5C24.6193 18.5 23.5 17.3807 23.5 16C23.5 14.6193 24.6193 13.5 26 13.5C27.3807 13.5 28.5 14.6193 28.5 16C28.5 17.3807 27.3807 18.5 26 18.5Z"
        fill={fill}
      />
    </Svg>
  );
};
NineDotsOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
NineDotsOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default NineDotsOutlined;
