import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const LoudspeakerFilled = (props) => {
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
        d="M29 7.00268L29 23.1041C29 25.7902 26.4051 27.7129 23.8354 26.9308L14 23.9375V25.5286C14 27.9175 11.6596 29.6044 9.3932 28.8489L7.3932 28.1823C5.96401 27.7059 5 26.3684 5 24.8619V21.1983L4.83535 21.1482C3.15109 20.6356 2 19.0821 2 17.3215V12.7853C2 11.0247 3.15109 9.4712 4.83535 8.95859L23.8354 3.17598C26.4051 2.39389 29 4.31657 29 7.00268ZM8 22.1114V24.8619C8 25.0771 8.13772 25.2682 8.34189 25.3362L10.3419 26.0029C10.6657 26.1108 11 25.8698 11 25.5286V23.0244L8 22.1114Z"
        fill={fill}
      />
    </Svg>
  );
};
LoudspeakerFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
LoudspeakerFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default LoudspeakerFilled;
