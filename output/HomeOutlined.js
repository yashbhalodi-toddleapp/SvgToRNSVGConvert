import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const HomeOutlined = (props) => {
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
          d="M18.1076 5.48577C16.9392 4.33238 15.0608 4.33238 13.8924 5.48577L4.89241 14.3704C4.32141 14.9341 4 15.703 4 16.5053V25C4 26.6569 5.34315 28 7 28H10.6667V24.3333C10.6667 21.5719 12.9052 19.3334 15.6667 19.3334H16.3333C19.0948 19.3334 21.3333 21.5719 21.3333 24.3334V28H25C26.6569 28 28 26.6569 28 25V16.5053C28 15.703 27.6786 14.9341 27.1076 14.3704L18.1076 5.48577ZM12.4873 4.06246C14.4346 2.14015 17.5654 2.14015 19.5127 4.06246L28.5127 12.9471C29.4643 13.8865 30 15.1681 30 16.5053V25C30 27.7614 27.7614 30 25 30H20.3333C19.781 30 19.3333 29.5523 19.3333 29V24.3334C19.3333 22.6765 17.9902 21.3334 16.3333 21.3334H15.6667C14.0098 21.3334 12.6667 22.6765 12.6667 24.3333V29C12.6667 29.5523 12.219 30 11.6667 30H7C4.23858 30 2 27.7614 2 25V16.5053C2 15.1681 2.53568 13.8865 3.48735 12.9471L12.4873 4.06246Z"
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
        d="M17.7563 5.84159C16.7827 4.88044 15.2173 4.88044 14.2437 5.84159L5.24367 14.7262C4.76784 15.1959 4.5 15.8367 4.5 16.5053V25C4.5 26.3807 5.61929 27.5 7 27.5H10.1667V24.3334C10.1667 21.2958 12.6291 18.8334 15.6667 18.8334H16.3333C19.3709 18.8334 21.8333 21.2958 21.8333 24.3334V27.5H25C26.3807 27.5 27.5 26.3807 27.5 25V16.5053C27.5 15.8367 27.2322 15.1959 26.7563 14.7262L17.7563 5.84159ZM12.1361 3.70663C14.2781 1.59209 17.7219 1.5921 19.8639 3.70663L28.8639 12.5912C29.9108 13.6247 30.5 15.0344 30.5 16.5053V25C30.5 28.0376 28.0376 30.5 25 30.5H20.3333C19.5049 30.5 18.8333 29.8284 18.8333 29V24.3334C18.8333 22.9526 17.714 21.8334 16.3333 21.8334H15.6667C14.286 21.8334 13.1667 22.9526 13.1667 24.3334V29C13.1667 29.8284 12.4951 30.5 11.6667 30.5H7C3.96243 30.5 1.5 28.0376 1.5 25V16.5053C1.5 15.0344 2.08925 13.6247 3.13608 12.5912L12.1361 3.70663Z"
        fill={fill}
      />
    </Svg>
  );
};

HomeOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

HomeOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default HomeOutlined;
