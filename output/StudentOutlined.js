import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const StudentOutlined = (props) => {
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
          d="M4.99994 3C4.44765 3 3.99994 3.44772 3.99994 4C3.99994 4.55228 4.44765 5 4.99994 5V8C4.99994 8.55228 5.44765 9 5.99994 9C6.55222 9 6.99994 8.55228 6.99994 8V5H11.101C9.80441 6.27052 8.99994 8.04131 8.99994 10C8.99994 12.3287 10.137 14.3917 11.8862 15.6643C8.06211 16.939 5.02917 19.9421 3.71244 23.7453C3.21933 25.1695 3.61949 26.5268 4.48642 27.4886C5.33527 28.4303 6.62648 29 7.99992 29H23.9999C25.3734 29 26.6646 28.4303 27.5134 27.4886C28.3804 26.5268 28.7805 25.1695 28.2874 23.7453C26.9707 19.9421 23.9377 16.939 20.1137 15.6643C21.8629 14.3917 22.9999 12.3287 22.9999 10C22.9999 8.04131 22.1955 6.27052 20.8989 5H24.9999C25.5522 5 25.9999 4.55228 25.9999 4C25.9999 3.44772 25.5522 3 24.9999 3H4.99994ZM15.9999 5C13.2385 5 10.9999 7.23858 10.9999 10C10.9999 12.7614 13.2385 15 15.9999 15C18.7614 15 20.9999 12.7614 20.9999 10C20.9999 7.23858 18.7614 5 15.9999 5ZM5.60238 24.3996C7.09398 20.0913 11.1872 17 15.9999 17C20.8126 17 24.9059 20.0913 26.3975 24.3996C26.6271 25.0629 26.4606 25.6694 26.0278 26.1495C25.577 26.6497 24.8356 27 23.9999 27H7.99992C7.16423 27 6.42281 26.6497 5.972 26.1495C5.53927 25.6694 5.37274 25.0629 5.60238 24.3996Z"
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
        d="M10.8981 15.4973C7.32006 16.959 4.51061 19.9119 3.24007 23.5817C2.68109 25.1962 3.13965 26.7411 4.11513 27.8233C5.0635 28.8755 6.49215 29.5 8.00003 29.5L24 29.5C25.5079 29.5 26.9366 28.8755 27.8849 27.8233C28.8604 26.7411 29.319 25.1962 28.76 23.5817C27.4894 19.9119 24.68 16.959 21.102 15.4973C22.577 14.1277 23.5 12.1716 23.5 10C23.5 8.31159 22.9421 6.75349 22.0006 5.5L25 5.5C25.8284 5.5 26.5 4.82843 26.5 4C26.5 3.17157 25.8284 2.5 25 2.5L5 2.5C4.17157 2.5 3.5 3.17157 3.5 4C3.5 4.65311 3.91741 5.20873 4.5 5.41465L4.5 8C4.5 8.82843 5.17157 9.5 6 9.5C6.82843 9.5 7.5 8.82843 7.5 8L7.5 5.5H9.99945C9.05792 6.75349 8.5 8.31159 8.5 10C8.5 12.1716 9.42298 14.1277 10.8981 15.4973ZM6.07497 24.5632C7.49901 20.45 11.407 17.5 16 17.5C20.5931 17.5 24.5011 20.45 25.9251 24.5632C26.0889 25.0362 25.9807 25.4551 25.6566 25.8148C25.3053 26.2045 24.7013 26.5 24 26.5H8.00003C7.29877 26.5 6.6948 26.2045 6.34351 25.8148C6.01932 25.4551 5.9112 25.0362 6.07497 24.5632ZM11.5 10C11.5 7.51472 13.5147 5.5 16 5.5C18.4853 5.5 20.5 7.51472 20.5 10C20.5 12.4853 18.4853 14.5 16 14.5C13.5147 14.5 11.5 12.4853 11.5 10Z"
        fill={fill}
      />
    </Svg>
  );
};

StudentOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

StudentOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

StudentOutlined.displayName = "StudentOutlined";

export default StudentOutlined;
