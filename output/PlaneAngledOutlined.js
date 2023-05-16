import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const PlaneAngledOutlined = (props) => {
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
          d="M6.30328 7L12.5995 13.7367L24.2679 7L6.30328 7ZM25.2678 8.73205L13.5995 15.4688L16.2856 24.2898L25.2678 8.73205ZM11.5224 15.5133L3.26931 6.68282C2.99733 6.39181 2.92399 5.96714 3.08262 5.60177C3.24124 5.23639 3.60158 5 3.9999 5L27.9999 5C28.3572 5 28.6873 5.1906 28.8659 5.5C29.0446 5.8094 29.0446 6.1906 28.8659 6.5L16.8659 27.2846C16.6668 27.6296 16.2819 27.8234 15.8861 27.7781C15.4904 27.7328 15.1593 27.4569 15.0433 27.0759L11.5224 15.5133Z"
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
        d="M7.4551 7.5L12.6937 13.1051L22.402 7.5L7.4551 7.5ZM23.902 10.0981L14.1937 15.7031L16.4285 23.0424L23.902 10.0981ZM11.078 15.7699L2.90415 7.02423C2.49618 6.58772 2.38617 5.95071 2.62411 5.40265C2.86205 4.85459 3.40255 4.5 4.00003 4.5L28 4.5C28.5359 4.5 29.0311 4.7859 29.2991 5.25C29.567 5.7141 29.567 6.2859 29.2991 6.75L17.2991 27.5346C17.0003 28.052 16.423 28.3428 15.8294 28.2749C15.2358 28.2069 14.7391 27.7931 14.5651 27.2215L11.078 15.7699Z"
        fill={fill}
      />
    </Svg>
  );
};

PlaneAngledOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

PlaneAngledOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default PlaneAngledOutlined;
