import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ChatTextFilled = (props) => {
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
          d="M6.30769 2C3.92862 2 2 3.92862 2 6.30769V21.3846C2 23.7637 3.92862 25.6923 6.30769 25.6923H10.8002C11.3714 25.6923 11.9192 25.9192 12.3232 26.3232L16 30L19.6768 26.3232C20.0808 25.9192 20.6286 25.6923 21.1998 25.6923H25.6923C28.0714 25.6923 30 23.7637 30 21.3846V6.30769C30 3.92862 28.0714 2 25.6923 2H6.30769ZM7.98296 10.6154C7.98296 9.75627 8.67941 9.05983 9.53852 9.05983H22.4616C23.3207 9.05983 24.0172 9.75627 24.0172 10.6154C24.0172 11.4745 23.3207 12.1709 22.4616 12.1709H9.53852C8.67941 12.1709 7.98296 11.4745 7.98296 10.6154ZM7.98296 17.0769C7.98296 16.2178 8.67941 15.5214 9.53852 15.5214H22.4616C23.3207 15.5214 24.0172 16.2178 24.0172 17.0769C24.0172 17.936 23.3207 18.6325 22.4616 18.6325H9.53852C8.67941 18.6325 7.98296 17.936 7.98296 17.0769Z"
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
        d="M6.30769 2C3.92862 2 2 3.92862 2 6.30769V21.3846C2 23.7637 3.92862 25.6923 6.30769 25.6923H10.8002C11.3714 25.6923 11.9192 25.9192 12.3232 26.3232L16 30L19.6768 26.3232C20.0808 25.9192 20.6286 25.6923 21.1998 25.6923H25.6923C28.0714 25.6923 30 23.7637 30 21.3846V6.30769C30 3.92862 28.0714 2 25.6923 2H6.30769ZM7.98296 10.6154C7.98296 9.75627 8.67941 9.05983 9.53852 9.05983H22.4616C23.3207 9.05983 24.0172 9.75627 24.0172 10.6154C24.0172 11.4745 23.3207 12.1709 22.4616 12.1709H9.53852C8.67941 12.1709 7.98296 11.4745 7.98296 10.6154ZM7.98296 17.0769C7.98296 16.2178 8.67941 15.5214 9.53852 15.5214H22.4616C23.3207 15.5214 24.0172 16.2178 24.0172 17.0769C24.0172 17.936 23.3207 18.6325 22.4616 18.6325H9.53852C8.67941 18.6325 7.98296 17.936 7.98296 17.0769Z"
        fill={fill}
      />
    </Svg>
  );
};

ChatTextFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ChatTextFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ChatTextFilled.displayName = "ChatTextFilled";

export default ChatTextFilled;
