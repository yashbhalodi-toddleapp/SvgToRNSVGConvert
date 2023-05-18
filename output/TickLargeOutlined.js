import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const TickLargeOutlined = (props) => {
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
          d="M28.7071 7.29289C29.0976 7.68342 29.0976 8.31658 28.7071 8.70711L12.7071 24.7071C12.3166 25.0976 11.6834 25.0976 11.2929 24.7071L3.29289 16.7071C2.90237 16.3166 2.90237 15.6834 3.29289 15.2929C3.68342 14.9024 4.31658 14.9024 4.70711 15.2929L12 22.5858L27.2929 7.29289C27.6834 6.90237 28.3166 6.90237 28.7071 7.29289Z"
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
        d="M29.0607 6.93934C29.6464 7.52513 29.6464 8.47487 29.0607 9.06066L13.0607 25.0607C12.4749 25.6464 11.5251 25.6464 10.9393 25.0607L2.93934 17.0607C2.35355 16.4749 2.35355 15.5251 2.93934 14.9393C3.52513 14.3536 4.47487 14.3536 5.06066 14.9393L12 21.8787L26.9393 6.93934C27.5251 6.35355 28.4749 6.35355 29.0607 6.93934Z"
        fill={fill}
      />
    </Svg>
  );
};

TickLargeOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

TickLargeOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

TickLargeOutlined.displayName = "TickLargeOutlined";

export default TickLargeOutlined;
