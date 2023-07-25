import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const AttendanceOutlined = (props) => {
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
          d="M9.11698 12.4991L11.2227 7.87382C11.3803 7.52411 11.5829 7.30082 11.8031 7.16735C12.0224 7.03436 12.2433 7 12.422 7C12.599 7 12.8175 7.02528 13.036 7.15695C13.2547 7.28872 13.452 7.51438 13.6127 7.87454L15.7023 12.4864C15.7858 12.6846 15.808 12.8644 15.808 12.978C15.808 13.5972 15.3352 13.952 14.843 13.952C14.6935 13.952 14.5096 13.9253 14.331 13.8155C14.1509 13.7048 13.9953 13.521 13.8833 13.2413L13.6282 12.611H11.1519L10.8877 13.2527C10.7757 13.5225 10.6231 13.702 10.4485 13.8121C10.2748 13.9215 10.0957 13.952 9.947 13.952C9.70433 13.952 9.4677 13.8692 9.28975 13.7058C9.10937 13.5402 9 13.3014 9 13.014C9 12.8688 9.02396 12.716 9.11517 12.5032L9.11698 12.4991ZM11.8209 10.978L12.394 9.58951L12.9613 10.978H11.8209Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 22.888C10 23.31 10.1526 23.5888 10.3711 23.7556C10.5795 23.9148 10.8213 23.952 10.974 23.952C11.1232 23.952 11.3626 23.9144 11.5696 23.7552C11.7864 23.5884 11.939 23.31 11.939 22.888V21.459H12.504C13.1917 21.459 13.8691 21.3227 14.3806 20.9743C14.9033 20.6182 15.233 20.0533 15.233 19.252C15.233 18.4649 14.9322 17.9091 14.4228 17.5593C13.9262 17.2183 13.2559 17.09 12.54 17.09H11.082C10.7536 17.09 10.4712 17.1657 10.2735 17.3634C10.0757 17.5612 10 17.8435 10 18.172V22.888ZM13.294 19.261C13.294 19.4897 13.2005 19.6178 13.0566 19.7009C12.8966 19.7931 12.6615 19.835 12.387 19.835H11.939V18.732H12.414C12.6822 18.732 12.9107 18.762 13.0669 18.844C13.141 18.883 13.1947 18.9315 13.2311 18.992C13.2675 19.0525 13.294 19.1375 13.294 19.261Z"
          fill={fill}
        />
        <Path
          d="M17 11C17 10.4477 17.4477 10 18 10L22 10C22.5523 10 23 10.4477 23 11C23 11.5523 22.5523 12 22 12H18C17.4477 12 17 11.5523 17 11Z"
          fill={fill}
        />
        <Path
          d="M18 20C17.4477 20 17 20.4477 17 21C17 21.5523 17.4477 22 18 22H22C22.5523 22 23 21.5523 23 21C23 20.4477 22.5523 20 22 20H18Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 7C4 4.23858 6.23858 2 9 2H23C25.7614 2 28 4.23858 28 7V25C28 27.7614 25.7614 30 23 30H9C6.23858 30 4 27.7614 4 25V7ZM9 4C7.34315 4 6 5.34315 6 7V25C6 26.6569 7.34315 28 9 28H23C24.6569 28 26 26.6569 26 25V7C26 5.34315 24.6569 4 23 4H9Z"
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
        d="M9.11698 12.4991L11.2227 7.87382C11.3803 7.52411 11.5829 7.30082 11.8031 7.16735C12.0224 7.03436 12.2433 7 12.422 7C12.599 7 12.8175 7.02528 13.036 7.15695C13.2547 7.28872 13.452 7.51438 13.6127 7.87454L15.7023 12.4864C15.7858 12.6846 15.808 12.8644 15.808 12.978C15.808 13.5972 15.3352 13.952 14.843 13.952C14.6935 13.952 14.5096 13.9253 14.331 13.8155C14.1509 13.7048 13.9953 13.521 13.8833 13.2413L13.6282 12.611H11.1519L10.8877 13.2527C10.7757 13.5225 10.6231 13.702 10.4485 13.8121C10.2748 13.9215 10.0957 13.952 9.947 13.952C9.70433 13.952 9.4677 13.8692 9.28975 13.7058C9.10937 13.5402 9 13.3014 9 13.014C9 12.8688 9.02396 12.716 9.11517 12.5032L9.11698 12.4991ZM11.8209 10.978L12.394 9.58951L12.9613 10.978H11.8209Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 22.8878C10 23.3099 10.1526 23.5886 10.3711 23.7555C10.5795 23.9147 10.8213 23.9518 10.974 23.9518C11.1232 23.9518 11.3626 23.9143 11.5696 23.7551C11.7864 23.5883 11.939 23.3099 11.939 22.8878V21.4588H12.504C13.1917 21.4588 13.8691 21.3226 14.3806 20.9741C14.9033 20.6181 15.233 20.0532 15.233 19.2518C15.233 18.4648 14.9322 17.909 14.4228 17.5592C13.9262 17.2182 13.2559 17.0898 12.54 17.0898H11.082C10.7536 17.0898 10.4712 17.1655 10.2735 17.3633C10.0757 17.5611 10 17.8434 10 18.1718V22.8878ZM13.294 19.2608C13.294 19.4896 13.2005 19.6177 13.0566 19.7007C12.8966 19.793 12.6615 19.8348 12.387 19.8348H11.939V18.7318H12.414C12.6822 18.7318 12.9107 18.7619 13.0669 18.8439C13.141 18.8828 13.1947 18.9314 13.2311 18.9918C13.2675 19.0524 13.294 19.1374 13.294 19.2608Z"
        fill={fill}
      />
      <Path
        d="M16.5 11C16.5 10.1716 17.1716 9.5 18 9.5L22 9.5C22.8284 9.5 23.5 10.1716 23.5 11C23.5 11.8284 22.8284 12.5 22 12.5L18 12.5C17.1716 12.5 16.5 11.8284 16.5 11Z"
        fill={fill}
      />
      <Path
        d="M18 19.5C17.1716 19.5 16.5 20.1716 16.5 21C16.5 21.8284 17.1716 22.5 18 22.5H22C22.8284 22.5 23.5 21.8284 23.5 21C23.5 20.1716 22.8284 19.5 22 19.5H18Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 7C3.5 3.96243 5.96243 1.5 9 1.5H23C26.0376 1.5 28.5 3.96243 28.5 7V25C28.5 28.0376 26.0376 30.5 23 30.5H9C5.96243 30.5 3.5 28.0376 3.5 25V7ZM9 4.5C7.61929 4.5 6.5 5.61929 6.5 7V25C6.5 26.3807 7.61929 27.5 9 27.5H23C24.3807 27.5 25.5 26.3807 25.5 25V7C25.5 5.61929 24.3807 4.5 23 4.5H9Z"
        fill={fill}
      />
    </Svg>
  );
};

AttendanceOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

AttendanceOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

AttendanceOutlined.displayName = "AttendanceOutlined";

export default AttendanceOutlined;
