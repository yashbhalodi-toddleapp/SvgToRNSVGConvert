import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const ImageSquareOutlined = (props) => {
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
          d="M3 8C3 5.23858 5.23858 3 8 3H24C26.7614 3 29 5.23858 29 8V24C29 26.7614 26.7614 29 24 29H8C5.23858 29 3 26.7614 3 24V8ZM5 20.4142V24C5 25.6569 6.34315 27 8 27H23.5858L13.1213 16.5355C11.9497 15.364 10.0503 15.364 8.87868 16.5355L5 20.4142ZM25.8082 26.394L14.5355 15.1213C12.5829 13.1687 9.41709 13.1687 7.46447 15.1213L5 17.5858V8C5 6.34315 6.34315 5 8 5H24C25.6569 5 27 6.34315 27 8V24C27 24.9778 26.5322 25.8463 25.8082 26.394ZM17 11.5C17 9.567 18.567 8 20.5 8C22.433 8 24 9.567 24 11.5C24 13.433 22.433 15 20.5 15C18.567 15 17 13.433 17 11.5ZM20.5 10C19.6716 10 19 10.6716 19 11.5C19 12.3284 19.6716 13 20.5 13C21.3284 13 22 12.3284 22 11.5C22 10.6716 21.3284 10 20.5 10Z"
          fill="#717171"
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
        d="M2.5 8C2.5 4.96243 4.96243 2.5 8 2.5H24C27.0376 2.5 29.5 4.96243 29.5 8V24C29.5 27.0376 27.0376 29.5 24 29.5H8C4.96243 29.5 2.5 27.0376 2.5 24V8ZM5.5 20.6213V24C5.5 25.3807 6.61929 26.5 8 26.5H22.3787L12.7678 16.8891C11.7915 15.9128 10.2085 15.9128 9.23223 16.8891L5.5 20.6213ZM25.8274 25.7061L14.8891 14.7678C12.7412 12.6199 9.2588 12.6199 7.11091 14.7678L5.5 16.3787V8C5.5 6.61929 6.61929 5.5 8 5.5H24C25.3807 5.5 26.5 6.61929 26.5 8V24C26.5 24.6595 26.2446 25.2593 25.8274 25.7061ZM16.5 11.5C16.5 9.29086 18.2909 7.5 20.5 7.5C22.7091 7.5 24.5 9.29086 24.5 11.5C24.5 13.7091 22.7091 15.5 20.5 15.5C18.2909 15.5 16.5 13.7091 16.5 11.5ZM20.5 10.5C19.9477 10.5 19.5 10.9477 19.5 11.5C19.5 12.0523 19.9477 12.5 20.5 12.5C21.0523 12.5 21.5 12.0523 21.5 11.5C21.5 10.9477 21.0523 10.5 20.5 10.5Z"
        fill="#717171"
      />
    </Svg>
  );
};
ImageSquareOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
ImageSquareOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default ImageSquareOutlined;
