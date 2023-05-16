import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ChevronLeftOutlined = (props) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.7071 5.29289C22.0976 5.68342 22.0976 6.31658 21.7071 6.70711L12.4142 16L21.7071 25.2929C22.0976 25.6834 22.0976 26.3166 21.7071 26.7071C21.3166 27.0976 20.6834 27.0976 20.2929 26.7071L10.2929 16.7071C9.90237 16.3166 9.90237 15.6834 10.2929 15.2929L20.2929 5.29289C20.6834 4.90237 21.3166 4.90237 21.7071 5.29289Z"
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
        d="M21.5607 4.93934C22.1464 5.52513 22.1464 6.47487 21.5607 7.06066L12.6213 16L21.5607 24.9393C22.1464 25.5251 22.1464 26.4749 21.5607 27.0607C20.9749 27.6464 20.0251 27.6464 19.4393 27.0607L9.43934 17.0607C8.85355 16.4749 8.85355 15.5251 9.43934 14.9393L19.4393 4.93934C20.0251 4.35355 20.9749 4.35355 21.5607 4.93934Z"
        fill={fill}
      />
    </Svg>
  );
};

ChevronLeftOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ChevronLeftOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default ChevronLeftOutlined;
