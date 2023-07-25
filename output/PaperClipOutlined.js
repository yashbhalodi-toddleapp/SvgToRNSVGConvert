import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const PaperClipOutlined = (props) => {
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
          d="M9.42857 8C9.42857 7.44772 9.87629 7 10.4286 7H21C25.9706 7 30 11.0294 30 16C30 20.9706 25.9706 25 21 25H9C5.13401 25 2 21.866 2 18C2 14.134 5.13401 11 9 11H20.3571C23.1186 11 25.3571 13.2386 25.3571 16C25.3571 18.7614 23.1186 21 20.3571 21H10.4286C9.87629 21 9.42857 20.5523 9.42857 20C9.42857 19.4477 9.87629 19 10.4286 19H20.3571C22.014 19 23.3571 17.6569 23.3571 16C23.3571 14.3431 22.014 13 20.3571 13H9C6.23858 13 4 15.2386 4 18C4 20.7614 6.23858 23 9 23H21C24.866 23 28 19.866 28 16C28 12.134 24.866 9 21 9H10.4286C9.87629 9 9.42857 8.55228 9.42857 8Z"
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
        d="M8 8C8 7.17157 8.67157 6.5 9.5 6.5H21C26.2467 6.5 30.5 10.7533 30.5 16C30.5 21.2467 26.2467 25.5 21 25.5H9C4.85786 25.5 1.5 22.1421 1.5 18C1.5 13.8579 4.85786 10.5 9 10.5H20.5C23.5376 10.5 26 12.9624 26 16C26 19.0376 23.5376 21.5 20.5 21.5H10C9.17157 21.5 8.5 20.8284 8.5 20C8.5 19.1716 9.17157 18.5 10 18.5H20.5C21.8807 18.5 23 17.3807 23 16C23 14.6193 21.8807 13.5 20.5 13.5H9C6.51472 13.5 4.5 15.5147 4.5 18C4.5 20.4853 6.51472 22.5 9 22.5H21C24.5899 22.5 27.5 19.5899 27.5 16C27.5 12.4101 24.5899 9.5 21 9.5H9.5C8.67157 9.5 8 8.82843 8 8Z"
        fill={fill}
      />
    </Svg>
  );
};

PaperClipOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

PaperClipOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

PaperClipOutlined.displayName = "PaperClipOutlined";

export default PaperClipOutlined;
