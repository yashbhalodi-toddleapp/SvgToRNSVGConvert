import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";

const GoogleColored = (props) => {
  const { size } = props;
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
        d="M15.9999 8.02664C18.441 8.02664 20.0877 9.08109 21.0265 9.9622L24.6954 6.37997C22.4421 4.28552 19.5099 2.99996 15.9999 2.99996C10.9154 2.99996 6.52427 5.91775 4.38649 10.1644L8.58984 13.4289C9.64428 10.2944 12.5621 8.02664 15.9999 8.02664Z"
        fill="#F75961"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.48 16.2889C28.48 15.22 28.3933 14.44 28.2055 13.6311H15.9999V18.4555H23.1644C23.0199 19.6544 22.2399 21.46 20.5066 22.6733L24.6088 25.8511C27.0644 23.5833 28.48 20.2467 28.48 16.2889Z"
        fill="#4285F4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.60434 18.5711C8.32989 17.7622 8.171 16.8955 8.171 16C8.171 15.1044 8.32989 14.2378 8.58989 13.4289L4.38655 10.1644C3.50543 11.9266 2.99988 13.9055 2.99988 16C2.99988 18.0944 3.50543 20.0733 4.38655 21.8356L8.60434 18.5711Z"
        fill="#FFAB00"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9999 29C19.5099 29 22.4566 27.8445 24.6088 25.8511L20.5066 22.6734C19.4088 23.4389 17.9354 23.9734 15.9999 23.9734C12.5621 23.9734 9.6443 21.7056 8.60429 18.5711L4.40095 21.8356C6.53873 26.0823 10.9154 29 15.9999 29Z"
        fill="#34A853"
      />
    </Svg>
  );
};

GoogleColored.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
};

GoogleColored.defaultProps = {
  size: 20,
};
export default GoogleColored;
