import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const PencilLineOutlined = (props) => {
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
          d="M2.99998 21.9999C2.99998 21.7347 3.10534 21.4803 3.29288 21.2928L20.4645 4.1212C22.4171 2.16858 25.5829 2.16859 27.5355 4.12121L27.8787 4.46435C29.8313 6.41697 29.8313 9.5828 27.8787 11.5354L10.7071 28.707C10.5196 28.8945 10.2652 28.9999 9.99998 28.9999H3.99999C3.73477 28.9999 3.48041 28.8945 3.29288 28.707C3.10534 28.5195 2.99998 28.2651 2.99998 27.9999V21.9999ZM4.99998 22.4141L4.99998 26.9999H9.58577L23.5858 12.9998L19 8.41406L4.99998 22.4141ZM20.4142 6.99984L25 11.5856L26.4644 10.1212C27.636 8.94963 27.636 7.05014 26.4644 5.87856L26.1213 5.53542C24.9497 4.36385 23.0502 4.36384 21.8787 5.53542L20.4142 6.99984Z"
          fill={fill}
        />
        <Path
          d="M16 27.9999C16 27.4476 16.4477 26.9999 17 26.9999H27C27.5523 26.9999 28 27.4476 28 27.9999C28 28.5522 27.5523 28.9999 27 28.9999H17C16.4477 28.9999 16 28.5522 16 27.9999Z"
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
        d="M2 19.8431C2 19.4453 2.15804 19.0638 2.43934 18.7825L17.6109 3.61091C19.7588 1.46303 23.2412 1.46303 25.3891 3.61092L27.7322 5.95406C29.8801 8.10195 29.8801 11.5844 27.7322 13.7322L12.5607 28.9038C12.2794 29.1851 11.8978 29.3431 11.5 29.3431H3.5C3.10218 29.3431 2.72064 29.1851 2.43934 28.9038C2.15804 28.6225 2 28.241 2 27.8431V19.8431ZM5 20.4645L5 26.3431H10.8787L22.3787 14.8432L16.5 8.96447L5 20.4645ZM18.6213 6.84315L24.5 12.7218L25.6109 11.6109C26.5872 10.6346 26.5872 9.05169 25.6109 8.07538L23.2678 5.73223C22.2915 4.75592 20.7085 4.75592 19.7322 5.73223L18.6213 6.84315Z"
        fill={fill}
      />
      <Path
        d="M18 27.8431C18 27.0147 18.6716 26.3431 19.5 26.3431H27.5C28.3284 26.3431 29 27.0147 29 27.8431C29 28.6716 28.3284 29.3431 27.5 29.3431H19.5C18.6716 29.3431 18 28.6716 18 27.8431Z"
        fill={fill}
      />
    </Svg>
  );
};

PencilLineOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

PencilLineOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default PencilLineOutlined;
