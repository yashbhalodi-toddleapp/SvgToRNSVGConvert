import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const BroomOutlined = (props) => {
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
          d="M7 20.8769V16.5C7 15.3954 7.89543 14.5 9 14.5H12.4737V5.52632C12.4737 3.57879 14.0525 2 16 2C17.9475 2 19.5263 3.57879 19.5263 5.52632V14.5H23C24.1046 14.5 25 15.3954 25 16.5V20.8769L26.9702 28.7575C27.0448 29.0562 26.9777 29.3727 26.7882 29.6154C26.5987 29.8581 26.3079 30 26 30H6.00001C5.69207 30 5.40131 29.8581 5.2118 29.6154C5.0223 29.3727 4.95518 29.0562 5.02987 28.7575L7 20.8769ZM14.4737 5.52632C14.4737 4.68335 15.157 4 16 4C16.843 4 17.5263 4.68335 17.5263 5.52632V15.5C17.5263 16.0523 17.974 16.5 18.5263 16.5H23V20H9V16.5H13.4737C14.026 16.5 14.4737 16.0523 14.4737 15.5V5.52632ZM20 28V25C20 24.4477 19.5523 24 19 24C18.4477 24 18 24.4477 18 25V28H14V25C14 24.4477 13.5523 24 13 24C12.4477 24 12 24.4477 12 25V28H7.28079L8.78079 22H23.2192L24.7192 28H20Z"
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
        d="M6.5 20.8154V16.5C6.5 15.1193 7.61929 14 9 14H11.9737V5.52632C11.9737 3.30264 13.7763 1.5 16 1.5C18.2237 1.5 20.0263 3.30264 20.0263 5.52632V14H23C24.3807 14 25.5 15.1193 25.5 16.5V20.8153L27.4552 28.6362C27.5673 29.0843 27.4666 29.559 27.1823 29.9231C26.8981 30.2872 26.4619 30.5 26 30.5H6.00001C5.53811 30.5 5.10197 30.2872 4.81771 29.9231C4.53344 29.559 4.43277 29.0843 4.5448 28.6362L6.5 20.8154ZM14.9737 5.52632C14.9737 4.9595 15.4332 4.5 16 4.5C16.5668 4.5 17.0263 4.9595 17.0263 5.52632V15.5C17.0263 16.3284 17.6979 17 18.5263 17H22.5V19.5H9.5V17H13.4737C14.3021 17 14.9737 16.3284 14.9737 15.5V5.52632ZM20.5 27.5V25C20.5 24.1716 19.8284 23.5 19 23.5C18.1716 23.5 17.5 24.1716 17.5 25V27.5H14.5V25C14.5 24.1716 13.8284 23.5 13 23.5C12.1716 23.5 11.5 24.1716 11.5 25V27.5H7.92118L9.17118 22.5H22.8288L24.0788 27.5H20.5Z"
        fill={fill}
      />
    </Svg>
  );
};

BroomOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

BroomOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

BroomOutlined.displayName = "BroomOutlined";

export default BroomOutlined;
