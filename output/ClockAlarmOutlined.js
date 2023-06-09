import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ClockAlarmOutlined = (props) => {
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
          d="M7.70711 2.29289C8.09763 2.68342 8.09763 3.31658 7.70711 3.70711L3.70711 7.70711C3.31658 8.09763 2.68342 8.09763 2.29289 7.70711C1.90237 7.31658 1.90237 6.68342 2.29289 6.29289L6.29289 2.29289C6.68342 1.90237 7.31658 1.90237 7.70711 2.29289Z"
          fill={fill}
        />
        <Path
          d="M16.9999 11C16.9999 10.4477 16.5522 10 15.9999 10C15.4477 10 14.9999 10.4477 14.9999 11V16H11.9999C11.4477 16 10.9999 16.4477 10.9999 17C10.9999 17.5523 11.4477 18 11.9999 18H15.9999C16.5522 18 16.9999 17.5523 16.9999 17V11Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 4C8.8203 4 3 9.8203 3 17C3 24.1797 8.8203 30 16 30C23.1797 30 29 24.1797 29 17C29 9.8203 23.1797 4 16 4ZM5 17C5 10.9249 9.92487 6 16 6C22.0751 6 27 10.9249 27 17C27 23.0751 22.0751 28 16 28C9.92487 28 5 23.0751 5 17Z"
          fill={fill}
        />
        <Path
          d="M24.2929 3.70711C23.9024 3.31658 23.9024 2.68342 24.2929 2.29289C24.6834 1.90237 25.3166 1.90237 25.7071 2.29289L29.7071 6.29289C30.0976 6.68342 30.0976 7.31658 29.7071 7.70711C29.3166 8.09763 28.6834 8.09763 28.2929 7.70711L24.2929 3.70711Z"
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
        d="M8.06066 1.93934C8.64645 2.52513 8.64645 3.47487 8.06066 4.06066L4.06066 8.06066C3.47487 8.64645 2.52513 8.64645 1.93934 8.06066C1.35355 7.47487 1.35355 6.52513 1.93934 5.93934L5.93934 1.93934C6.52513 1.35355 7.47487 1.35355 8.06066 1.93934Z"
        fill={fill}
      />
      <Path
        d="M18.5 13C18.5 12.1716 17.8284 11.5 17 11.5C16.1716 11.5 15.5 12.1716 15.5 13V17.5H13C12.1716 17.5 11.5 18.1716 11.5 19C11.5 19.8284 12.1716 20.5 13 20.5H17C17.8284 20.5 18.5 19.8284 18.5 19V13Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3.5C8.54416 3.5 2.5 9.54416 2.5 17C2.5 24.4558 8.54416 30.5 16 30.5C23.4558 30.5 29.5 24.4558 29.5 17C29.5 9.54416 23.4558 3.5 16 3.5ZM5.5 17C5.5 11.201 10.201 6.5 16 6.5C21.799 6.5 26.5 11.201 26.5 17C26.5 22.799 21.799 27.5 16 27.5C10.201 27.5 5.5 22.799 5.5 17Z"
        fill={fill}
      />
      <Path
        d="M23.9393 4.06066C23.3536 3.47487 23.3536 2.52513 23.9393 1.93934C24.5251 1.35355 25.4749 1.35355 26.0607 1.93934L30.0607 5.93934C30.6464 6.52513 30.6464 7.47487 30.0607 8.06066C29.4749 8.64645 28.5251 8.64645 27.9393 8.06066L23.9393 4.06066Z"
        fill={fill}
      />
    </Svg>
  );
};

ClockAlarmOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ClockAlarmOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ClockAlarmOutlined.displayName = "ClockAlarmOutlined";

export default ClockAlarmOutlined;
