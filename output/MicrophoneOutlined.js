import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const MicrophoneOutlined = (props) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 9C8.5 4.85786 11.8579 1.5 16 1.5C20.1421 1.5 23.5 4.85786 23.5 9V14C23.5 18.1421 20.1421 21.5 16 21.5C11.8579 21.5 8.5 18.1421 8.5 14V9ZM16 4.5C13.5147 4.5 11.5 6.51472 11.5 9V14C11.5 16.4853 13.5147 18.5 16 18.5C18.4853 18.5 20.5 16.4853 20.5 14V9C20.5 6.51472 18.4853 4.5 16 4.5ZM14.5 26.4109C8.30366 25.6699 3.5 20.3959 3.5 14V13C3.5 12.1716 4.17157 11.5 5 11.5C5.82843 11.5 6.5 12.1716 6.5 13V14C6.5 19.2467 10.7533 23.5 16 23.5C21.2467 23.5 25.5 19.2467 25.5 14V13C25.5 12.1716 26.1716 11.5 27 11.5C27.8284 11.5 28.5 12.1716 28.5 13V14C28.5 20.3959 23.6963 25.6699 17.5 26.4109V27.5H21C21.8284 27.5 22.5 28.1716 22.5 29C22.5 29.8284 21.8284 30.5 21 30.5H16H11C10.1716 30.5 9.5 29.8284 9.5 29C9.5 28.1716 10.1716 27.5 11 27.5H14.5V26.4109Z"
        fill="#808080"
      />
    </Svg>
  );
};
MicrophoneOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
MicrophoneOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default MicrophoneOutlined;
