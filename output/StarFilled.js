import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const StarFilled = (props) => {
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
        d="M17.868 3.2865C17.1867 1.57116 14.8136 1.57117 14.1324 3.2865L11.2768 10.4765C11.2707 10.4919 11.2633 10.4992 11.26 10.5018L3.8531 11.1237C2.002 11.2791 1.40738 13.5841 2.68903 14.7338L8.33632 19.7998C8.34091 19.8039 8.34893 19.8136 8.3544 19.8312C8.35989 19.8489 8.36094 19.869 8.35647 19.8886L6.63113 27.4633C6.4339 28.3292 6.78961 29.131 7.39187 29.5893C7.99941 30.0515 8.8878 30.1792 9.66341 29.6831L16.0002 25.6298L22.337 29.6831C23.1126 30.1792 24.001 30.0515 24.6085 29.5893C25.2108 29.131 25.5665 28.3292 25.3692 27.4633L23.6439 19.8886C23.6394 19.869 23.6405 19.8489 23.646 19.8312C23.6515 19.8136 23.6595 19.8039 23.6641 19.7998L29.3113 14.7338C30.593 13.5841 29.9984 11.2791 28.1473 11.1237L20.7403 10.5018C20.7371 10.4992 20.7297 10.4919 20.7236 10.4765L17.868 3.2865Z"
        fill={fill}
      />
    </Svg>
  );
};

StarFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

StarFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default StarFilled;
