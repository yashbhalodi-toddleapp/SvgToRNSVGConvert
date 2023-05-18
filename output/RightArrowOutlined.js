import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const RightArrowOutlined = (props) => {
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
          d="M20.7071 7.29289C20.3166 6.90237 19.6834 6.90237 19.2929 7.29289C18.9024 7.68342 18.9024 8.31658 19.2929 8.70711L25.5858 15H4C3.44772 15 3 15.4477 3 16C3 16.5523 3.44772 17 4 17H25.5858L19.2929 23.2929C18.9024 23.6834 18.9024 24.3166 19.2929 24.7071C19.6834 25.0976 20.3166 25.0976 20.7071 24.7071L28.7066 16.7076C28.7078 16.7064 28.7091 16.7051 28.7104 16.7038C28.9011 16.5114 28.9976 16.2607 29 16.0093C29 16.0031 29 15.9969 29 15.9907C28.9987 15.8585 28.9719 15.7324 28.9241 15.6172C28.8753 15.4993 28.803 15.3888 28.7071 15.2929L20.7071 7.29289Z"
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
        d="M21.0607 6.93934C20.4749 6.35355 19.5251 6.35355 18.9393 6.93934C18.3536 7.52513 18.3536 8.47487 18.9393 9.06066L24.3787 14.5H4C3.17157 14.5 2.5 15.1716 2.5 16C2.5 16.8284 3.17157 17.5 4 17.5H24.3787L18.9393 22.9393C18.3536 23.5251 18.3536 24.4749 18.9393 25.0607C19.5251 25.6464 20.4749 25.6464 21.0607 25.0607L29.0607 17.0607C29.3536 16.7678 29.5 16.3839 29.5 16C29.5 15.7966 29.4595 15.6027 29.3862 15.4258C29.313 15.2489 29.2045 15.0832 29.0607 14.9393L21.0607 6.93934Z"
        fill={fill}
      />
    </Svg>
  );
};

RightArrowOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

RightArrowOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

RightArrowOutlined.displayName = "RightArrowOutlined";

export default RightArrowOutlined;
