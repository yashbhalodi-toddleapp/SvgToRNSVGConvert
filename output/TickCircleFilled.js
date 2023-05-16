import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const TickCircleFilled = (props) => {
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
          d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L14.7071 20.7071C14.3166 21.0976 13.6834 21.0976 13.2929 20.7071L9.29289 16.7071C8.90237 16.3166 8.90237 15.6834 9.29289 15.2929C9.68342 14.9024 10.3166 14.9024 10.7071 15.2929L14 18.5858L21.2929 11.2929C21.6834 10.9024 22.3166 10.9024 22.7071 11.2929Z"
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
        d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.0607 10.9393C23.6464 11.5251 23.6464 12.4749 23.0607 13.0607L15.0607 21.0607C14.4749 21.6464 13.5251 21.6464 12.9393 21.0607L8.93934 17.0607C8.35355 16.4749 8.35355 15.5251 8.93934 14.9393C9.52513 14.3536 10.4749 14.3536 11.0607 14.9393L14 17.8787L20.9393 10.9393C21.5251 10.3536 22.4749 10.3536 23.0607 10.9393Z"
        fill="white"
      />
    </Svg>
  );
};
TickCircleFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
TickCircleFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default TickCircleFilled;
