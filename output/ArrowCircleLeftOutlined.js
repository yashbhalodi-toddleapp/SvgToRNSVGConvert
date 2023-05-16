import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const ArrowCircleLeftOutlined = (props) => {
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
        d="M13.6213 17.5H22C22.8284 17.5 23.5 16.8284 23.5 16C23.5 15.1716 22.8284 14.5 22 14.5L13.6213 14.5L15.0607 13.0607C15.6464 12.4749 15.6464 11.5251 15.0607 10.9393C14.4749 10.3536 13.5251 10.3536 12.9393 10.9393L8.93934 14.9393C8.93396 14.9447 8.92862 14.9501 8.92333 14.9556C8.66131 15.2257 8.5 15.594 8.5 16C8.5 16.4076 8.6626 16.7773 8.92647 17.0476C8.93073 17.052 8.93502 17.0563 8.93934 17.0607L12.9393 21.0607C13.5251 21.6464 14.4749 21.6464 15.0607 21.0607C15.6464 20.4749 15.6464 19.5251 15.0607 18.9393L13.6213 17.5Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 16C1.5 7.99187 7.99187 1.5 16 1.5C24.0081 1.5 30.5 7.99187 30.5 16C30.5 24.0081 24.0081 30.5 16 30.5C7.99187 30.5 1.5 24.0081 1.5 16ZM16 4.5C9.64873 4.5 4.5 9.64873 4.5 16C4.5 22.3513 9.64873 27.5 16 27.5C22.3513 27.5 27.5 22.3513 27.5 16C27.5 9.64872 22.3513 4.5 16 4.5Z"
        fill={fill}
      />
    </Svg>
  );
};
ArrowCircleLeftOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
ArrowCircleLeftOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default ArrowCircleLeftOutlined;
