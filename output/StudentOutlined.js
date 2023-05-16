import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const StudentOutlined = (props) => {
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
        d="M10.8979 15.4973C7.31994 16.959 4.51049 19.9119 3.23995 23.5817C2.68096 25.1962 3.13953 26.7411 4.115 27.8233C5.06338 28.8755 6.49203 29.5 7.99991 29.5L23.9999 29.5C25.5078 29.5 26.9364 28.8755 27.8848 27.8233C28.8603 26.7411 29.3189 25.1962 28.7599 23.5817C27.4893 19.9119 24.6799 16.959 21.1018 15.4973C22.5769 14.1277 23.4999 12.1716 23.4999 10C23.4999 8.31159 22.942 6.75349 22.0004 5.5L24.9999 5.5C25.8283 5.5 26.4999 4.82843 26.4999 4C26.4999 3.17157 25.8283 2.5 24.9999 2.5L4.99988 2.5C4.17145 2.5 3.49988 3.17157 3.49988 4C3.49988 4.65311 3.91728 5.20873 4.49988 5.41465L4.49988 8C4.49988 8.82843 5.17145 9.5 5.99988 9.5C6.82831 9.5 7.49988 8.82843 7.49988 8L7.49988 5.5H9.99933C9.0578 6.75349 8.49988 8.31159 8.49988 10C8.49988 12.1716 9.42286 14.1277 10.8979 15.4973ZM6.07485 24.5632C7.49889 20.45 11.4068 17.5 15.9999 17.5C20.593 17.5 24.5009 20.45 25.925 24.5632C26.0887 25.0362 25.9806 25.4551 25.6564 25.8148C25.3051 26.2045 24.7012 26.5 23.9999 26.5H7.99991C7.29865 26.5 6.69467 26.2045 6.34339 25.8148C6.0192 25.4551 5.91108 25.0362 6.07485 24.5632ZM11.4999 10C11.4999 7.51472 13.5146 5.5 15.9999 5.5C18.4852 5.5 20.4999 7.51472 20.4999 10C20.4999 12.4853 18.4852 14.5 15.9999 14.5C13.5146 14.5 11.4999 12.4853 11.4999 10Z"
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
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default StudentOutlined;
