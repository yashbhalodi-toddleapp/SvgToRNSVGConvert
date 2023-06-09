import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const LogoutOutlined = (props) => {
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
          d="M17 2.99988C17 2.4476 16.5523 1.99988 16 1.99988C15.4477 1.99988 15 2.44759 15 2.99988L15 15C15 15.5523 15.4477 16 16 16C16.5522 16 17 15.5523 17 15L17 2.99988Z"
          fill={fill}
        />
        <Path
          d="M7.51472 7.5146C7.90524 7.12408 7.90524 6.49091 7.51472 6.10039C7.12419 5.70986 6.49103 5.70986 6.10051 6.10039C0.633165 11.5677 0.633165 20.432 6.10051 25.8994C11.5678 31.3667 20.4322 31.3667 25.8995 25.8994C31.3668 20.432 31.3668 11.5677 25.8995 6.10039C25.509 5.70986 24.8758 5.70986 24.4853 6.10039C24.0948 6.49091 24.0948 7.12408 24.4853 7.5146C29.1716 12.2009 29.1716 19.7989 24.4853 24.4852C19.799 29.1715 12.201 29.1715 7.51472 24.4852C2.82843 19.7989 2.82843 12.2009 7.51472 7.5146Z"
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
        d="M17.5 3C17.5 2.17158 16.8284 1.5 16 1.5C15.1716 1.5 14.5 2.17157 14.5 3L14.5 15.0001C14.5 15.8285 15.1715 16.5001 16 16.5001C16.8284 16.5001 17.5 15.8286 17.5 15.0001L17.5 3Z"
        fill={fill}
      />
      <Path
        d="M26.253 5.74697C25.6673 5.16118 24.7175 5.16118 24.1317 5.74697C23.5459 6.33276 23.5459 7.28251 24.1317 7.86829C28.6228 12.3593 28.6228 19.6407 24.1317 24.1317C19.6407 28.6228 12.3593 28.6228 7.86827 24.1317C3.37724 19.6407 3.37724 12.3593 7.86827 7.86829C8.45406 7.28251 8.45406 6.33276 7.86827 5.74697C7.28249 5.16118 6.33274 5.16118 5.74695 5.74697C0.0843496 11.4096 0.0843496 20.5905 5.74695 26.2531C11.4096 31.9157 20.5904 31.9157 26.253 26.2531C31.9157 20.5905 31.9157 11.4096 26.253 5.74697Z"
        fill={fill}
      />
    </Svg>
  );
};

LogoutOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

LogoutOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

LogoutOutlined.displayName = "LogoutOutlined";

export default LogoutOutlined;
