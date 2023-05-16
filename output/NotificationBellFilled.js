import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const NotificationBellFilled = (props) => {
  const { size, weight, fill } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6 13C6 7.47715 10.4772 3 16 3C21.5228 3 26 7.47715 26 13V23H27C27.5523 23 28 23.4477 28 24C28 24.5523 27.5523 25 27 25H5C4.44772 25 4 24.5523 4 24C4 23.4477 4.44772 23 5 23H6V13Z"
        fill={fill}
      />
      <Path
        d="M16 29C14.3714 29 12.9194 28.2129 12.0053 27H19.9947C19.0806 28.2129 17.6286 29 16 29Z"
        fill={fill}
      />
    </Svg>
  );
};

NotificationBellFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

NotificationBellFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default NotificationBellFilled;
