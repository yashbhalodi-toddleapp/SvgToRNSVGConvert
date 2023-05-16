import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const DeviceDesktop = (props) => {
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
        d="M1.5 8C1.5 4.96243 3.96243 2.5 7 2.5H25C28.0376 2.5 30.5 4.96243 30.5 8V18C30.5 21.0376 28.0376 23.5 25 23.5H17.5V26.5H24C24.8284 26.5 25.5 27.1716 25.5 28C25.5 28.8284 24.8284 29.5 24 29.5H8C7.17157 29.5 6.5 28.8284 6.5 28C6.5 27.1716 7.17157 26.5 8 26.5H14.5V23.5H7C3.96243 23.5 1.5 21.0376 1.5 18V8ZM25 20.5C26.3807 20.5 27.5 19.3807 27.5 18V8C27.5 6.61929 26.3807 5.5 25 5.5H7C5.61929 5.5 4.5 6.61929 4.5 8V18C4.5 19.3807 5.61929 20.5 7 20.5H25Z"
        fill="#717171"
      />
    </Svg>
  );
};
DeviceDesktop.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
DeviceDesktop.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default DeviceDesktop;
