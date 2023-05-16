import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const FilterOutlined = (props) => {
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
          d="M4.10112 6.56182C4.26868 6.21808 4.6176 6 5.00001 6H27C27.3756 6 27.7196 6.21049 27.8905 6.54496C28.0614 6.87944 28.0305 7.28148 27.8104 7.58588L21 17.0062V27C21 27.3484 20.8187 27.6717 20.5214 27.8533C20.2241 28.035 19.8537 28.0488 19.5437 27.8898L12.1151 24.0803C11.7814 23.9091 11.5714 23.5656 11.5714 23.1905V17.0271L4.21226 7.61599C3.9767 7.31476 3.93356 6.90556 4.10112 6.56182ZM7.05141 8L13.3592 16.0665C13.4967 16.2424 13.5714 16.4593 13.5714 16.6825V22.5795L19 25.3634V16.6825C19 16.4722 19.0664 16.2671 19.1896 16.0967L25.0431 8H7.05141Z"
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
        d="M3.15168 4.84273C3.40302 4.32712 3.92641 4 4.50001 4H26.5C27.0634 4 27.5793 4.31573 27.8357 4.81744C28.0921 5.31915 28.0457 5.92222 27.7156 6.37882L21 15.668V25.5C21 26.0226 20.728 26.5075 20.2821 26.78C19.8362 27.0525 19.2805 27.0732 18.8155 26.8347L11.387 23.0252C10.8863 22.7685 10.5714 22.2531 10.5714 21.6905V15.6994L3.31839 6.42399C2.96505 5.97213 2.90034 5.35833 3.15168 4.84273ZM7.57712 7L13.2531 14.2585C13.4594 14.5224 13.5714 14.8476 13.5714 15.1825V20.774L18 23.045V15.1825C18 14.867 18.0995 14.5595 18.2844 14.3037L23.5646 7H7.57712Z"
        fill={fill}
      />
    </Svg>
  );
};

FilterOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

FilterOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default FilterOutlined;
