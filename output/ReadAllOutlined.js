import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const ReadAllOutlined = (props) => {
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
          d="M13.7071 7.70711C14.0976 7.31658 14.0976 6.68342 13.7071 6.29289C13.3166 5.90237 12.6834 5.90237 12.2929 6.29289L6 12.5858L3.70711 10.2929C3.31658 9.90237 2.68342 9.90237 2.29289 10.2929C1.90237 10.6834 1.90237 11.3166 2.29289 11.7071L5.29289 14.7071C5.68342 15.0976 6.31658 15.0976 6.70711 14.7071L13.7071 7.70711Z"
          fill={fill}
        />
        <Path
          d="M29 10L17 10C16.4477 10 16 10.4477 16 11C16 11.5523 16.4477 12 17 12L29 12C29.5523 12 30 11.5523 30 11C30 10.4477 29.5523 10 29 10Z"
          fill={fill}
        />
        <Path
          d="M9 18C9 17.4477 9.44772 17 10 17L22 17C22.5523 17 23 17.4477 23 18C23 18.5523 22.5523 19 22 19L10 19C9.44772 19 9 18.5523 9 18Z"
          fill={fill}
        />
        <Path
          d="M16 25C16 24.4477 15.5523 24 15 24H3C2.44772 24 2 24.4477 2 25C2 25.5523 2.44772 26 3 26H15C15.5523 26 16 25.5523 16 25Z"
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
        d="M18.3411 10.3369H29.0077"
        stroke={fill}
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.0078 6.67041L7.00781 13.6704L4.00781 10.6704"
        stroke={fill}
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.0078 17.0039H22.3411"
        stroke={fill}
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.34106 23.6704H17.0077"
        stroke={fill}
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
ReadAllOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
ReadAllOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default ReadAllOutlined;
