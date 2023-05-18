import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ChevronRightOutlined = (props) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289L21.7071 15.2929C22.0976 15.6834 22.0976 16.3166 21.7071 16.7071L11.7071 26.7071C11.3166 27.0976 10.6834 27.0976 10.2929 26.7071C9.90237 26.3166 9.90237 25.6834 10.2929 25.2929L19.5858 16L10.2929 6.70711C9.90237 6.31658 9.90237 5.68342 10.2929 5.29289Z"
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
        d="M9.43934 4.93934C10.0251 4.35355 10.9749 4.35355 11.5607 4.93934L21.5607 14.9393C22.1464 15.5251 22.1464 16.4749 21.5607 17.0607L11.5607 27.0607C10.9749 27.6464 10.0251 27.6464 9.43934 27.0607C8.85355 26.4749 8.85355 25.5251 9.43934 24.9393L18.3787 16L9.43934 7.06066C8.85355 6.47487 8.85355 5.52513 9.43934 4.93934Z"
        fill={fill}
      />
    </Svg>
  );
};

ChevronRightOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ChevronRightOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ChevronRightOutlined.displayName = "ChevronRightOutlined";

export default ChevronRightOutlined;
