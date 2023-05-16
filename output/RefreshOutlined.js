import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const RefreshOutlined = (props) => {
  const { size, weight } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M27.5001 3C27.5001 2.17157 26.8286 1.5 26.0001 1.5C25.1717 1.5 24.5001 2.17157 24.5001 3V5.5107C19.198 1.2035 11.3903 1.518 6.45412 6.45418C3.81837 9.08992 2.50006 12.5475 2.50006 16.0001C2.50006 19.4528 3.81837 22.9103 6.45412 25.5461C11.7262 30.8181 20.2739 30.8181 25.546 25.5461C28.1817 22.9103 29.5 19.4527 29.5 16.0001C29.5 15.1717 28.8285 14.5001 28 14.5001C27.1716 14.5001 26.5 15.1717 26.5 16.0001C26.5 18.6896 25.4752 21.3742 23.4247 23.4247C19.3242 27.5252 12.6759 27.5252 8.57544 23.4247C6.52489 21.3742 5.50006 18.6896 5.50006 16.0001C5.50006 13.3106 6.52489 10.626 8.57544 8.5755C12.279 4.87192 18.061 4.51342 22.1669 7.5H20.0001C19.1717 7.5 18.5001 8.17157 18.5001 9C18.5001 9.82843 19.1717 10.5 20.0001 10.5L25.9515 10.5C25.9643 10.5002 25.977 10.5002 25.9897 10.5H26.0001C26.8285 10.5 27.5001 9.82843 27.5001 9V3Z"
        fill={fill}
      />
    </Svg>
  );
};
RefreshOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
RefreshOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default RefreshOutlined;
