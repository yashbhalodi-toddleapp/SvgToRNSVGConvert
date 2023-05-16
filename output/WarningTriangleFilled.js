import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const WarningTriangleFilled = (props) => {
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
          d="M2.70652 24.5779C1.6303 26.5766 3.07791 29.0002 5.34793 29.0002L26.6511 29.0002C28.9211 29.0002 30.3687 26.5766 29.2925 24.5779L18.6409 4.79645C17.5082 2.69285 14.4908 2.69285 13.3581 4.79645L2.70652 24.5779Z"
          fill={fill}
        />
        <Path
          d="M16 11C15.4477 11 15 11.4477 15 12V18C15 18.5523 15.4477 19 16 19C16.5523 19 17 18.5523 17 18V12C17 11.4477 16.5523 11 16 11Z"
          fill="white"
        />
        <Path
          d="M16 21C16.8284 21 17.5 21.6716 17.5 22.5C17.5 23.3284 16.8284 24 16 24C15.1716 24 14.5 23.3284 14.5 22.5C14.5 21.6716 15.1716 21 16 21Z"
          fill="white"
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
        d="M2.7075 24.5779C1.63128 26.5766 3.07889 29.0002 5.34891 29.0002L26.652 29.0002C28.9221 29.0002 30.3697 26.5766 29.2935 24.5779L18.6419 4.79645C17.5092 2.69285 14.4918 2.69285 13.3591 4.79645L2.7075 24.5779Z"
        fill={fill}
      />
      <Path
        d="M16 11C15.4477 11 15 11.4477 15 12V18C15 18.5523 15.4477 19 16 19C16.5523 19 17 18.5523 17 18V12C17 11.4477 16.5523 11 16 11Z"
        fill="white"
      />
      <Path
        d="M16 21C16.8284 21 17.5 21.6716 17.5 22.5C17.5 23.3284 16.8284 24 16 24C15.1716 24 14.5 23.3284 14.5 22.5C14.5 21.6716 15.1716 21 16 21Z"
        fill="white"
      />
    </Svg>
  );
};
WarningTriangleFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
WarningTriangleFilled.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default WarningTriangleFilled;
