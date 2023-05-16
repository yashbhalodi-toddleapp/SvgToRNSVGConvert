import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const PlayFilled = (props) => {
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
        d="M8 24.3945V7.60563C8 5.20954 10.6704 3.78037 12.6641 5.10948L25.2558 13.5039C27.037 14.6914 27.037 17.3088 25.2558 18.4962L12.6641 26.8907C10.6704 28.2198 8 26.7906 8 24.3945Z"
        fill={fill}
      />
    </Svg>
  );
};
PlayFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
PlayFilled.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default PlayFilled;
