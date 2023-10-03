import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const WorkbookOutlined = (props) => {
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
          d="M14.2367 3.74297L9.07634 11.7701C8.17949 13.1652 9.18118 15 10.8397 15H21.1603C22.8188 15 23.8205 13.1652 22.9237 11.7701L17.7633 3.74297C16.9382 2.45937 15.0618 2.45937 14.2367 3.74297ZM15.919 4.82449L10.7587 12.8517C10.747 12.8698 10.7432 12.8809 10.742 12.8851C10.7406 12.8897 10.7401 12.8934 10.74 12.8976C10.7398 12.9071 10.7424 12.9265 10.7552 12.9499C10.7679 12.9732 10.7828 12.9859 10.7909 12.9909C10.7945 12.9931 10.7979 12.9947 10.8025 12.996C10.8067 12.9972 10.8181 13 10.8397 13H21.1603C21.1819 13 21.1933 12.9972 21.1975 12.996C21.2021 12.9947 21.2055 12.9931 21.2091 12.9909C21.2172 12.9859 21.2321 12.9732 21.2448 12.9499C21.2576 12.9265 21.2602 12.9071 21.26 12.8976C21.2599 12.8934 21.2594 12.8897 21.258 12.8851C21.2568 12.8809 21.253 12.8698 21.2413 12.8517L16.081 4.82449C16.0649 4.7994 16.0538 4.79346 16.0487 4.79077C16.0393 4.78582 16.0225 4.78027 16 4.78027C15.9775 4.78027 15.9607 4.78582 15.9513 4.79077C15.9462 4.79346 15.9351 4.7994 15.919 4.82449Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.09628 17C3.93854 17 3 17.9385 3 19.0963V26.9037C3 28.0615 3.93854 29 5.09628 29H12.9037C14.0615 29 15 28.0615 15 26.9037V19.0963C15 17.9385 14.0615 17 12.9037 17H5.09628ZM12.9037 19H5.09628C5.0431 19 5 19.0431 5 19.0963V26.9037C5 26.9569 5.04311 27 5.09628 27H12.9037C12.9569 27 13 26.9569 13 26.9037V19.0963C13 19.0431 12.9569 19 12.9037 19Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29 23C29 26.3137 26.3137 29 23 29C19.6863 29 17 26.3137 17 23C17 19.6863 19.6863 17 23 17C26.3137 17 29 19.6863 29 23ZM27 23C27 25.2091 25.2091 27 23 27C20.7909 27 19 25.2091 19 23C19 20.7909 20.7909 19 23 19C25.2091 19 27 20.7909 27 23Z"
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
        d="M4 20.0963C4 18.9385 4.93854 18 6.09628 18H11.9037C13.0615 18 14 18.9385 14 20.0963V25.9037C14 27.0615 13.0615 28 11.9037 28H6.09628C4.93854 28 4 27.0615 4 25.9037V20.0963Z"
        stroke={fill}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.1727 10.7409L14.2558 4.61631C15.0855 3.37168 16.9145 3.37168 17.7442 4.61631L21.8273 10.7409C22.756 12.134 21.7574 14 20.0831 14H11.9169C10.2426 14 9.24399 12.134 10.1727 10.7409Z"
        stroke={fill}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M28 23C28 25.7614 25.7614 28 23 28C20.2386 28 18 25.7614 18 23C18 20.2386 20.2386 18 23 18C25.7614 18 28 20.2386 28 23Z"
        stroke={fill}
        strokeWidth={3}
      />
    </Svg>
  );
};

WorkbookOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

WorkbookOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

WorkbookOutlined.displayName = "WorkbookOutlined";

export default WorkbookOutlined;
