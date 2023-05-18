import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const TickSmallOutlined = (props) => {
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
          d="M24.7071 10.2929C25.0976 10.6834 25.0976 11.3166 24.7071 11.7071L14.7071 21.7071C14.3166 22.0976 13.6834 22.0976 13.2929 21.7071L8.29289 16.7071C7.90237 16.3166 7.90237 15.6834 8.29289 15.2929C8.68342 14.9024 9.31658 14.9024 9.70711 15.2929L14 19.5858L23.2929 10.2929C23.6834 9.90237 24.3166 9.90237 24.7071 10.2929Z"
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
        d="M24.0607 9.93934C24.6464 10.5251 24.6464 11.4749 24.0607 12.0607L14.0607 22.0607C13.4749 22.6464 12.5251 22.6464 11.9393 22.0607L6.93934 17.0607C6.35355 16.4749 6.35355 15.5251 6.93934 14.9393C7.52513 14.3536 8.47487 14.3536 9.06066 14.9393L13 18.8787L21.9393 9.93934C22.5251 9.35355 23.4749 9.35355 24.0607 9.93934Z"
        fill={fill}
      />
    </Svg>
  );
};

TickSmallOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

TickSmallOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

TickSmallOutlined.displayName = "TickSmallOutlined";

export default TickSmallOutlined;
