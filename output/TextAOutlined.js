import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const TextAOutlined = (props) => {
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
          d="M10.4572 7.0867C10.7016 7.19549 10.8808 7.39024 10.9751 7.61947L18.0137 23.4283C18.2383 23.9328 18.0114 24.5239 17.5069 24.7486C17.0023 24.9732 16.4112 24.7463 16.1866 24.2418L13.8529 19.0002H6.24759L3.91392 24.2418C3.68928 24.7463 3.09817 24.9732 2.59363 24.7486C2.0891 24.5239 1.86219 23.9328 2.08683 23.4283L9.12538 7.61945C9.21974 7.39023 9.39896 7.19549 9.6433 7.0867C9.77572 7.02775 9.9141 6.99989 10.0503 7C10.1864 6.99989 10.3248 7.02775 10.4572 7.0867ZM12.9625 17.0002L10.0503 10.4593L7.13805 17.0002H12.9625Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.3332 19.0002C17.3332 15.6865 20.0195 13.0002 23.3332 13.0002C25.0631 13.0002 26.622 13.7323 27.717 14.9036V14.0003C27.717 13.448 28.1647 13.0003 28.717 13.0003C29.2693 13.0003 29.717 13.448 29.717 14.0003V24.0002C29.717 24.5525 29.2693 25.0002 28.717 25.0002C28.1647 25.0002 27.717 24.5525 27.717 24.0002V23.0969C26.622 24.2682 25.0631 25.0002 23.3332 25.0002C20.0195 25.0002 17.3332 22.314 17.3332 19.0002ZM23.3332 15.0002C21.1241 15.0002 19.3332 16.7911 19.3332 19.0002C19.3332 21.2094 21.1241 23.0002 23.3332 23.0002C25.5424 23.0002 27.3332 21.2094 27.3332 19.0002C27.3332 16.7911 25.5424 15.0002 23.3332 15.0002Z"
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
        d="M9.87254 4.74534C9.78478 4.68792 9.69139 4.63994 9.59408 4.60206C9.23193 4.46073 8.845 4.47 8.50573 4.60206C8.40842 4.63994 8.31503 4.68792 8.22727 4.74534C8.182 4.77495 8.13873 4.80675 8.09756 4.84054C7.92273 4.98392 7.77778 5.16915 7.67955 5.38978L0.629445 21.2246C0.292494 21.9814 0.632853 22.868 1.38966 23.205C2.14646 23.5419 3.03313 23.2016 3.37008 22.4448L5.57169 17.4999H12.5281L14.7297 22.4448C15.0667 23.2016 15.9533 23.5419 16.7102 23.205C17.467 22.868 17.8073 21.9814 17.4704 21.2246L10.4203 5.38978C10.322 5.16915 10.1771 4.98392 10.0023 4.84054C9.96108 4.80675 9.91782 4.77495 9.87254 4.74534ZM11.1924 14.4999L9.04991 9.68768L6.90738 14.4999H11.1924ZM27.5644 11.5635C26.5409 10.8911 25.3161 10.4999 24 10.4999C20.4101 10.4999 17.5 13.41 17.5 16.9999C17.5 20.5897 20.4101 23.4999 24 23.4999C25.3161 23.4999 26.5409 23.1087 27.5644 22.4363C27.7513 23.0518 28.3233 23.4999 29 23.4999C29.8284 23.4999 30.5 22.8283 30.5 21.9999V16.9999V11.9999C30.5 11.1715 29.8284 10.4999 29 10.4999C28.3233 10.4999 27.7513 10.9479 27.5644 11.5635ZM27.5 16.9999C27.5 18.9329 25.933 20.4999 24 20.4999C22.067 20.4999 20.5 18.9329 20.5 16.9999C20.5 15.0669 22.067 13.4999 24 13.4999C25.933 13.4999 27.5 15.0669 27.5 16.9999Z"
        fill={fill}
      />
    </Svg>
  );
};

TextAOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

TextAOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default TextAOutlined;
