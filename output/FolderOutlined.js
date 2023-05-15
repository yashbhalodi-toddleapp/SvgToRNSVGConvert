import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const FolderOutlined = (props) => {
  const { size, weight } = props;

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
          d="M16 9C15.4696 9 14.9609 8.78929 14.5858 8.41421L12.1716 6H6C4.89543 6 4 6.89543 4 8V24C4 25.1046 4.89543 26 6 26H26C27.1046 26 28 25.1046 28 24V11C28 9.89543 27.1046 9 26 9H16ZM16 7L13.5858 4.58579C13.2107 4.21071 12.702 4 12.1716 4H6C3.79086 4 2 5.79086 2 8V24C2 26.2091 3.79086 28 6 28H26C28.2091 28 30 26.2091 30 24V11C30 8.79086 28.2091 7 26 7H16Z"
          fill="#808080"
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
        d="M1.5 9C1.5 5.96243 3.96243 3.5 7 3.5H11.6716C12.5998 3.5 13.4901 3.86875 14.1464 4.52513L15.9749 6.35355C16.0686 6.44732 16.1958 6.5 16.3284 6.5H25C28.0376 6.5 30.5 8.96243 30.5 12V23C30.5 26.0376 28.0376 28.5 25 28.5H7C3.96243 28.5 1.5 26.0376 1.5 23V9ZM7 6.5C5.61929 6.5 4.5 7.61929 4.5 9V23C4.5 24.3807 5.61929 25.5 7 25.5H25C26.3807 25.5 27.5 24.3807 27.5 23V12C27.5 10.6193 26.3807 9.5 25 9.5H16.3284C15.4002 9.5 14.5099 9.13125 13.8536 8.47487L12.0251 6.64645C11.9314 6.55268 11.8042 6.5 11.6716 6.5H7Z"
        fill="#808080"
      />
    </Svg>
  );
};
FolderOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
FolderOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default FolderOutlined;
