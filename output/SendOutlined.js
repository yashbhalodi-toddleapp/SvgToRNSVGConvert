import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const SendOutlined = (props) => {
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
        d="M5.49949 2.79472C5.97958 2.43905 6.62497 2.40223 7.1424 2.70097L27.927 14.701C28.3911 14.9689 28.677 15.4641 28.677 16C28.677 16.5359 28.3911 17.0311 27.927 17.299L7.14241 29.299C6.62497 29.5978 5.97959 29.5609 5.4995 29.2053C5.01941 28.8496 4.79617 28.2429 4.93123 27.6609L7.63715 16L4.93122 4.33907C4.79617 3.75705 5.0194 3.15039 5.49949 2.79472ZM10.3688 17.5L8.63458 24.9734L21.5789 17.5H10.3688ZM21.5789 14.5L8.63457 7.02658L10.3688 14.5H21.5789Z"
        fill={fill}
      />
    </Svg>
  );
};
SendOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
SendOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default SendOutlined;
