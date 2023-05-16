import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const FamilyOutlined = (props) => {
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
          d="M4.01563 24.2104C4.84498 20.0971 8.48088 17 12.8379 17C15.4444 17 17.7924 18.1074 19.437 19.8801C17.6128 20.896 16.2904 22.7041 15.9337 24.8394C15.9246 24.8937 15.9179 24.9472 15.9134 25H4.83791C4.55575 25 4.31603 24.8837 4.1691 24.7274C4.03149 24.5811 3.976 24.407 4.01563 24.2104ZM17.9376 25L20.1579 25L27.7379 25C27.2752 22.7179 25.2562 21 22.8378 21C20.4194 21 18.4003 22.7179 17.9376 25ZM20.1579 27L17.8378 27C17.8368 27 17.8359 27 17.8349 27L4.83791 27C3.25019 27 1.68417 25.6548 2.05509 23.8151C2.81659 20.0383 5.51165 16.9619 9.06368 15.6645C7.70588 14.5645 6.83791 12.8836 6.83791 11C6.83791 7.68629 9.5242 5 12.8379 5C16.1516 5 18.8379 7.68629 18.8379 11C18.8379 12.8837 17.9698 14.5647 16.6119 15.6647C17.4022 15.9534 18.1501 16.3301 18.8436 16.7829C18.9563 14.6747 20.7015 12.9999 22.8378 12.9999C25.0469 12.9999 26.8378 14.7908 26.8378 16.9999C26.8378 18.0238 26.4531 18.9578 25.8204 19.6653C27.8592 20.627 29.3584 22.5441 29.7418 24.8394C29.9536 26.1069 28.8878 27 27.8378 27L20.1579 27ZM12.8413 15C15.0489 14.9982 16.8379 13.208 16.8379 11C16.8379 8.79086 15.047 7 12.8379 7C10.6288 7 8.83791 8.79086 8.83791 11C8.83791 13.2091 10.6288 15 12.8379 15L12.8413 15ZM22.8378 14.9999C21.7332 14.9999 20.8378 15.8954 20.8378 16.9999C20.8378 18.1045 21.7332 18.9999 22.8378 18.9999C23.9424 18.9999 24.8378 18.1045 24.8378 16.9999C24.8378 15.8954 23.9424 14.9999 22.8378 14.9999Z"
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
        d="M4.9999 27.5C3.17061 27.5 1.27973 25.9344 1.72695 23.7163C2.46883 20.0368 4.96564 16.9932 8.30729 15.4977C7.1878 14.3301 6.49988 12.7454 6.49988 11C6.49988 7.41015 9.41003 4.5 12.9999 4.5C16.5897 4.5 19.4999 7.41015 19.4999 11C19.4999 12.7454 18.812 14.3301 17.6925 15.4977C18.0094 15.6396 18.3187 15.7953 18.6197 15.9642C19.0875 13.9782 20.871 12.4999 22.9999 12.4999C25.4852 12.4999 27.4999 14.5147 27.4999 16.9999C27.4999 17.9247 27.221 18.7842 26.7427 19.4991C28.646 20.5974 30.0214 22.5077 30.3971 24.7571C30.6692 26.3859 29.2987 27.5 27.9999 27.5H4.9999ZM4.66777 24.3092C5.451 20.4247 8.88558 17.5 12.9999 17.5C17.1142 17.5 20.5488 20.4247 21.332 24.3092C21.3351 24.3244 21.3349 24.3326 21.3348 24.3353C21.3347 24.3381 21.3343 24.3398 21.3338 24.3416C21.3328 24.3446 21.3273 24.3607 21.3044 24.3849C21.254 24.4385 21.1473 24.4998 21.0005 24.5H4.99991C4.85281 24.5 4.74584 24.4386 4.69537 24.3849C4.67254 24.3607 4.66698 24.3446 4.66606 24.3416C4.66551 24.3398 4.66515 24.3381 4.66501 24.3353C4.66488 24.3326 4.66472 24.3244 4.66777 24.3092ZM24.3364 24.5H27.2443C26.6912 22.9347 25.2951 21.7667 23.6026 21.54C23.8946 22.2335 24.1207 22.9615 24.2729 23.7163C24.3276 23.9879 24.3473 24.2497 24.3364 24.5ZM12.9999 7.5C11.0669 7.5 9.49988 9.067 9.49988 11C9.49988 12.933 11.0669 14.5 12.9999 14.5C14.9329 14.5 16.4999 12.933 16.4999 11C16.4999 9.067 14.9329 7.5 12.9999 7.5ZM21.4999 16.9999C21.4999 16.1715 22.1715 15.4999 22.9999 15.4999C23.8283 15.4999 24.4999 16.1715 24.4999 16.9999C24.4999 17.8284 23.8283 18.4999 22.9999 18.4999C22.1715 18.4999 21.4999 17.8284 21.4999 16.9999Z"
        fill={fill}
      />
    </Svg>
  );
};
FamilyOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
FamilyOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default FamilyOutlined;
