import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ItalicsOutlined = (props) => {
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
          d="M14.3655 3C14.3655 2.44772 14.8133 2 15.3655 2H23.3655C23.9178 2 24.3655 2.44772 24.3655 3C24.3655 3.55228 23.9178 4 23.3655 4H20.2515L13.8207 28H16.6356C17.1878 28 17.6356 28.4477 17.6356 29C17.6356 29.5523 17.1878 30 16.6356 30H8.63556C8.08327 30 7.63556 29.5523 7.63556 29C7.63556 28.4477 8.08327 28 8.63556 28H11.7502L18.181 4H15.3655C14.8133 4 14.3655 3.55228 14.3655 3Z"
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
        d="M13.8655 3C13.8655 2.17157 14.5371 1.5 15.3655 1.5H23.3655C24.194 1.5 24.8655 2.17157 24.8655 3C24.8655 3.82843 24.194 4.5 23.3655 4.5H20.6352L14.4724 27.5H16.6356C17.464 27.5 18.1356 28.1716 18.1356 29C18.1356 29.8284 17.464 30.5 16.6356 30.5H8.63556C7.80713 30.5 7.13556 29.8284 7.13556 29C7.13556 28.1716 7.80713 27.5 8.63556 27.5H11.3665L17.5294 4.5H15.3655C14.5371 4.5 13.8655 3.82843 13.8655 3Z"
        fill={fill}
      />
    </Svg>
  );
};

ItalicsOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ItalicsOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ItalicsOutlined.displayName = "ItalicsOutlined";

export default ItalicsOutlined;
