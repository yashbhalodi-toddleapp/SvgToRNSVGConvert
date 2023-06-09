import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const LoudspeakerOutlined = (props) => {
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
          d="M14 23.642L24.2427 26.314C26.1435 26.8099 28 25.3755 28 23.4112L28 8.5885C28 6.62414 26.1435 5.1898 24.2427 5.68564L5.24273 10.6422C3.92174 10.9868 3 12.1798 3 13.545V18.4546C3 19.8198 3.92174 21.0129 5.24273 21.3575L6 21.555V24.9998C6 26.6567 7.34314 27.9998 9 27.9998H11C12.6569 27.9998 14 26.6567 14 24.9998V23.642ZM26 8.5885C26 7.93371 25.3812 7.4556 24.7476 7.62088L14 10.4246V21.5751L24.7476 24.3788C25.3812 24.5441 26 24.0659 26 23.4112L26 8.5885ZM8 22.0768V24.9998C8 25.5521 8.44772 25.9998 9 25.9998H11C11.5523 25.9998 12 25.5521 12 24.9998V23.1202L8 22.0768ZM12 21.0533V10.9463L5.74758 12.5774C5.30725 12.6923 5 13.09 5 13.545V18.4546C5 18.9097 5.30725 19.3074 5.74758 19.4222L12 21.0533Z"
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
        d="M14.5 23.6251L25.02 26.6934C27.26 27.3468 29.5 25.6668 29.5 23.3334V6.66675C29.5 4.33342 27.26 2.65342 25.02 3.30675L12.8092 6.86823C12.731 6.87826 12.653 6.89454 12.5761 6.91719L6.05563 8.83802L5.02 9.14008C3.52667 9.57564 2.5 10.9445 2.5 12.5001V17.5001C2.5 19.0556 3.52667 20.4245 5.02 20.8601L5.5 21.0001V24.7168C5.5 26.2637 6.51544 27.6271 7.9975 28.0702L9.9975 28.6681C12.2424 29.3392 14.5 27.6578 14.5 25.3147V23.6251ZM25.86 6.18675C26.18 6.09342 26.5 6.33342 26.5 6.66675V23.3334C26.5 23.6668 26.18 23.9068 25.86 23.8134L14.5 20.5001L14.5 11.0001C14.5 10.9993 14.5 10.9985 14.5 10.9977V9.50008L25.86 6.18675ZM11.5 19.6251L11.5 10.3751L6.89937 11.7169L5.85871 12.0235C5.64603 12.0861 5.5 12.2814 5.5 12.5031L5.5 17.4912C5.50037 17.7108 5.64403 17.9054 5.85417 17.9694L6.52973 18.1754L11.5 19.6251ZM11.5 22.8273V25.3147C11.5 25.6494 11.1775 25.8896 10.8568 25.7938L8.85679 25.1959C8.64506 25.1326 8.5 24.9378 8.5 24.7168V21.9125L11.5 22.8273Z"
        fill={fill}
      />
    </Svg>
  );
};

LoudspeakerOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

LoudspeakerOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

LoudspeakerOutlined.displayName = "LoudspeakerOutlined";

export default LoudspeakerOutlined;
