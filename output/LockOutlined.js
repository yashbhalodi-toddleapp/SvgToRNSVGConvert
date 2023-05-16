import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const LockOutlined = (props) => {
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
          d="M14.5 21.5C14.5 22.3284 15.1716 23 16 23C16.8284 23 17.5 22.3284 17.5 21.5C17.5 20.6716 16.8284 20 16 20C15.1716 20 14.5 20.6716 14.5 21.5Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 2C12.134 2 9 5.13401 9 9V10.4578C4.94289 11.7321 2 15.5224 2 20C2 25.5228 6.47715 30 12 30H20C25.5228 30 30 25.5228 30 20C30 15.5224 27.0571 11.7321 23 10.4578V9C23 5.13401 19.866 2 16 2ZM11.9937 12H20.0063C24.4217 12.0034 28 15.5838 28 20C28 24.4183 24.4183 28 20 28H12C7.58172 28 4 24.4183 4 20C4 15.5838 7.57831 12.0034 11.9937 12ZM20.0071 10H21V9C21 6.23858 18.7614 4 16 4C13.2386 4 11 6.23858 11 9V10H11.9929C11.9953 10 11.9976 10 12 10H20C20.0024 10 20.0047 10 20.0071 10Z"
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
        d="M16 24C14.8954 24 14 23.1046 14 22C14 20.8954 14.8954 20 16 20C17.1046 20 18 20.8954 18 22C18 23.1046 17.1046 24 16 24Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 19C1.5 14.6185 4.46616 10.9298 8.5 9.83238V9C8.5 4.85786 11.8579 1.5 16 1.5C20.1421 1.5 23.5 4.85786 23.5 9V9.83238C27.5338 10.9298 30.5 14.6185 30.5 19V21C30.5 26.2467 26.2467 30.5 21 30.5H11C5.75329 30.5 1.5 26.2467 1.5 21V19ZM20.5 9V9.5L11.5 9.5V9C11.5 6.51472 13.5147 4.5 16 4.5C18.4853 4.5 20.5 6.51472 20.5 9ZM4.5 19C4.5 15.4101 7.41015 12.5 11 12.5L21.0021 12.5C24.591 12.5011 27.5 15.4108 27.5 19V21C27.5 24.5899 24.5899 27.5 21 27.5H11C7.41015 27.5 4.5 24.5898 4.5 21L4.5 19Z"
        fill={fill}
      />
    </Svg>
  );
};
LockOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
LockOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default LockOutlined;
