import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const EnvelopePlainOutlined = (props) => {
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
          d="M5 4C3.34315 4 2 5.34314 2 7V23C2 25.7614 4.23858 28 7 28H25C27.7614 28 30 25.7614 30 23V7C30 5.34315 28.6569 4 27 4H5ZM4 7.41421V23C4 24.6569 5.34315 26 7 26H25C26.6569 26 28 24.6569 28 23V7.40773C27.91 7.51285 27.8121 7.61353 27.7071 7.70715L18.1213 17.2929C16.9497 18.4645 15.0503 18.4645 13.8787 17.2929L4 7.41421ZM26.5807 6H5.41421L15.2929 15.8787C15.6834 16.2693 16.3166 16.2693 16.7071 15.8787L26.2929 6.29294C26.3928 6.18589 26.4887 6.08846 26.5807 6Z"
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3.5C3.067 3.5 1.5 5.067 1.5 7V23C1.5 26.0376 3.96243 28.5 7 28.5H25C28.0376 28.5 30.5 26.0376 30.5 23V7C30.5 5.067 28.933 3.5 27 3.5H5ZM4.5 8.62132V23C4.5 24.3807 5.61929 25.5 7 25.5H25C26.3807 25.5 27.5 24.3807 27.5 23V8.62132L18.4749 17.6464C17.108 19.0133 14.892 19.0133 13.5251 17.6464L4.5 8.62132ZM25.3787 6.5H6.62132L15.6464 15.5251C15.8417 15.7204 16.1583 15.7204 16.3536 15.5251L25.3787 6.5Z"
        fill={fill}
      />
    </Svg>
  );
};
EnvelopePlainOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
EnvelopePlainOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default EnvelopePlainOutlined;
