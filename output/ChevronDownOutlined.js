import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ChevronDownOutlined = (props) => {
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
          d="M5.29289 10.2929C5.68342 9.90237 6.31658 9.90237 6.70711 10.2929L16 19.5858L25.2929 10.2929C25.6834 9.90237 26.3166 9.90237 26.7071 10.2929C27.0976 10.6834 27.0976 11.3166 26.7071 11.7071L16.7071 21.7071C16.3166 22.0976 15.6834 22.0976 15.2929 21.7071L5.29289 11.7071C4.90237 11.3166 4.90237 10.6834 5.29289 10.2929Z"
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
        d="M4.93934 9.93934C5.52513 9.35355 6.47487 9.35355 7.06066 9.93934L16 18.8787L24.9393 9.93934C25.5251 9.35355 26.4749 9.35355 27.0607 9.93934C27.6464 10.5251 27.6464 11.4749 27.0607 12.0607L17.0607 22.0607C16.4749 22.6464 15.5251 22.6464 14.9393 22.0607L4.93934 12.0607C4.35355 11.4749 4.35355 10.5251 4.93934 9.93934Z"
        fill={fill}
      />
    </Svg>
  );
};

ChevronDownOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ChevronDownOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ChevronDownOutlined.displayName = "ChevronDownOutlined";

export default ChevronDownOutlined;
