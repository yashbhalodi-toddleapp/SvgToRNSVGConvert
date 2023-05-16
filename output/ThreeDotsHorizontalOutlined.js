import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ThreeDotsHorizontalOutlined = (props) => {
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
          d="M6.00001 18C7.10458 18 8.00001 17.1046 8.00001 16C8.00001 14.8954 7.10458 14 6.00001 14C4.89544 14 4 14.8954 4 16C4 17.1046 4.89544 18 6.00001 18Z"
          fill={fill}
        />
        <Path
          d="M26 18C27.1046 18 28 17.1046 28 16C28 14.8954 27.1046 14 26 14C24.8954 14 24 14.8954 24 16C24 17.1046 24.8954 18 26 18Z"
          fill={fill}
        />
        <Path
          d="M18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16Z"
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
        d="M26 18.5C27.3807 18.5 28.5 17.3807 28.5 16C28.5 14.6193 27.3807 13.5 26 13.5C24.6193 13.5 23.5 14.6193 23.5 16C23.5 17.3807 24.6193 18.5 26 18.5Z"
        fill={fill}
      />
      <Path
        d="M6.00001 18.5C7.38072 18.5 8.50002 17.3808 8.50002 16C8.50002 14.6193 7.38072 13.5 6.00001 13.5C4.6193 13.5 3.5 14.6193 3.5 16C3.5 17.3808 4.6193 18.5 6.00001 18.5Z"
        fill={fill}
      />
      <Path
        d="M18.5 16C18.5 17.3807 17.3807 18.5 16 18.5C14.6193 18.5 13.5 17.3807 13.5 16C13.5 14.6193 14.6193 13.5 16 13.5C17.3807 13.5 18.5 14.6193 18.5 16Z"
        fill={fill}
      />
    </Svg>
  );
};

ThreeDotsHorizontalOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ThreeDotsHorizontalOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default ThreeDotsHorizontalOutlined;
