import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const EyeOutlined = (props) => {
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
          d="M16 6C10.6986 6 7.1924 8.13337 5.0218 10.4396C3.94524 11.5835 3.20326 12.7623 2.72745 13.731C2.48953 14.2153 2.31454 14.6544 2.19684 15.0188C2.09035 15.3485 2 15.7089 2 16C2 16.2911 2.09035 16.6515 2.19684 16.9812C2.31454 17.3456 2.48953 17.7847 2.72745 18.269C3.20326 19.2377 3.94524 20.4165 5.0218 21.5604C7.1924 23.8666 10.6986 26 16 26C21.3014 26 24.8076 23.8666 26.9782 21.5604C28.0548 20.4165 28.7967 19.2377 29.2726 18.269C29.5105 17.7847 29.6855 17.3456 29.8032 16.9812C29.9097 16.6515 30 16.2911 30 16C30 15.7089 29.9097 15.3485 29.8032 15.0188C29.6855 14.6544 29.5105 14.2153 29.2726 13.731C28.7967 12.7623 28.0548 11.5835 26.9782 10.4396C24.8076 8.13337 21.3014 6 16 6ZM4.00371 16.0064L4.00247 16L4.00371 15.9936C4.01118 15.955 4.03353 15.8394 4.10003 15.6335C4.18546 15.369 4.32297 15.0191 4.52255 14.6128C4.92174 13.8002 5.55476 12.7915 6.4782 11.8104C7.2205 11.0217 8.15452 10.2457 9.31636 9.60191C8.48428 10.8638 8 12.3754 8 14C8 18.4183 11.5817 22 16 22C20.4183 22 24 18.4183 24 14C24 12.3754 23.5157 10.8638 22.6836 9.60191C23.8455 10.2457 24.7795 11.0217 25.5218 11.8104C26.4452 12.7915 27.0783 13.8002 27.4774 14.6128C27.677 15.0191 27.8145 15.369 27.9 15.6335C27.9665 15.8394 27.9888 15.955 27.9963 15.9936L27.9975 16L27.9963 16.0064C27.9888 16.045 27.9665 16.1606 27.9 16.3665C27.8145 16.631 27.677 16.9809 27.4774 17.3872C27.0783 18.1998 26.4452 19.2085 25.5218 20.1896C23.6924 22.1334 20.6986 24 16 24C11.3014 24 8.3076 22.1334 6.4782 20.1896C5.55476 19.2085 4.92174 18.1998 4.52255 17.3872C4.32297 16.9809 4.18546 16.631 4.10003 16.3665C4.03353 16.1606 4.01118 16.045 4.00371 16.0064ZM16 8C12.6863 8 10 10.6863 10 14C10 17.3137 12.6863 20 16 20C19.3137 20 22 17.3137 22 14C22 10.6863 19.3137 8 16 8Z"
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
        d="M4.57583 16.2128C4.54434 16.1153 4.52543 16.0453 4.51421 16C4.52543 15.9547 4.54434 15.8847 4.57583 15.7872C4.6532 15.5477 4.78133 15.22 4.97133 14.8332C5.35135 14.0596 5.95714 13.0935 6.8423 12.153C7.1888 11.7849 7.57958 11.4188 8.01903 11.0686C7.68329 11.9823 7.5 12.9698 7.5 14C7.5 18.6944 11.3056 22.5 16 22.5C20.6944 22.5 24.5 18.6944 24.5 14C24.5 12.9698 24.3167 11.9823 23.981 11.0686C24.4204 11.4188 24.8112 11.7849 25.1577 12.153C26.0429 13.0935 26.6486 14.0596 27.0287 14.8332C27.2187 15.22 27.3468 15.5477 27.4242 15.7872C27.4557 15.8847 27.4746 15.9547 27.4858 16C27.4746 16.0453 27.4557 16.1153 27.4242 16.2128C27.3468 16.4523 27.2187 16.78 27.0287 17.1668C26.6486 17.9404 26.0429 18.9065 25.1577 19.847C23.4136 21.7001 20.5478 23.5 16 23.5C11.4522 23.5 8.5864 21.7001 6.8423 19.847C5.95714 18.9065 5.35135 17.9404 4.97133 17.1668C4.78133 16.78 4.6532 16.4523 4.57583 16.2128ZM16 5.5C10.5478 5.5 6.9136 7.70006 4.6577 10.097C3.54286 11.2815 2.77365 12.5029 2.27867 13.5105C2.03117 14.0144 1.8468 14.4758 1.72104 14.8651C1.61208 15.2025 1.5 15.6258 1.5 16C1.5 16.3742 1.61208 16.7975 1.72104 17.1349C1.8468 17.5242 2.03117 17.9856 2.27867 18.4895C2.77365 19.4971 3.54286 20.7185 4.6577 21.903C6.9136 24.2999 10.5478 26.5 16 26.5C21.4522 26.5 25.0864 24.2999 27.3423 21.903C28.4571 20.7185 29.2264 19.4971 29.7213 18.4895C29.9688 17.9856 30.1532 17.5242 30.279 17.1349C30.3879 16.7975 30.5 16.3742 30.5 16C30.5 15.6258 30.3879 15.2025 30.279 14.8651C30.1532 14.4758 29.9688 14.0144 29.7213 13.5105C29.2264 12.5029 28.4571 11.2815 27.3423 10.097C25.0864 7.70006 21.4522 5.5 16 5.5ZM16 8.5C12.9624 8.5 10.5 10.9624 10.5 14C10.5 17.0376 12.9624 19.5 16 19.5C19.0376 19.5 21.5 17.0376 21.5 14C21.5 10.9624 19.0376 8.5 16 8.5Z"
        fill={fill}
      />
    </Svg>
  );
};

EyeOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

EyeOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default EyeOutlined;