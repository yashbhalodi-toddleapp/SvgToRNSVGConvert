import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const ChatDiscussionOutlined = (props) => {
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
          d="M8 3C5.23858 3 3 5.23858 3 8V22C3 22.4045 3.24364 22.7691 3.61732 22.9239C3.99099 23.0787 4.42111 22.9931 4.70711 22.7071L7.87132 19.5429C8.05886 19.3554 8.31321 19.25 8.57843 19.25H9V20.25C9 23.0114 11.2386 25.25 14 25.25H23.4216C23.6868 25.25 23.9411 25.3554 24.1287 25.5429L27.2929 28.7071C27.5789 28.9931 28.009 29.0787 28.3827 28.9239C28.7564 28.7691 29 28.4045 29 28V14C29 11.2386 26.7614 9 24 9H23V8C23 5.23858 20.7614 3 18 3H8ZM23 11V14.25C23 17.0114 20.7614 19.25 18 19.25H11V20.25C11 21.9069 12.3431 23.25 14 23.25H23.4216C24.2172 23.25 24.9803 23.5661 25.5429 24.1287L27 25.5858V14C27 12.3431 25.6569 11 24 11H23ZM5 8C5 6.34315 6.34315 5 8 5H18C19.6569 5 21 6.34315 21 8V14.25C21 15.9069 19.6569 17.25 18 17.25H8.57843C7.78278 17.25 7.01972 17.5661 6.45711 18.1287L5 19.5858V8Z"
          fill="#717171"
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
        d="M7 1.5C3.96243 1.5 1.5 3.96243 1.5 7V22C1.5 22.6067 1.86546 23.1536 2.42597 23.3858C2.98649 23.618 3.63166 23.4897 4.06066 23.0607L8.47487 18.6464C8.48301 18.6383 8.4914 18.6305 8.50003 18.623V20C8.50003 23.0376 10.9625 25.5 14 25.5H23.1716C23.3042 25.5 23.4314 25.5527 23.5251 25.6464L27.9393 30.0607C28.3683 30.4897 29.0135 30.618 29.574 30.3858C30.1345 30.1536 30.5 29.6067 30.5 29V14C30.5 10.9624 28.0376 8.5 25 8.5H23.5V7C23.5 3.96243 21.0376 1.5 18 1.5H7ZM23.5 11.5V13C23.5 16.0376 21.0376 18.5 18 18.5H11.5V20C11.5 21.3807 12.6193 22.5 14 22.5H23.1716C24.0998 22.5 24.9901 22.8687 25.6464 23.5251L27.5 25.3787V14C27.5 12.6193 26.3807 11.5 25 11.5H23.5ZM4.5 7C4.5 5.61929 5.61929 4.5 7 4.5H18C19.3807 4.5 20.5 5.61929 20.5 7V13C20.5 14.3807 19.3807 15.5 18 15.5H8.82843C7.90017 15.5 7.00993 15.8687 6.35355 16.5251L4.5 18.3787V7Z"
        fill="#808080"
      />
    </Svg>
  );
};
ChatDiscussionOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
ChatDiscussionOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default ChatDiscussionOutlined;
