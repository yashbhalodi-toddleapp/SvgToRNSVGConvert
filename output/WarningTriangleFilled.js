import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const WarningTriangleFilled = (props) => {
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
          d="M5.348 29c-2.27 0 -3.718 -2.424 -2.642 -4.422l10.652 -19.781c1.133 -2.104 4.15 -2.104 5.283 0L29.293 24.578c1.076 1.999 -0.371 4.422 -2.641 4.422H5.348ZM15 12a1 1 0 1 1 2 0v6a1 1 0 1 1 -2 0V12Zm2.5 10.5a1.5 1.5 0 1 0 -3 0 1.5 1.5 0 0 0 3 0Z"
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
        d="M5.34842 29.0002C3.0784 29.0002 1.63079 26.5766 2.70701 24.5779L13.3586 4.79645C14.4913 2.69285 17.5087 2.69285 18.6414 4.79645L29.293 24.5779C30.3692 26.5766 28.9216 29.0002 26.6516 29.0002L5.34842 29.0002ZM15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12V18C17 18.5523 16.5523 19 16 19C15.4477 19 15 18.5523 15 18V12ZM17.5 22.5C17.5 21.6716 16.8284 21 16 21C15.1716 21 14.5 21.6716 14.5 22.5C14.5 23.3284 15.1716 24 16 24C16.8284 24 17.5 23.3284 17.5 22.5Z"
        fill={fill}
      />
    </Svg>
  );
};

WarningTriangleFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

WarningTriangleFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default WarningTriangleFilled;
