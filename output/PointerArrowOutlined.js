import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const PointerArrowOutlined = (props) => {
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
          d="M6.51259 3.12683C6.83965 2.94426 7.24131 2.95978 7.55331 3.16702L25.5533 15.1235C25.8922 15.3487 26.061 15.7567 25.98 16.1555C25.899 16.5543 25.5845 16.8642 25.1846 16.9393L18.8916 18.1216L23.6503 25.9441C23.7903 26.1743 23.8315 26.4512 23.7646 26.7122C23.6976 26.9732 23.5282 27.1962 23.2946 27.3305L18.8865 29.8668C18.416 30.1375 17.8155 29.9834 17.5334 29.5197L12.727 21.6186L8.48275 26.4028C8.2112 26.7089 7.78056 26.8186 7.39561 26.6799C7.01067 26.5411 6.74909 26.1819 6.73527 25.7729L6.00057 4.03378C5.98792 3.65943 6.18553 3.3094 6.51259 3.12683ZM8.06506 5.90798L8.64949 23.2011L12.1295 19.2784C12.3401 19.041 12.6509 18.9176 12.967 18.946C13.2831 18.9744 13.567 19.1512 13.7319 19.4223L18.7349 27.6466L21.409 26.108L16.4314 17.9255C16.2607 17.645 16.2387 17.2986 16.3723 16.9987C16.506 16.6988 16.7784 16.4836 17.1011 16.423L22.3971 15.428L8.06506 5.90798Z"
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
        d="M6.26888 2.69024C6.75947 2.41639 7.36196 2.43966 7.82996 2.75053L25.83 14.7071C26.3384 15.0448 26.5915 15.6568 26.47 16.255C26.3486 16.8531 25.8768 17.318 25.277 17.4307L19.6946 18.4795L24.0774 25.6842C24.2875 26.0295 24.3493 26.445 24.2489 26.8365C24.1485 27.228 23.8943 27.5624 23.544 27.7639L19.1358 30.3002C18.4301 30.7062 17.5294 30.4751 17.1063 29.7796L12.6517 22.4569L8.85678 26.7346C8.44946 27.1937 7.8035 27.3584 7.22607 27.1503C6.64865 26.9421 6.25629 26.4032 6.23555 25.7898L5.50086 4.05067C5.48188 3.48914 5.7783 2.9641 6.26888 2.69024ZM8.59758 6.86196L9.10689 21.9321L11.7555 18.9466C12.0714 18.5905 12.5376 18.4055 13.0117 18.448C13.4859 18.4906 13.9117 18.7557 14.1591 19.1625L18.9085 26.9698L20.7156 25.9302L16.0042 18.1854C15.7482 17.7646 15.7151 17.245 15.9156 16.7951C16.1162 16.3453 16.5247 16.0225 17.0088 15.9316L21.0956 15.1638L8.59758 6.86196Z"
        fill={fill}
      />
    </Svg>
  );
};

PointerArrowOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

PointerArrowOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

PointerArrowOutlined.displayName = "PointerArrowOutlined";

export default PointerArrowOutlined;
