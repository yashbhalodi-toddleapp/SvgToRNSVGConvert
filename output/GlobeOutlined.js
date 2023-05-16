import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const GlobeOutlined = (props) => {
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
          d="M1.99976 16C1.99976 8.26801 8.26777 2 15.9998 2C23.7317 2 29.9998 8.26801 29.9998 16C29.9998 23.732 23.7317 30 15.9998 30C8.26777 30 1.99976 23.732 1.99976 16ZM4.04083 15C4.45277 10.0067 7.92192 5.88018 12.5722 4.49663C11.8291 5.18127 11.1754 6.0566 10.6339 7.02774C9.45702 9.13858 8.66573 11.9289 8.52316 15H4.04083ZM12.5722 27.5034C7.92192 26.1198 4.45277 21.9933 4.04083 17H8.52316C8.66573 20.0711 9.45702 22.8614 10.6339 24.9723C11.1754 25.9434 11.8291 26.8187 12.5722 27.5034ZM27.9587 17C27.5468 21.9931 24.078 26.1194 19.428 27.5032C20.171 26.8186 20.8246 25.9433 21.3661 24.9723C22.543 22.8614 23.3343 20.0711 23.4768 17H27.9587ZM19.428 4.49685C24.078 5.8806 27.5468 10.0069 27.9587 15H23.4768C23.3343 11.9289 22.543 9.13858 21.3661 7.02774C20.8246 6.0567 20.171 5.18145 19.428 4.49685ZM10.5255 15C10.6667 12.2419 11.3819 9.79323 12.3808 8.0017C13.2032 6.52672 14.1333 5.6278 15 5.23423L14.9998 15H10.5255ZM16.9998 15L17 5.23419C17.8666 5.62774 18.7968 6.52667 19.6192 8.0017C20.6181 9.79323 21.3333 12.2419 21.4745 15H16.9998ZM16.9997 17H21.4745C21.3333 19.7581 20.6181 22.2068 19.6192 23.9983C18.7967 25.4736 17.8663 26.3726 16.9995 26.766L16.9997 17ZM14.9997 17L14.9995 26.7656C14.133 26.3719 13.203 25.473 12.3808 23.9983C11.3819 22.2068 10.6667 19.7581 10.5255 17H14.9997Z"
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
        d="M1.49976 16C1.49976 7.99187 7.99163 1.5 15.9998 1.5C24.0079 1.5 30.4998 7.99187 30.4998 16C30.4998 24.0081 24.0079 30.5 15.9998 30.5C7.99163 30.5 1.49976 24.0081 1.49976 16ZM4.5967 14.5C5.10001 10.6361 7.52126 7.37487 10.8739 5.70274C10.6307 6.04935 10.4048 6.412 10.1972 6.78425C9.04058 8.85875 8.25283 11.5471 8.05105 14.5H4.5967ZM10.8739 26.2973C7.52126 24.6251 5.10001 21.3639 4.5967 17.5H8.05105C8.25283 20.4529 9.04058 23.1413 10.1972 25.2158C10.4048 25.588 10.6307 25.9506 10.8739 26.2973ZM27.4028 17.5C26.8995 21.3636 24.4786 24.6246 21.1264 26.2969C21.3695 25.9504 21.5953 25.5879 21.8028 25.2158C22.9594 23.1413 23.7472 20.4529 23.9489 17.5H27.4028ZM21.1264 5.70311C24.4786 7.37536 26.8995 10.6364 27.4028 14.5H23.9489C23.7472 11.5471 22.9594 8.85875 21.8028 6.78425C21.5953 6.41214 21.3695 6.04962 21.1264 5.70311ZM11.0591 14.5C11.2552 12.0269 11.9227 9.84998 12.8175 8.24519C13.3721 7.25038 13.9537 6.56839 14.4999 6.13298L14.4998 14.5H11.0591ZM17.4998 14.5L17.4999 6.13286C18.0462 6.56826 18.6278 7.25029 19.1825 8.24519C20.0773 9.84998 20.7448 12.0269 20.9409 14.5H17.4998ZM17.4997 17.5H20.9409C20.7448 19.9731 20.0773 22.15 19.1825 23.7548C18.6277 24.7499 18.046 25.4321 17.4995 25.8675L17.4997 17.5ZM14.4997 17.5L14.4995 25.8667C13.9534 25.4313 13.372 24.7494 12.8175 23.7548C11.9227 22.15 11.2552 19.9731 11.0591 17.5H14.4997Z"
        fill={fill}
      />
    </Svg>
  );
};

GlobeOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

GlobeOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default GlobeOutlined;
