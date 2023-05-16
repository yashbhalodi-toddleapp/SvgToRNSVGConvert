import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const InformationOutlined = (props) => {
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
          d="M19 22C19 22.5523 18.5523 23 18 23H16C15.4477 23 15 22.5523 15 22V16H14C13.4477 16 13 15.5523 13 15C13 14.4477 13.4477 14 14 14H16C16.5523 14 17 14.4477 17 15V21H18C18.5523 21 19 21.4477 19 22Z"
          fill={fill}
        />
        <Path
          d="M16 9C16.8284 9 17.5 9.67158 17.5 10.5C17.5 11.3284 16.8284 12 16 12C15.1716 12 14.5 11.3284 14.5 10.5C14.5 9.67157 15.1716 9 16 9Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 16C2 8.26801 8.26802 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16ZM16 4C9.37259 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4Z"
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
        d="M19.5 22C19.5 22.8284 18.8284 23.5 18 23.5H16C15.1716 23.5 14.5 22.8284 14.5 22V16.5H14C13.1716 16.5 12.5 15.8284 12.5 15C12.5 14.1716 13.1716 13.5 14 13.5H16C16.8284 13.5 17.5 14.1716 17.5 15V20.5H18C18.8284 20.5 19.5 21.1716 19.5 22Z"
        fill={fill}
      />
      <Path
        d="M15.2543 8.10895C16.3588 8.10895 17.2543 9.00438 17.2543 10.1089C17.2543 11.2135 16.3588 12.1089 15.2543 12.1089C14.1497 12.1089 13.2543 11.2135 13.2543 10.1089C13.2543 9.00438 14.1497 8.10895 15.2543 8.10895Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 16C1.5 7.99187 7.99187 1.5 16 1.5C24.0081 1.5 30.5 7.99187 30.5 16C30.5 24.0081 24.0081 30.5 16 30.5C7.99187 30.5 1.5 24.0081 1.5 16ZM16 4.5C9.64873 4.5 4.5 9.64872 4.5 16C4.5 22.3513 9.64873 27.5 16 27.5C22.3513 27.5 27.5 22.3513 27.5 16C27.5 9.64873 22.3513 4.5 16 4.5Z"
        fill={fill}
      />
    </Svg>
  );
};
InformationOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
InformationOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default InformationOutlined;
