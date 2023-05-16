import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const PencilOutlined = (props) => {
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
          d="M3.29288 21.2928C3.10534 21.4803 2.99998 21.7347 2.99998 21.9999V27.9999C2.99998 28.2651 3.10534 28.5195 3.29288 28.707C3.48041 28.8945 3.73477 28.9999 3.99998 28.9999H9.99998C10.2652 28.9999 10.5196 28.8945 10.7071 28.707L27.8787 11.5354C29.8313 9.5828 29.8313 6.41697 27.8787 4.46435L27.5355 4.12121C25.5829 2.16859 22.4171 2.16858 20.4645 4.1212L3.29288 21.2928ZM4.99998 26.9999L4.99998 22.4141L19 8.41406L23.5858 12.9998L9.58577 26.9999H4.99998ZM25 11.5856L26.4644 10.1212C27.636 8.94963 27.636 7.05014 26.4644 5.87856L26.1213 5.53542C24.9497 4.36385 23.0502 4.36384 21.8787 5.53542L20.4142 6.99984L25 11.5856Z"
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
        d="M2.43934 18.7825C2.15804 19.0638 2 19.4453 2 19.8431V27.8431C2 28.241 2.15804 28.6225 2.43934 28.9038C2.72064 29.1851 3.10218 29.3431 3.5 29.3431H11.5C11.8978 29.3431 12.2794 29.1851 12.5607 28.9038L27.7322 13.7322C29.8801 11.5844 29.8801 8.10195 27.7322 5.95406L25.3891 3.61092C23.2412 1.46303 19.7588 1.46303 17.6109 3.61091L2.43934 18.7825ZM5 26.3431L5 20.4645L16.5 8.96447L22.3787 14.8432L10.8787 26.3431H5ZM24.5 12.7218L25.6109 11.6109C26.5872 10.6346 26.5872 9.05169 25.6109 8.07538L23.2678 5.73223C22.2915 4.75592 20.7085 4.75592 19.7322 5.73223L18.6213 6.84315L24.5 12.7218Z"
        fill={fill}
      />
    </Svg>
  );
};
PencilOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
PencilOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default PencilOutlined;
