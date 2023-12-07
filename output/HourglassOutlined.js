import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const HourglassOutlined = (props) => {
  const { size, weight, fill } = props;

  if (weight === "REGULAR") {
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M12.5 9C12.0955 9 11.7309 9.24364 11.5761 9.61732C11.4213 9.99099 11.5069 10.4211 11.7929 10.7071L15.7929 14.7071C16.1834 15.0976 16.8166 15.0976 17.2071 14.7071L21.2071 10.7071C21.4931 10.4211 21.5787 9.99099 21.4239 9.61732C21.2691 9.24364 20.9045 9 20.5 9H12.5Z"
          fill={fill}
        />
        <Path
          d="M17.5 18C17.5 18.5523 17.0523 19 16.5 19C15.9477 19 15.5 18.5523 15.5 18C15.5 17.4477 15.9477 17 16.5 17C17.0523 17 17.5 17.4477 17.5 18Z"
          fill={fill}
        />
        <Path
          d="M16.5 23C17.0523 23 17.5 22.5523 17.5 22C17.5 21.4477 17.0523 21 16.5 21C15.9477 21 15.5 21.4477 15.5 22C15.5 22.5523 15.9477 23 16.5 23Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.5 3C5.5 2.44772 5.94772 2 6.5 2H26.5C27.0523 2 27.5 2.44772 27.5 3C27.5 3.55228 27.0523 4 26.5 4H25.5V7.68629C25.5 10.0732 24.5518 12.3624 22.864 14.0503L20.9142 16L22.864 17.9497C24.5518 19.6376 25.5 21.9268 25.5 24.3137V28H26.5C27.0523 28 27.5 28.4477 27.5 29C27.5 29.5523 27.0523 30 26.5 30H6.5C5.94772 30 5.5 29.5523 5.5 29C5.5 28.4477 5.94772 28 6.5 28H7.5V24.3137C7.5 21.9268 8.44821 19.6376 10.136 17.9497L12.0858 16L10.136 14.0503C8.44821 12.3624 7.5 10.0732 7.5 7.68629V4H6.5C5.94772 4 5.5 3.55228 5.5 3ZM23.5 28V24.3137C23.5 22.4572 22.7625 20.6767 21.4497 19.364L18.0858 16L21.4497 12.636C22.7625 11.3233 23.5 9.54281 23.5 7.68629V4H9.5V7.68629C9.5 9.54281 10.2375 11.3233 11.5503 12.636L14.9142 16L11.5503 19.364C10.2375 20.6767 9.5 22.4572 9.5 24.3137V28H11C11 26.6193 12.1193 25.5 13.5 25.5H19.5C20.8807 25.5 22 26.6193 22 28H23.5Z"
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
        d="M11.0761 9.61732C11.2309 9.24364 11.5955 9 12 9H20C20.4045 9 20.7691 9.24364 20.9239 9.61732C21.0787 9.99099 20.9931 10.4211 20.7071 10.7071L16.7071 14.7071C16.3166 15.0976 15.6834 15.0976 15.2929 14.7071L11.2929 10.7071C11.0069 10.4211 10.9213 9.99099 11.0761 9.61732Z"
        fill={fill}
      />
      <Path
        d="M16 20.7567C16.8284 20.7567 17.5 20.0851 17.5 19.2567C17.5 18.4283 16.8284 17.7567 16 17.7567C15.1716 17.7567 14.5 18.4283 14.5 19.2567C14.5 20.0851 15.1716 20.7567 16 20.7567Z"
        fill={fill}
      />
      <Path
        d="M16 24.7567C16.8284 24.7567 17.5 24.0851 17.5 23.2567C17.5 22.4283 16.8284 21.7567 16 21.7567C15.1716 21.7567 14.5 22.4283 14.5 23.2567C14.5 24.0851 15.1716 24.7567 16 24.7567Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 3C4.5 2.17157 5.17157 1.5 6 1.5H26C26.8284 1.5 27.5 2.17157 27.5 3C27.5 3.82843 26.8284 4.5 26 4.5H25.5V7.68629C25.5 10.2058 24.4991 12.6222 22.7175 14.4038L21.1213 16L22.7175 17.5962C24.4991 19.3778 25.5 21.7942 25.5 24.3137V27.5H26C26.8284 27.5 27.5 28.1716 27.5 29C27.5 29.8284 26.8284 30.5 26 30.5H6C5.17157 30.5 4.5 29.8284 4.5 29C4.5 28.1716 5.17157 27.5 6 27.5H6.5V24.3137C6.5 21.7942 7.50089 19.3778 9.28249 17.5962L10.8787 16L9.28248 14.4038C7.50089 12.6222 6.5 10.2058 6.5 7.68629V4.5H6C5.17157 4.5 4.5 3.82843 4.5 3ZM9.5 24.3137V27.5H11.063C11.1087 27.3226 11.178 27.1548 11.2676 27C11.6134 26.4022 12.2597 26 13 26H19C19.7403 26 20.3866 26.4022 20.7324 27C20.822 27.1548 20.8913 27.3226 20.937 27.5H22.5V24.3137C22.5 22.5898 21.8152 20.9365 20.5962 19.7175L18.2929 17.4142C17.5118 16.6332 17.5118 15.3668 18.2929 14.5858L20.5962 12.2825C21.8152 11.0635 22.5 9.4102 22.5 7.68629V4.5H9.5V7.68629C9.5 9.4102 10.1848 11.0635 11.4038 12.2825L13.7071 14.5858C14.4882 15.3668 14.4882 16.6332 13.7071 17.4142L11.4038 19.7175C10.1848 20.9365 9.5 22.5898 9.5 24.3137Z"
        fill={fill}
      />
    </Svg>
  );
};

HourglassOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

HourglassOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

HourglassOutlined.displayName = "HourglassOutlined";

export default HourglassOutlined;