import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const PlaneAngledFilled = (props) => {
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
          d="M10.8439 14.7872L3.26943 6.68282C2.99745 6.39181 2.92411 5.96714 3.08274 5.60177C3.24136 5.23639 3.6017 5 4.00002 5H28C28.3573 5 28.6874 5.1906 28.866 5.5C29.0447 5.8094 29.0447 6.1906 28.866 6.5L16.866 27.2846C16.6669 27.6296 16.282 27.8234 15.8863 27.7781C15.4905 27.7328 15.1594 27.4569 15.0434 27.0759L11.8121 16.4641C11.892 16.442 11.9704 16.4095 12.0456 16.3661L21.5719 10.8661C22.0502 10.5899 22.214 9.97834 21.9379 9.50004C21.6618 9.02175 21.0502 8.85788 20.5719 9.13402L11.0456 14.634C10.9704 14.6774 10.9031 14.7291 10.8439 14.7872Z"
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
        d="M10.5024 14.4218L3.26943 6.68282C2.99745 6.39181 2.92411 5.96714 3.08274 5.60177C3.24136 5.23639 3.6017 5 4.00002 5H28C28.3573 5 28.6874 5.1906 28.866 5.5C29.0447 5.8094 29.0447 6.1906 28.866 6.5L16.866 27.2846C16.6669 27.6296 16.282 27.8234 15.8863 27.7781C15.4905 27.7328 15.1594 27.4569 15.0434 27.0759L11.9578 16.9427C12.0734 16.9095 12.1868 16.8619 12.2957 16.799L21.8219 11.299C22.5394 10.8848 22.7852 9.96745 22.371 9.25001C21.9568 8.53257 21.0394 8.28675 20.3219 8.70097L10.7957 14.201C10.6868 14.2638 10.5888 14.3382 10.5024 14.4218Z"
        fill={fill}
      />
    </Svg>
  );
};
PlaneAngledFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
PlaneAngledFilled.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default PlaneAngledFilled;
