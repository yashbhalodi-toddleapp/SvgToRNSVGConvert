import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const EnvelopeDotOutlined = (props) => {
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
          d="M2 7C2 5.34314 3.34315 4 5 4H27C28.6569 4 30 5.34315 30 7V16C30 16.5523 29.5523 17 29 17C28.4477 17 28 16.5523 28 16V7.33077C27.8943 7.49052 27.7913 7.62289 27.7071 7.70711L18.1213 17.2929C16.9498 18.4645 15.0503 18.4645 13.8787 17.2929L4.29292 7.70711C4.20869 7.62288 4.10575 7.49049 4 7.33072V23C4 24.6569 5.34315 26 7 26H18C18.5523 26 19 26.4477 19 27C19 27.5523 18.5523 28 18 28H7C4.23858 28 2 25.7614 2 23V7ZM5.33076 6H26.6693C26.5095 6.10574 26.3771 6.20867 26.2929 6.29289L16.7071 15.8787C16.3166 16.2692 15.6834 16.2692 15.2929 15.8787L5.70713 6.29289C5.62291 6.20867 5.49053 6.10574 5.33076 6ZM28 23C28 24.6569 26.6569 26 25 26C23.3431 26 22 24.6569 22 23C22 21.3431 23.3431 20 25 20C26.6569 20 28 21.3431 28 23ZM30 23C30 25.7614 27.7614 28 25 28C22.2386 28 20 25.7614 20 23C20 20.2386 22.2386 18 25 18C27.7614 18 30 20.2386 30 23Z"
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
        d="M1.5 7C1.5 5.067 3.067 3.5 5 3.5H27C28.933 3.5 30.5 5.067 30.5 7V16C30.5 16.8284 29.8284 17.5 29 17.5C28.1716 17.5 27.5 16.8284 27.5 16V8.62132L18.4749 17.6464C17.108 19.0133 14.892 19.0133 13.5251 17.6464L4.5 8.62132V23C4.5 24.3807 5.61929 25.5 7 25.5H18C18.8284 25.5 19.5 26.1716 19.5 27C19.5 27.8284 18.8284 28.5 18 28.5H7C3.96243 28.5 1.5 26.0376 1.5 23V7ZM6.62132 6.5H25.3787L16.3536 15.5251C16.1583 15.7204 15.8417 15.7204 15.6464 15.5251L6.62132 6.5Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 23C30 25.7614 27.7614 28 25 28C22.2386 28 20 25.7614 20 23C20 20.2386 22.2386 18 25 18C27.7614 18 30 20.2386 30 23ZM27 23C27 24.1046 26.1046 25 25 25C23.8954 25 23 24.1046 23 23C23 21.8954 23.8954 21 25 21C26.1046 21 27 21.8954 27 23Z"
        fill={fill}
      />
    </Svg>
  );
};

EnvelopeDotOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

EnvelopeDotOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

EnvelopeDotOutlined.displayName = "EnvelopeDotOutlined";

export default EnvelopeDotOutlined;
