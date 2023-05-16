import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const ApprovalTickOutlined = (props) => {
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
          d="M14.9522 4.04506C15.2972 4.01524 15.6467 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C15.6467 28 15.2972 27.9848 14.9522 27.9549C14.4019 27.9074 13.9173 28.3149 13.8698 28.8651C13.8222 29.4154 14.2298 29.9 14.78 29.9475C15.1823 29.9823 15.5892 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C15.5892 2 15.1823 2.01772 14.78 2.05248C14.2298 2.10003 13.8222 2.58462 13.8698 3.13486C13.9173 3.68509 14.4019 4.0926 14.9522 4.04506Z"
          fill="#808080"
        />
        <Path
          d="M11.4106 3.79199C11.1769 3.29161 10.5818 3.07544 10.0814 3.30918C9.33925 3.65584 8.63272 4.06557 7.96869 4.53138C7.51656 4.84855 7.40715 5.47219 7.72431 5.92432C8.04148 6.37646 8.66512 6.48587 9.11725 6.1687C9.68667 5.76926 10.2922 5.41815 10.9278 5.12124C11.4282 4.8875 11.6444 4.29238 11.4106 3.79199Z"
          fill="#808080"
        />
        <Path
          d="M5.92432 7.72431C5.47219 7.40715 4.84855 7.51656 4.53138 7.96869C4.06557 8.63272 3.65584 9.33925 3.30918 10.0814C3.07544 10.5818 3.29161 11.1769 3.79199 11.4106C4.29238 11.6444 4.8875 11.4282 5.12124 10.9278C5.41815 10.2922 5.76926 9.68667 6.1687 9.11725C6.48587 8.66512 6.37646 8.04148 5.92432 7.72431Z"
          fill="#808080"
        />
        <Path
          d="M3.13486 13.8698C2.58462 13.8222 2.10003 14.2298 2.05248 14.78C2.01772 15.1823 2 15.5892 2 16C2 16.4108 2.01772 16.8177 2.05248 17.22C2.10003 17.7702 2.58462 18.1778 3.13486 18.1302C3.68509 18.0827 4.0926 17.5981 4.04506 17.0478C4.01524 16.7028 4 16.3533 4 16C4 15.6467 4.01524 15.2972 4.04506 14.9522C4.0926 14.4019 3.68509 13.9173 3.13486 13.8698Z"
          fill="#808080"
        />
        <Path
          d="M3.79199 20.5894C3.29161 20.8231 3.07544 21.4182 3.30918 21.9186C3.65584 22.6608 4.06557 23.3673 4.53138 24.0313C4.84855 24.4834 5.47219 24.5929 5.92432 24.2757C6.37646 23.9585 6.48587 23.3349 6.1687 22.8827C5.76926 22.3133 5.41815 21.7078 5.12124 21.0722C4.8875 20.5718 4.29238 20.3556 3.79199 20.5894Z"
          fill="#808080"
        />
        <Path
          d="M7.72431 26.0757C7.40715 26.5278 7.51656 27.1514 7.96869 27.4686C8.63272 27.9344 9.33925 28.3442 10.0814 28.6908C10.5818 28.9246 11.1769 28.7084 11.4106 28.208C11.6444 27.7076 11.4282 27.1125 10.9278 26.8788C10.2922 26.5818 9.68667 26.2307 9.11725 25.8313C8.66512 25.5141 8.04148 25.6235 7.72431 26.0757Z"
          fill="#808080"
        />
        <Path
          d="M21.7071 13.7071C22.0976 13.3166 22.0976 12.6834 21.7071 12.2929C21.3166 11.9024 20.6834 11.9024 20.2929 12.2929L14 18.5858L11.7071 16.2929C11.3166 15.9024 10.6834 15.9024 10.2929 16.2929C9.90237 16.6834 9.90237 17.3166 10.2929 17.7071L13.2929 20.7071C13.6834 21.0976 14.3166 21.0976 14.7071 20.7071L21.7071 13.7071Z"
          fill="#808080"
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
        d="M15.2457 4.52429C15.4948 4.50819 15.7464 4.5 16 4.5C22.3513 4.5 27.5 9.64873 27.5 16C27.5 22.3513 22.3513 27.5 16 27.5C15.7464 27.5 15.4948 27.4918 15.2457 27.4757C14.419 27.4223 13.7055 28.0492 13.6521 28.8759C13.5986 29.7026 14.2255 30.416 15.0522 30.4695C15.3657 30.4897 15.6818 30.5 16 30.5C24.0081 30.5 30.5 24.0081 30.5 16C30.5 7.99187 24.0081 1.5 16 1.5C15.6818 1.5 15.3657 1.51027 15.0522 1.53053C14.2255 1.58396 13.5986 2.29744 13.6521 3.12414C13.7055 3.95085 14.419 4.57771 15.2457 4.52429ZM11.5938 3.67359C11.2268 2.93087 10.3273 2.62627 9.58455 2.99323C9.01489 3.27469 8.46655 3.59237 7.94252 3.9432C7.25412 4.40407 7.06967 5.33573 7.53054 6.02413C7.99141 6.71253 8.92308 6.89697 9.61147 6.4361C10.0273 6.15773 10.4621 5.90586 10.9134 5.68285C11.6562 5.31588 11.9608 4.41631 11.5938 3.67359ZM6.02413 7.53054C5.33573 7.06967 4.40407 7.25412 3.9432 7.94252C3.59237 8.46655 3.27469 9.01489 2.99323 9.58455C2.62627 10.3273 2.93087 11.2268 3.67359 11.5938C4.41631 11.9608 5.31588 11.6562 5.68285 10.9134C5.90586 10.4621 6.15773 10.0273 6.4361 9.61147C6.89697 8.92308 6.71253 7.99141 6.02413 7.53054ZM3.12414 13.6521C2.29744 13.5986 1.58396 14.2255 1.53053 15.0522C1.51027 15.3657 1.5 15.6818 1.5 16C1.5 16.3182 1.51027 16.6343 1.53053 16.9478C1.58396 17.7745 2.29744 18.4014 3.12414 18.3479C3.95085 18.2945 4.57771 17.581 4.52429 16.7543C4.50819 16.5052 4.5 16.2536 4.5 16C4.5 15.7464 4.50819 15.4948 4.52429 15.2457C4.57771 14.419 3.95085 13.7055 3.12414 13.6521ZM3.67359 20.4062C2.93087 20.7732 2.62627 21.6727 2.99323 22.4154C3.27469 22.9851 3.59237 23.5334 3.9432 24.0575C4.40407 24.7459 5.33573 24.9303 6.02413 24.4695C6.71253 24.0086 6.89697 23.0769 6.4361 22.3885C6.15773 21.9727 5.90586 21.5379 5.68285 21.0866C5.31588 20.3438 4.41631 20.0392 3.67359 20.4062ZM7.53054 25.9759C7.06967 26.6643 7.25412 27.5959 7.94252 28.0568C8.46655 28.4076 9.01489 28.7253 9.58455 29.0068C10.3273 29.3737 11.2268 29.0691 11.5938 28.3264C11.9608 27.5837 11.6562 26.6841 10.9134 26.3172C10.4621 26.0941 10.0273 25.8423 9.61147 25.5639C8.92308 25.103 7.99141 25.2875 7.53054 25.9759ZM22.0607 14.0607C22.6464 13.4749 22.6464 12.5251 22.0607 11.9393C21.4749 11.3536 20.5251 11.3536 19.9393 11.9393L14 17.8787L12.0607 15.9393C11.4749 15.3536 10.5251 15.3536 9.93934 15.9393C9.35355 16.5251 9.35355 17.4749 9.93934 18.0607L12.9393 21.0607C13.5251 21.6464 14.4749 21.6464 15.0607 21.0607L22.0607 14.0607Z"
        fill="#808080"
      />
    </Svg>
  );
};
ApprovalTickOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
ApprovalTickOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default ApprovalTickOutlined;
