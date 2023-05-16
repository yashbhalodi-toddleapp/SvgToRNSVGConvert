import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const CameraOutlined = (props) => {
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
        d="M22.5 13C22.5 12.1716 23.1716 11.5 24 11.5H25C25.8284 11.5 26.5 12.1716 26.5 13C26.5 13.8284 25.8284 14.5 25 14.5H24C23.1716 14.5 22.5 13.8284 22.5 13Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 10.5C12.4101 10.5 9.5 13.4101 9.5 17C9.5 20.5899 12.4101 23.5 16 23.5C19.5899 23.5 22.5 20.5899 22.5 17C22.5 13.4101 19.5899 10.5 16 10.5ZM12.5 17C12.5 15.067 14.067 13.5 16 13.5C17.933 13.5 19.5 15.067 19.5 17C19.5 18.933 17.933 20.5 16 20.5C14.067 20.5 12.5 18.933 12.5 17Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.10557 4.43475C9.69845 3.24901 10.9104 2.5 12.2361 2.5H19.7639C21.0896 2.5 22.3016 3.24901 22.8944 4.43475L23.7889 6.22361C23.8736 6.393 24.0467 6.5 24.2361 6.5H25C28.0376 6.5 30.5 8.96243 30.5 12V24C30.5 27.0376 28.0376 29.5 25 29.5H7C3.96243 29.5 1.5 27.0376 1.5 24V12C1.5 8.96243 3.96243 6.5 7 6.5H7.76393C7.95332 6.5 8.12645 6.393 8.21115 6.22361L9.10557 4.43475ZM12.2361 5.5C12.0467 5.5 11.8736 5.607 11.7889 5.77639L10.8944 7.56525C10.3016 8.75099 9.08963 9.5 7.76393 9.5H7C5.61929 9.5 4.5 10.6193 4.5 12V24C4.5 25.3807 5.61929 26.5 7 26.5H25C26.3807 26.5 27.5 25.3807 27.5 24V12C27.5 10.6193 26.3807 9.5 25 9.5H24.2361C22.9104 9.5 21.6984 8.75099 21.1056 7.56525L20.2111 5.77639C20.1264 5.607 19.9533 5.5 19.7639 5.5H12.2361Z"
        fill={fill}
      />
    </Svg>
  );
};
CameraOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
CameraOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default CameraOutlined;
