import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const ShareNetworkOutlined = (props) => {
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
          d="M23 2C20.2386 2 18 4.23858 18 7C18 7.60436 18.1072 8.18369 18.3037 8.71998L12.4926 12.422C11.5914 11.5422 10.359 11 9 11C6.23858 11 4 13.2386 4 16C4 18.7614 6.23858 21 9 21C10.3255 21 11.5306 20.4842 12.4254 19.6424L18.2726 23.3675C18.0959 23.8791 18 24.4283 18 25C18 27.7614 20.2386 30 23 30C25.7614 30 28 27.7614 28 25C28 22.2386 25.7614 20 23 20C21.5294 20 20.207 20.6349 19.2921 21.6456L13.5808 18.0071C13.8504 17.3928 14 16.7139 14 16C14 15.3186 13.8637 14.6691 13.6169 14.0772L19.3544 10.422C20.2665 11.3933 21.5624 12 23 12C25.7614 12 28 9.76142 28 7C28 4.23858 25.7614 2 23 2ZM20 7C20 5.34315 21.3431 4 23 4C24.6569 4 26 5.34315 26 7C26 8.65685 24.6569 10 23 10C21.3431 10 20 8.65685 20 7ZM9 13C7.34315 13 6 14.3431 6 16C6 17.6569 7.34315 19 9 19C10.6569 19 12 17.6569 12 16C12 14.3431 10.6569 13 9 13ZM23 22C21.3431 22 20 23.3431 20 25C20 26.6569 21.3431 28 23 28C24.6569 28 26 26.6569 26 25C26 23.3431 24.6569 22 23 22Z"
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
        d="M23 1.5C19.9624 1.5 17.5 3.96243 17.5 7C17.5 7.7035 17.6321 8.37614 17.8728 8.9945L12.9247 12.1468C11.9267 11.1304 10.537 10.5 9 10.5C5.96243 10.5 3.5 12.9624 3.5 16C3.5 19.0376 5.96243 21.5 9 21.5C10.1245 21.5 11.1702 21.1625 12.0413 20.5833L17.557 24.0972L17.5722 24.1068C17.5247 24.3975 17.5 24.6959 17.5 25C17.5 28.0376 19.9624 30.5 23 30.5C26.0376 30.5 28.5 28.0376 28.5 25C28.5 21.9624 26.0376 19.5 23 19.5C21.3518 19.5 19.873 20.225 18.8649 21.3734L14.0072 18.2787C14.3237 17.5844 14.5 16.8128 14.5 16C14.5 15.5828 14.4536 15.1765 14.3656 14.7859L19.6907 11.3934C20.6115 12.0881 21.7577 12.5 23 12.5C26.0376 12.5 28.5 10.0376 28.5 7C28.5 3.96243 26.0376 1.5 23 1.5ZM20.5 7C20.5 5.61929 21.6193 4.5 23 4.5C24.3807 4.5 25.5 5.61929 25.5 7C25.5 8.38071 24.3807 9.5 23 9.5C21.6193 9.5 20.5 8.38071 20.5 7ZM9 13.5C7.61929 13.5 6.5 14.6193 6.5 16C6.5 17.3807 7.61929 18.5 9 18.5C10.3807 18.5 11.5 17.3807 11.5 16C11.5 14.6193 10.3807 13.5 9 13.5ZM23 22.5C21.6193 22.5 20.5 23.6193 20.5 25C20.5 26.3807 21.6193 27.5 23 27.5C24.3807 27.5 25.5 26.3807 25.5 25C25.5 23.6193 24.3807 22.5 23 22.5Z"
        fill={fill}
      />
    </Svg>
  );
};
ShareNetworkOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
ShareNetworkOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default ShareNetworkOutlined;
