import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ProfileOutlined = (props) => {
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
          d="M16 3C12.134 3 9 6.13401 9 10C9 12.3286 10.1371 14.3917 11.8862 15.6643C7.38329 17.1651 3.97673 21.0626 3.17812 25.8436C2.87541 27.6559 4.39765 29 5.99994 29H25.9999C27.6022 29 29.1245 27.6559 28.8218 25.8436C28.0232 21.0627 24.6166 17.1652 20.1137 15.6643C21.8629 14.3917 23 12.3286 23 10C23 6.13401 19.866 3 16 3ZM11 10C11 7.23858 13.2386 5 16 5C18.7614 5 21 7.23858 21 10C21 12.7614 18.7614 15 16 15C13.2386 15 11 12.7614 11 10ZM5.15079 26.1731C6.02031 20.9676 10.5478 17 15.9999 17C21.4521 17 25.9796 20.9676 26.8491 26.1731C26.9103 26.5398 26.6068 27 25.9999 27H5.99994C5.3931 27 5.08954 26.5398 5.15079 26.1731Z"
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
        d="M10.898 15.4973C7.31996 16.959 4.5105 19.9119 3.23995 23.5817C2.68096 25.1962 3.13953 26.7411 4.115 27.8233C5.06338 28.8755 6.49203 29.5 7.99991 29.5H23.9999C25.5078 29.5 26.9364 28.8755 27.8848 27.8233C28.8603 26.7411 29.3189 25.1962 28.7599 23.5817C27.4893 19.9119 24.6799 16.959 21.1019 15.4973C22.577 14.1277 23.4999 12.1716 23.4999 10C23.4999 5.85786 20.1421 2.5 15.9999 2.5C11.8578 2.5 8.49994 5.85786 8.49994 10C8.49994 12.1716 9.42291 14.1277 10.898 15.4973ZM6.07485 24.5632C7.49889 20.45 11.4068 17.5 15.9999 17.5C20.593 17.5 24.5009 20.45 25.925 24.5632C26.0887 25.0362 25.9806 25.4551 25.6564 25.8148C25.3051 26.2045 24.7012 26.5 23.9999 26.5H7.99991C7.29865 26.5 6.69467 26.2045 6.34339 25.8148C6.0192 25.4551 5.91108 25.0362 6.07485 24.5632ZM15.9999 14.5C13.5146 14.5 11.4999 12.4853 11.4999 10C11.4999 7.51472 13.5147 5.5 15.9999 5.5C18.4852 5.5 20.4999 7.51472 20.4999 10C20.4999 12.4853 18.4852 14.5 15.9999 14.5Z"
        fill={fill}
      />
    </Svg>
  );
};

ProfileOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ProfileOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ProfileOutlined.displayName = "ProfileOutlined";

export default ProfileOutlined;
