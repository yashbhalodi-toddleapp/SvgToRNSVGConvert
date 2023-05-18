import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const CloseOutlined = (props) => {
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
          d="M24.2929 6.29289C24.6834 5.90237 25.3166 5.90237 25.7071 6.29289C26.0976 6.68342 26.0976 7.31658 25.7071 7.70711L17.4142 16L25.7071 24.2929C26.0976 24.6834 26.0976 25.3166 25.7071 25.7071C25.3166 26.0976 24.6834 26.0976 24.2929 25.7071L16 17.4142L7.70711 25.7071C7.31658 26.0976 6.68342 26.0976 6.29289 25.7071C5.90237 25.3166 5.90237 24.6834 6.29289 24.2929L14.5858 16L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L16 14.5858L24.2929 6.29289Z"
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
        d="M8.06066 5.93934C7.47487 5.35355 6.52513 5.35355 5.93934 5.93934C5.35355 6.52513 5.35355 7.47487 5.93934 8.06066L13.8787 16L5.93934 23.9393C5.35355 24.5251 5.35355 25.4749 5.93934 26.0607C6.52513 26.6464 7.47487 26.6464 8.06066 26.0607L16 18.1213L23.9393 26.0607C24.5251 26.6464 25.4749 26.6464 26.0607 26.0607C26.6464 25.4749 26.6464 24.5251 26.0607 23.9393L18.1213 16L26.0607 8.06066C26.6464 7.47487 26.6464 6.52513 26.0607 5.93934C25.4749 5.35355 24.5251 5.35355 23.9393 5.93934L16 13.8787L8.06066 5.93934Z"
        fill={fill}
      />
    </Svg>
  );
};

CloseOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

CloseOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

CloseOutlined.displayName = "CloseOutlined";

export default CloseOutlined;
