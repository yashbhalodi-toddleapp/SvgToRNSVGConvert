import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ArchiveOutlined = (props) => {
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
          d="M2 22C2 24.7608 4.23617 27 6.99819 27H25.0018C27.7638 27 30 24.7608 30 22V14C30 13.6865 29.8557 13.4067 29.63 13.2234C29.5622 13.0997 29.4854 12.9805 29.4 12.8667L24.4 6.2C23.8334 5.44458 22.9443 5 22 5H10C9.05573 5 8.16656 5.44458 7.6 6.2L2.6 12.8667C2.51462 12.9805 2.43785 13.0997 2.37 13.2234C2.14425 13.4067 2 13.6865 2 14V22ZM22.8 7.4L27 13H20.9C20.9003 13.0016 20.9006 13.0032 20.901 13.0048C20.3952 13.0546 20 13.4811 20 14C20 16.2091 18.2091 18 16 18C13.7909 18 12 16.2091 12 14C12 13.4811 11.6048 13.0546 11.099 13.0048C11.0994 13.0032 11.0997 13.0016 11.1 13H5L9.2 7.4C9.38885 7.14819 9.68524 7 10 7H22C22.3148 7 22.6111 7.14819 22.8 7.4ZM10.083 15H4V22C4 23.6574 5.34192 25 6.99819 25H25.0018C26.6581 25 28 23.6574 28 22V15H21.917C21.441 17.8377 18.973 20 16 20C13.027 20 10.559 17.8377 10.083 15Z"
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
        d="M1.5 22C1.5 25.0367 3.95973 27.5 6.99819 27.5H25.0018C28.0403 27.5 30.5 25.0367 30.5 22V14.6667C30.5 13.9094 30.2544 13.1725 29.8 12.5667L24.8 5.9C24.139 5.01868 23.1017 4.5 22 4.5H10C8.89835 4.5 7.86099 5.01868 7.2 5.9L2.2 12.5667C1.74562 13.1725 1.5 13.9094 1.5 14.6667V22ZM6.99819 24.5C5.61836 24.5 4.5 23.3816 4.5 22V14.6667C4.5 14.5585 4.53509 14.4532 4.6 14.3667L9.6 7.7C9.69443 7.5741 9.84262 7.5 10 7.5H22C22.1574 7.5 22.3056 7.5741 22.4 7.7L27.4 14.3667C27.4649 14.4532 27.5 14.5585 27.5 14.6667V22C27.5 23.3816 26.3816 24.5 25.0018 24.5H6.99819Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.99819 24.5C5.61836 24.5 4.5 23.3816 4.5 22V15.5H11C11.8284 15.5 12.5 14.8284 12.5 14C12.5 13.1716 11.8284 12.5 11 12.5H3C2.17157 12.5 1.5 13.1716 1.5 14V22C1.5 25.0367 3.95973 27.5 6.99819 27.5H25.0018C28.0403 27.5 30.5 25.0367 30.5 22V14C30.5 13.1716 29.8284 12.5 29 12.5H21C20.1716 12.5 19.5 13.1716 19.5 14C19.5 14.8284 20.1716 15.5 21 15.5H27.5V22C27.5 23.3816 26.3816 24.5 25.0018 24.5H6.99819Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 12.5C11.8284 12.5 12.5 13.1716 12.5 14C12.5 15.933 14.067 17.5 16 17.5C17.933 17.5 19.5 15.933 19.5 14C19.5 13.1716 20.1716 12.5 21 12.5C21.8284 12.5 22.5 13.1716 22.5 14C22.5 17.5899 19.5899 20.5 16 20.5C12.4101 20.5 9.5 17.5899 9.5 14C9.5 13.1716 10.1716 12.5 11 12.5Z"
        fill={fill}
      />
    </Svg>
  );
};

ArchiveOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ArchiveOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ArchiveOutlined.displayName = "ArchiveOutlined";

export default ArchiveOutlined;
