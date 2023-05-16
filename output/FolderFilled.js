import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const FolderFilled = (props) => {
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
        d="M2 9C2 6.23858 4.23858 4 7 4H10H12.1716C12.702 4 13.2107 4.21071 13.5858 4.58579L16 7H25C27.7614 7 30 9.23858 30 12V23C30 25.7614 27.7614 28 25 28H7C4.23858 28 2 25.7614 2 23V9Z"
        fill={fill}
      />
    </Svg>
  );
};

FolderFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

FolderFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default FolderFilled;
