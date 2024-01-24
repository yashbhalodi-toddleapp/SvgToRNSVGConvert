import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";

const MailColored = (props) => {
  const { size } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M1.87445 3.75L10.5103 11.7216C11.6902 12.8107 13.5087 12.8107 14.6886 11.7216L23.3245 3.75V19.15C23.3245 19.7575 22.832 20.25 22.2245 20.25L2.97445 20.25C2.36694 20.25 1.87445 19.7575 1.87445 19.15V3.75Z"
        fill="#FFAB00"
        stroke="#FFAB00"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5109 12.2784L1.87497 20.25H23.325L14.6891 12.2784C13.5092 11.1894 11.6907 11.1894 10.5109 12.2784Z"
        fill="#FFBB33"
        stroke="#FFBB33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5109 11.7216L1.87497 3.74996H23.325L14.6891 11.7216C13.5092 12.8106 11.6907 12.8106 10.5109 11.7216Z"
        fill="#FFDF99"
        stroke="#FFDF99"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

MailColored.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
};

MailColored.defaultProps = {
  size: 20,
};

MailColored.displayName = "MailColored";

export default MailColored;
