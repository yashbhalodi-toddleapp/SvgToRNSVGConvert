import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ArrowLeftPaneOutlined = (props) => {
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
          d="M9 21C9.55229 21 10 20.5523 10 20V18C10 17.4477 9.55229 17 9 17C8.44772 17 8 17.4477 8 18V20C8 20.5523 8.44772 21 9 21Z"
          fill={fill}
        />
        <Path
          d="M10 14C10 14.5523 9.55229 15 9 15C8.44772 15 8 14.5523 8 14V12C8 11.4477 8.44772 11 9 11C9.55229 11 10 11.4477 10 12V14Z"
          fill={fill}
        />
        <Path
          d="M17.7071 20.7071C17.3166 21.0976 16.6834 21.0976 16.2929 20.7071L12.2929 16.7071C11.9024 16.3166 11.9024 15.6834 12.2929 15.2929L16.2929 11.2929C16.6834 10.9024 17.3166 10.9024 17.7071 11.2929C18.0976 11.6834 18.0976 12.3166 17.7071 12.7071L15.4142 15H25C25.5523 15 26 15.4477 26 16C26 16.5523 25.5523 17 25 17H15.4142L17.7071 19.2929C18.0976 19.6834 18.0976 20.3166 17.7071 20.7071Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 28C4.23858 28 2 25.7614 2 23V9C2 6.23858 4.23858 4 7 4H25C27.7614 4 30 6.23858 30 9V23C30 25.7614 27.7614 28 25 28H7ZM4 23C4 24.6569 5.34315 26 7 26H8V24C8 23.4477 8.44772 23 9 23C9.55229 23 10 23.4477 10 24V26H25C26.6569 26 28 24.6569 28 23V9C28 7.34315 26.6569 6 25 6H10V8C10 8.55228 9.55229 9 9 9C8.44772 9 8 8.55228 8 8V6H7C5.34315 6 4 7.34315 4 9V23Z"
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
        d="M10.3337 19.9998C10.3337 20.7362 9.73671 21.3332 9.00033 21.3332C8.26395 21.3332 7.66699 20.7362 7.66699 19.9998V17.9998C7.66699 17.2635 8.26395 16.6665 9.00033 16.6665C9.73671 16.6665 10.3337 17.2635 10.3337 17.9998V19.9998Z"
        fill={fill}
      />
      <Path
        d="M9.00033 15.3332C9.73671 15.3332 10.3337 14.7362 10.3337 13.9998V11.9998C10.3337 11.2635 9.73671 10.6665 9.00033 10.6665C8.26395 10.6665 7.66699 11.2635 7.66699 11.9998V13.9998C7.66699 14.7362 8.26395 15.3332 9.00033 15.3332Z"
        fill={fill}
      />
      <Path
        d="M16.2193 17.3332L17.9431 19.057C18.4638 19.5777 18.4638 20.4219 17.9431 20.9426C17.4224 21.4633 16.5782 21.4633 16.0575 20.9426L12.0575 16.9426C11.5368 16.4219 11.5368 15.5777 12.0575 15.057L16.0575 11.057C16.5782 10.5363 17.4224 10.5363 17.9431 11.057C18.4638 11.5777 18.4638 12.4219 17.9431 12.9426L16.2193 14.6665H25.0003C25.7367 14.6665 26.3337 15.2635 26.3337 15.9998C26.3337 16.7362 25.7367 17.3332 25.0003 17.3332H16.2193Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.66699 22.9998C1.66699 25.9454 4.05481 28.3332 7.00033 28.3332H25.0003C27.9458 28.3332 30.3337 25.9454 30.3337 22.9998V8.99984C30.3337 6.05432 27.9458 3.6665 25.0003 3.6665H7.00033C4.05481 3.6665 1.66699 6.05432 1.66699 8.99984L1.66699 22.9998ZM7.00033 25.6665C5.52757 25.6665 4.33366 24.4726 4.33366 22.9998V8.99984C4.33366 7.52708 5.52757 6.33317 7.00033 6.33317H7.66699V7.99984C7.66699 8.73622 8.26395 9.33317 9.00033 9.33317C9.73671 9.33317 10.3337 8.73622 10.3337 7.99984V6.33317H25.0003C26.4731 6.33317 27.667 7.52708 27.667 8.99984V22.9998C27.667 24.4726 26.4731 25.6665 25.0003 25.6665H10.3337V23.9998C10.3337 23.2635 9.73671 22.6665 9.00033 22.6665C8.26395 22.6665 7.66699 23.2635 7.66699 23.9998V25.6665H7.00033Z"
        fill={fill}
      />
    </Svg>
  );
};

ArrowLeftPaneOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ArrowLeftPaneOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ArrowLeftPaneOutlined.displayName = "ArrowLeftPaneOutlined";

export default ArrowLeftPaneOutlined;
