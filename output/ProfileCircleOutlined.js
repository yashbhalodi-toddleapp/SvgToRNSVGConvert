import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ProfileCircleOutlined = (props) => {
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
          d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2ZM4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 18.639 27.1481 21.079 25.7044 23.0601C24.3653 20.9673 22.3196 19.3994 19.8551 18.5979C21.1664 17.4973 22.0001 15.846 22.0001 14C22.0001 10.6863 19.3137 8 16 8C12.6863 8 10 10.6863 10 14C10 15.846 10.8336 17.4972 12.1449 18.5979C9.6807 19.3993 7.63495 20.967 6.29562 23.0601C4.85187 21.079 4 18.639 4 16ZM7.67918 24.6466C9.83653 26.7232 12.7692 28 16 28C19.2308 28 22.1635 26.7232 24.3208 24.6467C22.7949 21.8571 19.7629 20.0068 16.0207 20L16 20.0001L15.9794 20C12.2365 20.0068 9.20446 21.8579 7.67918 24.6466ZM16 10C13.7909 10 12 11.7909 12 14C12 16.2031 13.781 17.9902 15.9817 18L16 18L16.0183 18C18.219 17.9902 20.0001 16.2031 20.0001 14C20.0001 11.7909 18.2092 10 16 10Z"
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
        d="M16 1.5C7.99187 1.5 1.5 7.99187 1.5 16C1.5 24.0081 7.99187 30.5 16 30.5C24.0081 30.5 30.5 24.0081 30.5 16C30.5 7.99187 24.0081 1.5 16 1.5ZM4.5 16C4.5 9.64873 9.64873 4.5 16 4.5C22.3513 4.5 27.5 9.64873 27.5 16C27.5 18.273 26.8405 20.392 25.7025 22.1761C24.4646 20.502 22.771 19.2024 20.7819 18.4028C21.8486 17.2449 22.5001 15.6985 22.5001 14C22.5001 10.4102 19.5899 7.5 16 7.5C12.4102 7.5 9.5 10.4102 9.5 14C9.5 15.6985 10.1515 17.2449 11.2182 18.4028C9.229 19.2024 7.53543 20.502 6.2975 22.1761C5.15946 20.392 4.5 18.273 4.5 16ZM8.31141 24.5521C10.3486 26.3848 13.0441 27.5 16 27.5C18.956 27.5 21.6514 26.3847 23.6886 24.552C22.2019 22.1195 19.4386 20.5066 16.021 20.5L16 20.5001L15.979 20.5C12.5614 20.5066 9.79813 22.1196 8.31141 24.5521ZM16 10.5C14.067 10.5 12.5 12.067 12.5 14C12.5 15.9272 14.0576 17.4906 15.9826 17.5L16 17.5L16.0174 17.5C17.9424 17.4906 19.5001 15.9272 19.5001 14C19.5001 12.067 17.933 10.5 16 10.5Z"
        fill={fill}
      />
    </Svg>
  );
};

ProfileCircleOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ProfileCircleOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ProfileCircleOutlined.displayName = "ProfileCircleOutlined";

export default ProfileCircleOutlined;
