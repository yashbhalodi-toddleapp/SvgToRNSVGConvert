import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const StudentAddOutlined = (props) => {
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
          d="M8.99993 10C8.99993 8.04131 9.8044 6.27052 11.1009 5H6.99993V8C6.99993 8.55228 6.55222 9 5.99993 9C5.44765 9 4.99993 8.55228 4.99993 8V5C4.44765 5 3.99993 4.55228 3.99993 4C3.99993 3.44772 4.44765 3 4.99993 3H24.9999C25.5522 3 25.9999 3.44772 25.9999 4C25.9999 4.55228 25.5522 5 24.9999 5H20.8989C22.1955 6.27052 22.9999 8.04131 22.9999 10C22.9999 13.866 19.8659 17 15.9999 17L15.9953 17C11.1846 17.002 7.09351 20.0927 5.60238 24.3996C5.37274 25.0629 5.53927 25.6694 5.972 26.1495C6.42281 26.6497 7.16423 27 7.99992 27H15.9999C16.5522 27 16.9999 27.4477 16.9999 28C16.9999 28.5523 16.5522 29 15.9999 29H7.99992C6.62648 29 5.33527 28.4303 4.48642 27.4886C3.61949 26.5268 3.21933 25.1695 3.71244 23.7453C5.02917 19.9421 8.06211 16.939 11.8862 15.6643C10.137 14.3917 8.99993 12.3287 8.99993 10ZM10.9999 10C10.9999 7.23899 13.2378 5.00067 15.9987 5H16.0012C18.762 5.00067 20.9999 7.23899 20.9999 10C20.9999 12.7609 18.7622 14.9991 16.0015 15L15.9957 15C13.2362 14.9977 10.9999 12.76 10.9999 10Z"
          fill={fill}
        />
        <Path
          d="M24.9999 19C24.9999 18.4477 24.5522 18 23.9999 18C23.4476 18 22.9999 18.4477 22.9999 19V23H18.9999C18.4476 23 17.9999 23.4477 17.9999 24C17.9999 24.5523 18.4476 25 18.9999 25H22.9999V29C22.9999 29.5523 23.4476 30 23.9999 30C24.5522 30 24.9999 29.5523 24.9999 29V25H28.9999C29.5522 25 29.9999 24.5523 29.9999 24C29.9999 23.4477 29.5522 23 28.9999 23H24.9999V19Z"
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
        d="M25.4999 19C25.4999 18.1716 24.8283 17.5 23.9999 17.5C23.1715 17.5 22.4999 18.1716 22.4999 19V22.5H18.9999C18.1715 22.5 17.4999 23.1716 17.4999 24C17.4999 24.8284 18.1715 25.5 18.9999 25.5H22.4999V29C22.4999 29.8284 23.1715 30.5 23.9999 30.5C24.8283 30.5 25.4999 29.8284 25.4999 29V25.5H28.9999C29.8283 25.5 30.4999 24.8284 30.4999 24C30.4999 23.1716 29.8283 22.5 28.9999 22.5H25.4999V19Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.997 17.5C11.4052 17.5013 7.49859 20.4509 6.07485 24.5632C5.91108 25.0362 6.0192 25.4551 6.34339 25.8148C6.69467 26.2045 7.29865 26.5 7.99991 26.5L15.9999 26.5C16.8283 26.5 17.4999 27.1716 17.4999 28C17.4999 28.8284 16.8283 29.5 15.9999 29.5L7.99991 29.5C6.49203 29.5 5.06338 28.8755 4.115 27.8233C3.13953 26.7411 2.68096 25.1962 3.23995 23.5817C4.51049 19.9119 7.31994 16.959 10.8979 15.4973C9.42286 14.1277 8.49988 12.1716 8.49988 10C8.49988 8.31159 9.0578 6.75349 9.99933 5.5H7.49988L7.49988 8C7.49988 8.82843 6.82831 9.5 5.99988 9.5C5.17145 9.5 4.49988 8.82843 4.49988 8L4.49988 5.41465C3.91728 5.20873 3.49988 4.65311 3.49988 4C3.49988 3.17157 4.17145 2.5 4.99988 2.5L24.9999 2.5C25.8283 2.5 26.4999 3.17157 26.4999 4C26.4999 4.82843 25.8283 5.5 24.9999 5.5L22.0004 5.5C22.942 6.75349 23.4999 8.31159 23.4999 10C23.4999 14.1421 20.142 17.5 15.9999 17.5L15.997 17.5ZM11.4999 10C11.4999 7.51472 13.5146 5.5 15.9999 5.5C18.4852 5.5 20.4999 7.51472 20.4999 10C20.4999 12.4853 18.4852 14.5 15.9999 14.5C13.5146 14.5 11.4999 12.4853 11.4999 10Z"
        fill={fill}
      />
    </Svg>
  );
};
StudentAddOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
StudentAddOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default StudentAddOutlined;
