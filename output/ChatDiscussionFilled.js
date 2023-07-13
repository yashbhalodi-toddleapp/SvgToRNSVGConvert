import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ChatDiscussionFilled = (props) => {
  const { size, weight, fill } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M29.0001 28.037V30.3618L27.3562 28.7179L23.1055 24.4672C22.9249 24.2866 22.6799 24.1852 22.4245 24.1852H13.5927C10.9335 24.1852 8.77785 22.0295 8.77785 19.3704V13.5926C8.77785 10.9334 10.9335 8.77776 13.5927 8.77776H24.1853C26.8444 8.77776 29.0001 10.9334 29.0001 13.5926V23.2222V28.037Z"
        stroke="white"
        strokeWidth={1.92593}
        strokeLinejoin="round"
      />
      <Path
        d="M28.0371 13.5926C28.0371 11.4653 26.3126 9.7408 24.1852 9.7408H13.5926C11.4653 9.7408 9.74079 11.4653 9.74079 13.5926V19.3704C9.74079 21.4977 11.4653 23.2223 13.5926 23.2223H22.4245C22.9353 23.2223 23.4252 23.4252 23.7864 23.7864L28.0371 28.0371V13.5926Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.0001 13.5926C29.0001 10.9335 26.8444 8.77783 24.1852 8.77783H13.5926C10.9335 8.77783 8.77783 10.9335 8.77783 13.5926V19.3704C8.77783 22.0296 10.9335 24.1852 13.5926 24.1852H22.4245C22.6799 24.1852 22.9249 24.2867 23.1054 24.4673L27.3562 28.718C27.6316 28.9934 28.0458 29.0758 28.4056 28.9268C28.7654 28.7777 29.0001 28.4266 29.0001 28.0371V13.5926ZM24.1852 10.7038C25.7807 10.7038 27.0741 11.9972 27.0741 13.5926V25.7123L24.4673 23.1054C23.9255 22.5637 23.1907 22.2593 22.4245 22.2593H13.5926C11.9972 22.2593 10.7038 20.9659 10.7038 19.3704V13.5926C10.7038 11.9972 11.9972 10.7038 13.5926 10.7038H24.1852Z"
        fill={fill}
      />
      <Path
        d="M2.99993 22.2592V24.584L4.64381 22.9401L8.89453 18.6894C9.07512 18.5088 9.32006 18.4073 9.57545 18.4073H18.4073C21.0665 18.4073 23.2222 16.2517 23.2222 13.5925V7.81474C23.2222 5.15559 21.0665 2.99993 18.4073 2.99993H7.81474C5.15559 2.99993 2.99993 5.1556 2.99993 7.81474V17.4444V22.2592Z"
        stroke="white"
        strokeWidth={1.92593}
        strokeLinejoin="round"
      />
      <Path
        d="M3.96296 7.81482C3.96296 5.6875 5.6875 3.96296 7.81481 3.96296H18.4074C20.5347 3.96296 22.2593 5.6875 22.2593 7.81482V13.5926C22.2593 15.7199 20.5347 17.4444 18.4074 17.4444H9.57552C9.06474 17.4444 8.57487 17.6474 8.21369 18.0085L3.96296 22.2593V7.81482Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 7.81482C3 5.15567 5.15567 3 7.81481 3H18.4074C21.0666 3 23.2222 5.15567 23.2222 7.81482V13.5926C23.2222 16.2517 21.0666 18.4074 18.4074 18.4074H9.57552C9.32013 18.4074 9.07519 18.5089 8.8946 18.6895L4.64388 22.9402C4.36848 23.2156 3.95429 23.298 3.59445 23.1489C3.23462 22.9999 3 22.6487 3 22.2593V7.81482ZM7.81481 4.92593C6.21933 4.92593 4.92593 6.21933 4.92593 7.81482V19.9345L7.53277 17.3276C8.07454 16.7858 8.80934 16.4815 9.57552 16.4815H18.4074C20.0029 16.4815 21.2963 15.1881 21.2963 13.5926V7.81482C21.2963 6.21933 20.0029 4.92593 18.4074 4.92593H7.81481Z"
        fill={fill}
      />
    </Svg>
  );
};

ChatDiscussionFilled.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

ChatDiscussionFilled.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ChatDiscussionFilled.displayName = "ChatDiscussionFilled";

export default ChatDiscussionFilled;
