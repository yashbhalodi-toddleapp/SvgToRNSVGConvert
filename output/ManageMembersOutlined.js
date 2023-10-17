import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ManageMembersOutlined = (props) => {
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
          d="M7.50159 10C7.50159 6.13401 10.6356 3 14.5016 3C18.3676 3 21.5016 6.13401 21.5016 10C21.5016 13.866 18.3676 17 14.5016 17C14.4575 17 14.4135 16.9996 14.3695 16.9988C9.61417 17.0548 5.58203 20.1308 4.10409 24.3996C3.87445 25.0629 4.04098 25.6694 4.47371 26.1495C4.92451 26.6497 5.66594 27 6.50163 27H14.5016C15.0539 27 15.5016 27.4477 15.5016 28C15.5016 28.5523 15.0539 29 14.5016 29H6.50163C5.12819 29 3.83698 28.4303 2.98812 27.4886C2.1212 26.5268 1.72104 25.1695 2.21415 23.7452C3.5327 19.9368 6.57221 16.9419 10.4038 15.6758C8.64556 14.4042 7.50159 12.3357 7.50159 10ZM14.5016 5C11.7402 5 9.50159 7.23858 9.50159 10C9.50159 12.7614 11.7402 15 14.5016 15C17.263 15 19.5016 12.7614 19.5016 10C19.5016 7.23858 17.263 5 14.5016 5Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.5016 16.9999C23.5016 16.4477 23.0539 15.9999 22.5016 15.9999C21.9493 15.9999 21.5016 16.4477 21.5016 16.9999V18.1C20.8633 18.2296 20.2691 18.4808 19.7443 18.8283L18.9662 18.0502C18.5756 17.6596 17.9425 17.6596 17.552 18.0502C17.1614 18.4407 17.1614 19.0738 17.552 19.4644L18.3301 20.2425C17.9824 20.7673 17.7312 21.3615 17.6016 21.9999H16.5016C15.9493 21.9999 15.5016 22.4477 15.5016 22.9999C15.5016 23.5522 15.9493 23.9999 16.5016 23.9999H17.6016C17.7312 24.6383 17.9824 25.2326 18.33 25.7574L17.5519 26.5354C17.1614 26.926 17.1614 27.5591 17.5519 27.9497C17.9424 28.3402 18.5756 28.3402 18.9661 27.9497L19.7442 27.1716C20.269 27.5192 20.8632 27.7704 21.5016 27.9V28.9999C21.5016 29.5522 21.9493 29.9999 22.5016 29.9999C23.0539 29.9999 23.5016 29.5522 23.5016 28.9999V27.9C24.14 27.7704 24.7343 27.5192 25.2591 27.1715L26.0372 27.9497C26.4277 28.3402 27.0609 28.3402 27.4514 27.9497C27.842 27.5591 27.842 26.926 27.4514 26.5354L26.6733 25.7573C27.0208 25.2325 27.272 24.6383 27.4016 23.9999H28.5016C29.0539 23.9999 29.5016 23.5522 29.5016 22.9999C29.5016 22.4477 29.0539 21.9999 28.5016 21.9999H27.4016C27.272 21.3616 27.0208 20.7674 26.6732 20.2426L27.4514 19.4644C27.8419 19.0738 27.8419 18.4407 27.4514 18.0502C27.0608 17.6596 26.4277 17.6596 26.0372 18.0502L25.2589 18.8284C24.7341 18.4808 24.1399 18.2296 23.5016 18.1V16.9999ZM20.377 20.8819C19.836 21.4246 19.5016 22.1732 19.5016 23C19.5016 23.8239 19.8337 24.5702 20.3713 25.1123L20.3803 25.1212L20.3892 25.1302C20.9293 25.6658 21.6719 25.9974 22.4919 26L22.5016 25.9999L22.5113 26C24.1637 25.9948 25.5016 24.6536 25.5016 23C25.5016 21.3431 24.1584 20 22.5016 20C21.6749 20 20.9263 20.3344 20.3837 20.8753L20.3804 20.8786L20.377 20.8819Z"
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
        d="M14.9976 17.5C10.4056 17.5011 6.49876 20.4508 5.07497 24.5632C4.9112 25.0362 5.01932 25.4551 5.34351 25.8148C5.6948 26.2045 6.29877 26.5 7.00003 26.5H15C15.8285 26.5 16.5 27.1716 16.5 28C16.5 28.8284 15.8285 29.5 15 29.5H7.00003C5.49215 29.5 4.0635 28.8755 3.11513 27.8233C2.13965 26.7411 1.68109 25.1962 2.24007 23.5817C3.51062 19.9119 6.32007 16.959 9.89808 15.4973C8.42301 14.1277 7.50003 12.1716 7.50003 10C7.50003 5.85786 10.8579 2.5 15 2.5C19.1422 2.5 22.5 5.85786 22.5 10C22.5 14.1421 19.1422 17.5 15 17.5L14.9976 17.5ZM15 14.5C17.4853 14.5 19.5 12.4853 19.5 10C19.5 7.51472 17.4853 5.5 15 5.5C12.5148 5.5 10.5 7.51472 10.5 10C10.5 12.4853 12.5148 14.5 15 14.5Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.8032 25.6815C28.01 25.3119 28.1753 24.916 28.293 24.5H29C29.8285 24.5 30.5 23.8284 30.5 23C30.5 22.1716 29.8285 21.5 29 21.5H28.293C28.1753 21.084 28.01 20.688 27.8032 20.3184L28.3034 19.8182C28.8891 19.2324 28.8891 18.2827 28.3034 17.6969C27.7176 17.1111 26.7678 17.1111 26.182 17.6969L25.6819 18.197C25.3122 17.9901 24.9161 17.8247 24.5 17.707V17C24.5 16.1716 23.8285 15.5 23 15.5C22.1716 15.5 21.5 16.1716 21.5 17V17.707C21.084 17.8247 20.688 17.9901 20.3184 18.1969L19.8181 17.6967C19.2323 17.1109 18.2826 17.1109 17.6968 17.6967C17.111 18.2824 17.111 19.2322 17.6968 19.818L18.197 20.3182C17.9902 20.6879 17.8247 21.0839 17.7071 21.5H17C16.1716 21.5 15.5 22.1716 15.5 23C15.5 23.8284 16.1716 24.5 17 24.5H17.7071C17.8247 24.916 17.9901 25.312 18.197 25.6817L17.6968 26.1819C17.111 26.7677 17.111 27.7174 17.6968 28.3032C18.2825 28.889 19.2323 28.889 19.8181 28.3032L20.3183 27.803C20.688 28.0099 21.084 28.1753 21.5 28.293V29C21.5 29.8284 22.1716 30.5 23 30.5C23.8285 30.5 24.5 29.8284 24.5 29V28.293C24.9162 28.1753 25.3122 28.0098 25.682 27.8029L26.1821 28.303C26.7678 28.8888 27.7176 28.8888 28.3034 28.303C28.8892 27.7172 28.8892 26.7675 28.3034 26.1817L27.8032 25.6815ZM25.5 23C25.5 22.3154 25.2249 21.6952 24.7792 21.2437L24.7678 21.2324L24.7568 21.2213C24.3053 20.7753 23.6848 20.5 23 20.5L22.9989 20.5C22.31 20.5003 21.6862 20.7793 21.2342 21.2303L21.2323 21.2322L21.2303 21.2342C20.7791 21.6864 20.5 22.3106 20.5 23C20.5 23.6861 20.7764 24.3077 21.224 24.7594L21.2323 24.7677L21.2406 24.776C21.6923 25.2236 22.3139 25.5 23 25.5C23.6837 25.5 24.3033 25.2256 24.7546 24.7809C24.759 24.7764 24.7634 24.7719 24.7678 24.7675C24.7722 24.7631 24.7767 24.7587 24.7811 24.7543C25.2257 24.303 25.5 23.6835 25.5 23Z"
        fill={fill}
      />
    </Svg>
  );
};

ManageMembersOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ManageMembersOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ManageMembersOutlined.displayName = "ManageMembersOutlined";

export default ManageMembersOutlined;