import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const AddOutlined = (props) => {
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
          d="M17 4C17 3.44772 16.5523 3 16 3C15.4477 3 15 3.44772 15 4V15H4C3.44772 15 3 15.4477 3 16C3 16.5523 3.44772 17 4 17H15V28C15 28.5523 15.4477 29 16 29C16.5523 29 17 28.5523 17 28V17H28C28.5523 17 29 16.5523 29 16C29 15.4477 28.5523 15 28 15H17V4Z"
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 4.5C17.5 3.67157 16.8284 3 16 3C15.1716 3 14.5 3.67157 14.5 4.5V14.5H4.5C3.67157 14.5 3 15.1716 3 16C3 16.8284 3.67157 17.5 4.5 17.5H14.5V27.5C14.5 28.3284 15.1716 29 16 29C16.8284 29 17.5 28.3284 17.5 27.5V17.5H27.5C28.3284 17.5 29 16.8284 29 16C29 15.1716 28.3284 14.5 27.5 14.5H17.5V4.5Z"
        fill={fill}
      />
    </Svg>
  );
};

AddOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

AddOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default AddOutlined;
