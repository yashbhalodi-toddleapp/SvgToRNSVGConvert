import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const ThreeDotsVerticalOutlined = (props) => {
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
          d="M14 6.00001C14 7.10458 14.8954 8.00001 16 8.00001C17.1046 8.00001 18 7.10458 18 6.00001C18 4.89544 17.1046 4 16 4C14.8954 4 14 4.89544 14 6.00001Z"
          fill={fill}
        />
        <Path
          d="M14 26C14 27.1046 14.8954 28 16 28C17.1046 28 18 27.1046 18 26C18 24.8954 17.1046 24 16 24C14.8954 24 14 24.8954 14 26Z"
          fill={fill}
        />
        <Path
          d="M16 18C14.8954 18 14 17.1046 14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18Z"
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
        d="M13.5 6.00001C13.5 7.38072 14.6193 8.50002 16 8.50002C17.3807 8.50002 18.5 7.38072 18.5 6.00001C18.5 4.6193 17.3807 3.5 16 3.5C14.6193 3.5 13.5 4.6193 13.5 6.00001Z"
        fill={fill}
      />
      <Path
        d="M13.5 26C13.5 27.3807 14.6193 28.5 16 28.5C17.3807 28.5 18.5 27.3807 18.5 26C18.5 24.6193 17.3807 23.5 16 23.5C14.6193 23.5 13.5 24.6193 13.5 26Z"
        fill={fill}
      />
      <Path
        d="M16 18.5C14.6193 18.5 13.5 17.3807 13.5 16C13.5 14.6193 14.6193 13.5 16 13.5C17.3807 13.5 18.5 14.6193 18.5 16C18.5 17.3807 17.3807 18.5 16 18.5Z"
        fill={fill}
      />
    </Svg>
  );
};
ThreeDotsVerticalOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
ThreeDotsVerticalOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default ThreeDotsVerticalOutlined;
