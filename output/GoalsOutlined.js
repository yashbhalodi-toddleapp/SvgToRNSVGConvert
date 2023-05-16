import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const GoalsOutlined = (props) => {
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
          d="M26.5815 6.83274C28.7112 9.28886 30 12.4939 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2C19.5061 2 22.7111 3.28882 25.1673 5.41853L27.2929 3.29289C27.6834 2.90237 28.3166 2.90237 28.7071 3.29289C29.0976 3.68342 29.0976 4.31658 28.7071 4.70711L26.5815 6.83274ZM4 16C4 9.37258 9.37258 4 16 4C18.9537 4 21.6582 5.06716 23.7488 6.83695L20.9056 9.68014C19.551 8.62708 17.8487 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16C24 14.1513 23.3729 12.449 22.3199 11.0944L25.1631 8.25116C26.9328 10.3418 28 13.0463 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16ZM19.4765 11.1093C18.4957 10.4108 17.2958 10 16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22C19.3137 22 22 19.3137 22 16C22 14.7042 21.5892 13.5043 20.8907 12.5235L17.9323 15.482C17.9764 15.6472 18 15.8208 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16C14 14.8954 14.8954 14 16 14C16.1792 14 16.3528 14.0236 16.518 14.0677L19.4765 11.1093Z"
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
        d="M27.259 6.86229C29.2855 9.3561 30.5 12.5362 30.5 16C30.5 24.0081 24.0081 30.5 16 30.5C7.99187 30.5 1.5 24.0081 1.5 16C1.5 7.99187 7.99187 1.5 16 1.5C19.4638 1.5 22.6439 2.71453 25.1377 4.74097L26.9393 2.93934C27.5251 2.35355 28.4749 2.35355 29.0607 2.93934C29.6464 3.52513 29.6464 4.47487 29.0607 5.06066L27.259 6.86229ZM4.5 16C4.5 9.64873 9.64873 4.5 16 4.5C18.6349 4.5 21.0628 5.38614 23.002 6.87667L20.856 9.02272C19.4794 8.06288 17.8054 7.5 16 7.5C11.3056 7.5 7.5 11.3056 7.5 16C7.5 20.6944 11.3056 24.5 16 24.5C20.6944 24.5 24.5 20.6944 24.5 16C24.5 14.1946 23.9371 12.5206 22.9773 11.144L25.1233 8.99799C26.6139 10.9372 27.5 13.3651 27.5 16C27.5 22.3513 22.3513 27.5 16 27.5C9.64873 27.5 4.5 22.3513 4.5 16ZM18.6817 11.197C17.8884 10.753 16.9737 10.5 16 10.5C12.9624 10.5 10.5 12.9624 10.5 16C10.5 19.0376 12.9624 21.5 16 21.5C19.0376 21.5 21.5 19.0376 21.5 16C21.5 15.0263 21.247 14.1116 20.803 13.3183L18.4752 15.6462C18.4915 15.7618 18.5 15.8799 18.5 16C18.5 17.3807 17.3807 18.5 16 18.5C14.6193 18.5 13.5 17.3807 13.5 16C13.5 14.6193 14.6193 13.5 16 13.5C16.1201 13.5 16.2382 13.5085 16.3538 13.5248L18.6817 11.197Z"
        fill={fill}
      />
    </Svg>
  );
};
GoalsOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
GoalsOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default GoalsOutlined;
