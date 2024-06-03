import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const HelpOutlined = (props) => {
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
          d="M14.5 22.5C14.5 23.3284 15.1716 24 16 24C16.8284 24 17.5 23.3284 17.5 22.5C17.5 21.6716 16.8284 21 16 21C15.1716 21 14.5 21.6716 14.5 22.5Z"
          fill={fill}
        />
        <Path
          d="M14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12C18 12.6372 17.7032 13.2045 17.2362 13.5723C16.8002 13.9159 16.258 14.3592 15.8263 14.8902C15.3902 15.4265 15 16.1334 15 17V18C15 18.5523 15.4477 19 16 19C16.5523 19 17 18.5523 17 18V17C17 16.762 17.1035 16.4896 17.3781 16.1519C17.6571 15.8088 18.0424 15.4834 18.474 15.1433C19.4015 14.4125 20 13.2759 20 12C20 9.79086 18.2091 8 16 8C13.7909 8 12 9.79086 12 12C12 12.5523 12.4477 13 13 13C13.5523 13 14 12.5523 14 12Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16ZM16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4Z"
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
        d="M14 23C14 24.1046 14.8954 25 16 25C17.1046 25 18 24.1046 18 23C18 21.8954 17.1046 21 16 21C14.8954 21 14 21.8954 14 23Z"
        fill={fill}
      />
      <Path
        d="M14.5 12C14.5 11.1716 15.1716 10.5 16 10.5C16.8284 10.5 17.5 11.1716 17.5 12C17.5 12.4775 17.2786 12.9024 16.9268 13.1796C16.4896 13.524 15.9082 13.9969 15.4383 14.5748C14.9619 15.1608 14.5 15.9763 14.5 17V18C14.5 18.8284 15.1716 19.5 16 19.5C16.8284 19.5 17.5 18.8284 17.5 18V17C17.5 16.9191 17.5319 16.7554 17.766 16.4673C18.0068 16.1712 18.3529 15.8752 18.7834 15.5361C19.8261 14.7145 20.5 13.4355 20.5 12C20.5 9.51472 18.4853 7.5 16 7.5C13.5147 7.5 11.5 9.51472 11.5 12C11.5 12.8284 12.1716 13.5 13 13.5C13.8284 13.5 14.5 12.8284 14.5 12Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 16C1.5 7.99187 7.99187 1.5 16 1.5C24.0081 1.5 30.5 7.99187 30.5 16C30.5 24.0081 24.0081 30.5 16 30.5C7.99187 30.5 1.5 24.0081 1.5 16ZM16 4.5C9.64873 4.5 4.5 9.64873 4.5 16C4.5 22.3513 9.64873 27.5 16 27.5C22.3513 27.5 27.5 22.3513 27.5 16C27.5 9.64873 22.3513 4.5 16 4.5Z"
        fill={fill}
      />
    </Svg>
  );
};

HelpOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

HelpOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

HelpOutlined.displayName = "HelpOutlined";

export default HelpOutlined;
