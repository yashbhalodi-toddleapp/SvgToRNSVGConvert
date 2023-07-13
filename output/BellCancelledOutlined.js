import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const BellCancelledOutlined = (props) => {
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
          d="M6.75854 9.17275C6.26977 10.3517 6 11.6443 6 13V23H5C4.44772 23 4 23.4477 4 24C4 24.5523 4.44772 25 5 25H11.1009C11.5668 27.2765 13.59 29 16 29C18.41 29 20.4332 27.2765 20.8991 25H22.5858L25.2852 27.6994C25.6757 28.0899 26.3089 28.0899 26.6994 27.6994C27.0899 27.3088 27.0899 26.6757 26.6994 26.2851L4.70711 4.29289C4.31658 3.90237 3.68342 3.90237 3.29289 4.29289C2.90237 4.68342 2.90237 5.31658 3.29289 5.70711L6.75854 9.17275ZM8.32416 10.7384C8.1132 11.4555 8 12.2145 8 13V23H20.5858L8.32416 10.7384ZM24 19.8787V13C24 8.58172 20.4183 5 16 5C14.0764 5 12.3114 5.6789 10.9315 6.81017L9.51172 5.39039C11.2582 3.89987 13.524 3 16 3C21.5228 3 26 7.47715 26 13V21.8787L24 19.8787ZM13.173 25C13.5879 26.1612 14.7023 27 16 27C17.2977 27 18.4121 26.1612 18.827 25H13.173Z"
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
        d="M6.17273 9.29404C5.73793 10.4464 5.50002 11.6954 5.50002 13V22.5H5.00002C4.17159 22.5 3.50002 23.1716 3.50002 24C3.50002 24.8284 4.17159 25.5 5.00002 25.5H10.7086C11.3646 27.8038 13.4912 29.5 16 29.5C18.5088 29.5 20.6355 27.8038 21.2914 25.5H22.3787L24.9316 28.0529C25.5174 28.6387 26.4671 28.6387 27.0529 28.0529C27.6387 27.4671 27.6387 26.5174 27.0529 25.9316L5.06066 3.93934C4.47487 3.35355 3.52513 3.35355 2.93934 3.93934C2.35355 4.52513 2.35355 5.47487 2.93934 6.06066L6.17273 9.29404ZM8.60733 11.7286C8.53677 12.1419 8.50002 12.5666 8.50002 13V22.5H19.3787L8.60733 11.7286ZM14.0055 25.5C14.4635 26.1057 15.1893 26.5 16 26.5C16.8108 26.5 17.5366 26.1057 17.9945 25.5H14.0055Z"
        fill={fill}
      />
      <Path
        d="M23.5 19.3787V13C23.5 8.85786 20.1422 5.5 16 5.5C14.2146 5.5 12.5748 6.1239 11.2869 7.16558L9.15713 5.03578C10.9949 3.45528 13.3859 2.5 16 2.5C21.799 2.5 26.5 7.20101 26.5 13V22.3787L23.5 19.3787Z"
        fill={fill}
      />
    </Svg>
  );
};

BellCancelledOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

BellCancelledOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

BellCancelledOutlined.displayName = "BellCancelledOutlined";

export default BellCancelledOutlined;
