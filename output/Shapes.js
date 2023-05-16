import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const Shapes = (props) => {
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
        d="M26.7232 20.3504C28.8111 18.6091 30.1426 15.9864 30.1426 13.0513C30.1426 7.80456 25.8893 3.55127 20.6426 3.55127C16.8829 3.55127 13.6333 5.73528 12.0933 8.90381H6C4.067 8.90381 2.5 10.4708 2.5 12.4038V22.4038C2.5 24.3368 4.067 25.9038 6 25.9038H10.7542C10.7352 26.5378 10.917 27.1559 11.2525 27.6775C11.8571 28.6176 12.9362 29.2275 14.1735 29.2275H26.3323C27.5696 29.2275 28.6487 28.6176 29.2533 27.6775C29.8678 26.7221 29.9665 25.4431 29.261 24.3353L26.7232 20.3504ZM20.6426 6.55127C17.0527 6.55127 14.1426 9.46142 14.1426 13.0513C14.1426 14.6755 14.7377 16.1611 15.7243 17.3016L17.3241 14.7896C18.0125 13.7087 19.1816 13.2275 20.2529 13.2275C21.3242 13.2275 22.4932 13.7087 23.1817 14.7896L25.0923 17.7897C26.3557 16.6029 27.1426 14.9184 27.1426 13.0513C27.1426 9.46142 24.2324 6.55127 20.6426 6.55127ZM12.1564 22.9038L14.0655 19.9062C12.2656 18.1786 11.1426 15.7464 11.1426 13.0513C11.1426 12.6629 11.1659 12.28 11.2112 11.9038H6C5.72386 11.9038 5.5 12.1277 5.5 12.4038V22.4038C5.5 22.68 5.72386 22.9038 6 22.9038H12.1564ZM19.8545 16.4011C19.903 16.325 20.0291 16.2275 20.2529 16.2275C20.4767 16.2275 20.6028 16.325 20.6513 16.4011L26.7306 25.9469C26.7455 25.9702 26.7501 25.9844 26.7515 25.9892C26.7529 25.9943 26.7529 25.9984 26.7529 25.9984C26.7528 26.001 26.7518 26.0211 26.7302 26.0547C26.6882 26.12 26.5688 26.2275 26.3323 26.2275H14.1735C13.937 26.2275 13.8176 26.12 13.7756 26.0547C13.754 26.0211 13.753 26.001 13.7529 25.9984C13.7529 25.9984 13.7529 25.9943 13.7543 25.9893C13.7557 25.9844 13.7603 25.9702 13.7752 25.9469L19.8545 16.4011Z"
        fill={fill}
      />
    </Svg>
  );
};
Shapes.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
Shapes.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default Shapes;
