import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const ChevronUpOutlined = (props) => {
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
          d="M15.2929 10.2929C15.6834 9.90237 16.3166 9.90237 16.7071 10.2929L26.7071 20.2929C27.0976 20.6834 27.0976 21.3166 26.7071 21.7071C26.3166 22.0976 25.6834 22.0976 25.2929 21.7071L16 12.4142L6.70711 21.7071C6.31658 22.0976 5.68342 22.0976 5.29289 21.7071C4.90237 21.3166 4.90237 20.6834 5.29289 20.2929L15.2929 10.2929Z"
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
        d="M14.9393 9.93934C15.5251 9.35355 16.4749 9.35355 17.0607 9.93934L27.0607 19.9393C27.6464 20.5251 27.6464 21.4749 27.0607 22.0607C26.4749 22.6464 25.5251 22.6464 24.9393 22.0607L16 13.1213L7.06066 22.0607C6.47487 22.6464 5.52513 22.6464 4.93934 22.0607C4.35355 21.4749 4.35355 20.5251 4.93934 19.9393L14.9393 9.93934Z"
        fill={fill}
      />
    </Svg>
  );
};
ChevronUpOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
ChevronUpOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default ChevronUpOutlined;
