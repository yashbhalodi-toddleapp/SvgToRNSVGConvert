import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const TickSmall = (props) => {
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
        d="M24.0607 9.93934C24.6464 10.5251 24.6464 11.4749 24.0607 12.0607L14.0607 22.0607C13.4749 22.6464 12.5251 22.6464 11.9393 22.0607L6.93934 17.0607C6.35355 16.4749 6.35355 15.5251 6.93934 14.9393C7.52513 14.3536 8.47487 14.3536 9.06066 14.9393L13 18.8787L21.9393 9.93934C22.5251 9.35355 23.4749 9.35355 24.0607 9.93934Z"
        fill={fill}
      />
    </Svg>
  );
};
TickSmall.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
TickSmall.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default TickSmall;
