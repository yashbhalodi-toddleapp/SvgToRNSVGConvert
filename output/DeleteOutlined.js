import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const DeleteOutlined = (props) => {
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
          d="M12 2C10.3431 2 9 3.34315 9 5V6H5H3.90497H3C2.44772 6 2 6.44772 2 7C2 7.55228 2.44772 8 3 8H4.08679L5.67339 25.4527C5.90752 28.0281 8.06684 30 10.6529 30H21.3471C23.9332 30 26.0925 28.0281 26.3266 25.4527L27.9132 8H29C29.5523 8 30 7.55229 30 7C30 6.44772 29.5523 6 29 6L28.095 6H27H23V5C23 3.34315 21.6569 2 20 2H12ZM21 6V5C21 4.44772 20.5523 4 20 4H12C11.4477 4 11 4.44772 11 5V6H21ZM10 8H6.09503L7.66518 25.2716C7.80566 26.8168 9.10125 28 10.6529 28H21.3471C22.8988 28 24.1943 26.8168 24.3348 25.2716L25.905 8H22H10ZM14 12C14 11.4477 13.5523 11 13 11C12.4477 11 12 11.4477 12 12V22C12 22.5523 12.4477 23 13 23C13.5523 23 14 22.5523 14 22V12ZM19 11C19.5523 11 20 11.4477 20 12V22C20 22.5523 19.5523 23 19 23C18.4477 23 18 22.5523 18 22V12C18 11.4477 18.4477 11 19 11Z"
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
        d="M14.5 13C14.5 12.1716 13.8284 11.5 13 11.5C12.1716 11.5 11.5 12.1716 11.5 13V23C11.5 23.8284 12.1716 24.5 13 24.5C13.8284 24.5 14.5 23.8284 14.5 23V13Z"
        fill={fill}
      />
      <Path
        d="M19 11.5C19.8284 11.5 20.5 12.1716 20.5 13V23C20.5 23.8284 19.8284 24.5 19 24.5C18.1716 24.5 17.5 23.8284 17.5 23V13C17.5 12.1716 18.1716 11.5 19 11.5Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.5C10.067 1.5 8.5 3.067 8.5 5V6.5H3C2.17157 6.5 1.5 7.17157 1.5 8C1.5 8.82843 2.17157 9.5 3 9.5H3.63606L5.16191 25.5215C5.43075 28.3442 7.80156 30.5 10.6371 30.5H21.3628C24.1984 30.5 26.5692 28.3442 26.8381 25.5215L28.3639 9.5H29C29.8284 9.5 30.5 8.82843 30.5 8C30.5 7.17158 29.8284 6.5 29 6.5L23.5 6.5V5C23.5 3.067 21.933 1.5 20 1.5H12ZM20.5 6.5V5C20.5 4.72386 20.2761 4.5 20 4.5H12C11.7239 4.5 11.5 4.72386 11.5 5V6.5H20.5ZM6.64963 9.5L8.1484 25.237C8.27059 26.5201 9.34824 27.5 10.6371 27.5H21.3628C22.6517 27.5 23.7294 26.5201 23.8516 25.237L25.3503 9.5H6.64963Z"
        fill={fill}
      />
    </Svg>
  );
};
DeleteOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
DeleteOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default DeleteOutlined;
