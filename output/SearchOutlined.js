import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const SearchOutlined = (props) => {
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
          d="M15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C18.2299 28 21.1847 26.8221 23.4582 24.8724L28.2929 29.7071C28.6834 30.0976 29.3166 30.0976 29.7071 29.7071C30.0976 29.3166 30.0976 28.6834 29.7071 28.2929L24.8724 23.4582C26.8221 21.1847 28 18.2299 28 15C28 7.8203 22.1797 2 15 2ZM4 15C4 8.92487 8.92487 4 15 4C21.0751 4 26 8.92487 26 15C26 21.0751 21.0751 26 15 26C8.92487 26 4 21.0751 4 15Z"
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
        d="M5.5 15C5.5 9.7533 9.75329 5.5 15 5.5C20.2467 5.5 24.5 9.7533 24.5 15C24.5 20.2467 20.2467 24.5 15 24.5C9.75329 24.5 5.5 20.2467 5.5 15ZM15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5C17.9112 27.5 20.59 26.5048 22.7147 24.836L26.9393 29.0607C27.5251 29.6464 28.4749 29.6464 29.0607 29.0607C29.6464 28.4749 29.6464 27.5251 29.0607 26.9393L24.836 22.7147C26.5048 20.59 27.5 17.9112 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5Z"
        fill={fill}
      />
    </Svg>
  );
};
SearchOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
SearchOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default SearchOutlined;
