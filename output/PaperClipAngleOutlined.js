import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const PaperClipAngleOutlined = (props) => {
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
          d="M6.29289 16.2071C5.90237 15.8166 5.90237 15.1834 6.29289 14.7929L15.7929 5.29289C18.6687 2.41709 23.3313 2.41708 26.2071 5.29289C29.0829 8.16869 29.0829 12.8313 26.2071 15.7071L14.2071 27.7071C12.1597 29.7545 8.84025 29.7545 6.79288 27.7071C4.74551 25.6597 4.74551 22.3403 6.79288 20.2929L18.2929 8.79289C19.5118 7.57394 21.4882 7.57394 22.7071 8.79289C23.9261 10.0118 23.9261 11.9882 22.7071 13.2071L14.2071 21.7071C13.8166 22.0976 13.1834 22.0976 12.7929 21.7071C12.4024 21.3166 12.4024 20.6834 12.7929 20.2929L21.2929 11.7929C21.7308 11.355 21.7308 10.645 21.2929 10.2071C20.855 9.7692 20.145 9.7692 19.7071 10.2071L8.20709 21.7071C6.94077 22.9734 6.94077 25.0266 8.20709 26.2929C9.47342 27.5592 11.5265 27.5592 12.7929 26.2929L24.7929 14.2929C26.8876 12.1981 26.8876 8.80186 24.7929 6.7071C22.6981 4.61234 19.3019 4.61235 17.2071 6.7071L7.70711 16.2071C7.31658 16.5976 6.68342 16.5976 6.29289 16.2071Z"
          fill="#717171"
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
        d="M5.93934 16.5607C5.35355 15.9749 5.35355 15.0251 5.93934 14.4393L15.4393 4.93933C18.5104 1.86827 23.4896 1.86827 26.5607 4.93934C29.6317 8.01041 29.6317 12.9896 26.5606 16.0607L14.5606 28.0607C12.318 30.3033 8.68196 30.3033 6.43933 28.0606C4.19669 25.818 4.19669 22.182 6.43933 19.9394L17.9393 8.43934C19.3536 7.02512 21.6464 7.02513 23.0607 8.43934C24.4749 9.85355 24.4749 12.1464 23.0607 13.5607L14.5607 22.0607C13.9749 22.6464 13.0251 22.6464 12.4393 22.0607C11.8536 21.4749 11.8536 20.5251 12.4393 19.9393L20.9393 11.4393C21.182 11.1967 21.182 10.8033 20.9393 10.5607C20.6967 10.318 20.3033 10.318 20.0607 10.5607L8.56065 22.0607C7.48959 23.1317 7.48959 24.8683 8.56065 25.9393C9.63171 27.0104 11.3682 27.0104 12.4393 25.9393L24.4393 13.9393C26.3388 12.0398 26.3388 8.96015 24.4393 7.06066C22.5398 5.16116 19.4602 5.16116 17.5607 7.06066L8.06066 16.5607C7.47487 17.1464 6.52512 17.1464 5.93934 16.5607Z"
        fill={fill}
      />
    </Svg>
  );
};
PaperClipAngleOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
PaperClipAngleOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default PaperClipAngleOutlined;
