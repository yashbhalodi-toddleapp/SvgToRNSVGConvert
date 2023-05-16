import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const PlaneFilled = (props) => {
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
          d="M5.79686 3.19648C6.11692 2.95937 6.54718 2.93482 6.89213 3.13398L27.6767 15.134C27.9861 15.3126 28.1767 15.6427 28.1767 16C28.1767 16.3573 27.9861 16.6874 27.6767 16.866L6.89214 28.866C6.54718 29.0652 6.11693 29.0406 5.79687 28.8035C5.47681 28.5664 5.32799 28.162 5.41802 27.7739L7.91812 17H17.9998C18.5521 17 18.9998 16.5523 18.9998 16C18.9998 15.4477 18.5521 15 17.9998 15H7.91812L5.41802 4.22605C5.32798 3.83804 5.4768 3.43359 5.79686 3.19648Z"
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
        d="M5.79735 3.19648C6.11741 2.95937 6.54767 2.93482 6.89262 3.13398L27.6772 15.134C27.9866 15.3126 28.1772 15.6427 28.1772 16C28.1772 16.3573 27.9866 16.6874 27.6772 16.866L6.89263 28.866C6.54767 29.0652 6.11742 29.0406 5.79736 28.8035C5.47729 28.5664 5.32847 28.162 5.41851 27.7739L7.80259 17.5H18.0002C18.8287 17.5 19.5002 16.8284 19.5002 16C19.5002 15.1716 18.8287 14.5 18.0002 14.5H7.80258L5.41851 4.22605C5.32847 3.83804 5.47729 3.43359 5.79735 3.19648Z"
        fill={fill}
      />
    </Svg>
  );
};
PlaneFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
PlaneFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default PlaneFilled;
