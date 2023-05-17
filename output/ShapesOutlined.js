import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ShapesOutlined = (props) => {
  const { size, weight, fill } = props;

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
          d="M11.3359 25.3525H6C4.34315 25.3525 3 24.0094 3 22.3525V12.3525C3 10.6957 4.34315 9.35254 6 9.35254H12.4124C13.8119 6.19928 16.9704 4 20.6426 4C25.6131 4 29.6426 8.02944 29.6426 13C29.6426 15.9469 28.2263 18.563 26.0372 20.2047L28.8389 24.6039C29.4315 25.5343 29.3498 26.6026 28.8324 27.4071C28.3215 28.2013 27.4024 28.7275 26.3319 28.7275H14.1731C13.1026 28.7275 12.1835 28.2013 11.6726 27.4071C11.29 26.8123 11.1457 26.0734 11.3359 25.3525ZM13.6426 13C13.6426 9.13401 16.7766 6 20.6426 6C24.5086 6 27.6426 9.13401 27.6426 13C27.6426 15.2376 26.5927 17.2299 24.9587 18.5113L22.7595 15.0582C22.1778 14.1447 21.1826 13.7275 20.2525 13.7275C19.3224 13.7275 18.3272 14.1447 17.7455 15.0582L15.8231 18.0767C14.48 16.8012 13.6426 14.9984 13.6426 13ZM14.7331 19.7882C12.8394 18.1383 11.6426 15.7089 11.6426 13C11.6426 12.4373 11.6942 11.8866 11.793 11.3525H6C5.44772 11.3525 5 11.8003 5 12.3525V22.3525C5 22.9048 5.44772 23.3525 6 23.3525H12.4631L14.7331 19.7882ZM19.4324 16.1326C19.5876 15.8889 19.8875 15.7275 20.2525 15.7275C20.6175 15.7275 20.9174 15.8889 21.0726 16.1325L27.152 25.6783C27.2927 25.8993 27.2795 26.1243 27.1503 26.3251C27.0145 26.5362 26.7352 26.7275 26.3319 26.7275H14.1731C13.7698 26.7275 13.4905 26.5362 13.3547 26.3251C13.2255 26.1243 13.2123 25.8993 13.353 25.6783L19.4324 16.1326Z"
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
        d="M26.7232 20.3504C28.8111 18.6091 30.1426 15.9864 30.1426 13.0513C30.1426 7.80456 25.8893 3.55127 20.6426 3.55127C16.8829 3.55127 13.6333 5.73528 12.0933 8.90381H6C4.067 8.90381 2.5 10.4708 2.5 12.4038V22.4038C2.5 24.3368 4.067 25.9038 6 25.9038H10.7542C10.7352 26.5378 10.917 27.1559 11.2525 27.6775C11.8571 28.6176 12.9362 29.2275 14.1735 29.2275H26.3323C27.5696 29.2275 28.6487 28.6176 29.2533 27.6775C29.8678 26.7221 29.9665 25.4431 29.261 24.3353L26.7232 20.3504ZM20.6426 6.55127C17.0527 6.55127 14.1426 9.46142 14.1426 13.0513C14.1426 14.6755 14.7377 16.1611 15.7243 17.3016L17.3241 14.7896C18.0125 13.7087 19.1816 13.2275 20.2529 13.2275C21.3242 13.2275 22.4932 13.7087 23.1817 14.7896L25.0923 17.7897C26.3557 16.6029 27.1426 14.9184 27.1426 13.0513C27.1426 9.46142 24.2324 6.55127 20.6426 6.55127ZM12.1564 22.9038L14.0655 19.9062C12.2656 18.1786 11.1426 15.7464 11.1426 13.0513C11.1426 12.6629 11.1659 12.28 11.2112 11.9038H6C5.72386 11.9038 5.5 12.1277 5.5 12.4038V22.4038C5.5 22.68 5.72386 22.9038 6 22.9038H12.1564ZM19.8545 16.4011C19.903 16.325 20.0291 16.2275 20.2529 16.2275C20.4767 16.2275 20.6028 16.325 20.6513 16.4011L26.7306 25.9469C26.7455 25.9702 26.7501 25.9844 26.7515 25.9892C26.7529 25.9943 26.7529 25.9984 26.7529 25.9984C26.7528 26.001 26.7518 26.0211 26.7302 26.0547C26.6882 26.12 26.5688 26.2275 26.3323 26.2275H14.1735C13.937 26.2275 13.8176 26.12 13.7756 26.0547C13.754 26.0211 13.753 26.001 13.7529 25.9984C13.7529 25.9984 13.7529 25.9943 13.7543 25.9893C13.7557 25.9844 13.7603 25.9702 13.7752 25.9469L19.8545 16.4011Z"
        fill={fill}
      />
    </Svg>
  );
};

ShapesOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ShapesOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default ShapesOutlined;
