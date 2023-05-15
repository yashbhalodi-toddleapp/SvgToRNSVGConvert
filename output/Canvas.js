import Svg, { Path, Rect } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const Canvas = (props) => {
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
        d="M23.5 9.51294H26.9998C28.1044 9.51294 28.9998 10.4084 28.9998 11.5129V27.0001C28.9998 28.1047 28.1044 29.0001 26.9998 29.0001H11.5127C10.4081 29.0001 9.5127 28.1047 9.5127 27.0001V23.5001"
        stroke="#808080"
        strokeWidth={3}
      />
      <Rect
        x={3}
        y={3}
        width={20}
        height={20}
        rx={2}
        stroke="#808080"
        strokeWidth={3}
      />
      <Path
        d="M12 8.5C12 9.32843 11.3284 10 10.5 10C9.67157 10 9 9.32843 9 8.5C9 7.67157 9.67157 7 10.5 7C11.3284 7 12 7.67157 12 8.5Z"
        fill="#808080"
      />
      <Path
        d="M19 12.5C19 13.3284 18.3284 14 17.5 14C16.6716 14 16 13.3284 16 12.5C16 11.6716 16.6716 11 17.5 11C18.3284 11 19 11.6716 19 12.5Z"
        fill="#808080"
      />
      <Path
        d="M12 16.5C12 17.3284 11.3284 18 10.5 18C9.67157 18 9 17.3284 9 16.5C9 15.6716 9.67157 15 10.5 15C11.3284 15 12 15.6716 12 16.5Z"
        fill="#808080"
      />
    </Svg>
  );
};
Canvas.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
Canvas.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default Canvas;
