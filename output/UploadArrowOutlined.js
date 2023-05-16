import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const UploadArrowOutlined = (props) => {
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
        d="M14.5 6.62132L14.5 23C14.5 23.8284 15.1716 24.5 16 24.5C16.8284 24.5 17.5 23.8284 17.5 23L17.5 6.62132L22.9393 12.0607C23.5251 12.6464 24.4749 12.6464 25.0607 12.0607C25.6464 11.4749 25.6464 10.5251 25.0607 9.93934L17.061 1.93969C16.7797 1.65838 16.3978 1.5 16 1.5C15.6022 1.5 15.2206 1.65803 14.9393 1.93934L6.93934 9.93934C6.35355 10.5251 6.35355 11.4749 6.93934 12.0607C7.52513 12.6464 8.47487 12.6464 9.06066 12.0607L14.5 6.62132Z"
        fill={fill}
      />
      <Path
        d="M2.5 29C2.5 28.1716 3.17157 27.5 4 27.5H28C28.8284 27.5 29.5 28.1716 29.5 29C29.5 29.8284 28.8284 30.5 28 30.5H4C3.17157 30.5 2.5 29.8284 2.5 29Z"
        fill={fill}
      />
    </Svg>
  );
};
UploadArrowOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
UploadArrowOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default UploadArrowOutlined;
