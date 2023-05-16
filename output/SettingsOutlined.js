import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";

const SettingsOutlined = (props) => {
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
          d="M16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10ZM12 16C12 13.7909 13.7909 12 16 12C18.2091 12 20 13.7909 20 16C20 18.2091 18.2091 20 16 20C13.7909 20 12 18.2091 12 16Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5667 3.36649C17.3406 1.54451 14.6594 1.5445 13.4333 3.36649L12.188 5.21697C11.9425 5.58181 11.5023 5.76413 11.0707 5.67976L8.88169 5.25183C6.72635 4.83049 4.83049 6.72634 5.25183 8.88169L5.67976 11.0707C5.76413 11.5023 5.58181 11.9425 5.21697 12.188L3.36649 13.4333C1.54451 14.6594 1.5445 17.3406 3.36649 18.5667L5.21697 19.812C5.58181 20.0575 5.76413 20.4977 5.67976 20.9293L5.25183 23.1183C4.83049 25.2736 6.72634 27.1695 8.88169 26.7482L11.0707 26.3202C11.5023 26.2359 11.9425 26.4182 12.188 26.783L13.4333 28.6335C14.6594 30.4555 17.3406 30.4555 18.5667 28.6335L19.812 26.783C20.0575 26.4182 20.4977 26.2359 20.9293 26.3202L23.1183 26.7482C25.2736 27.1695 27.1695 25.2737 26.7482 23.1183L26.3202 20.9293C26.2359 20.4977 26.4182 20.0575 26.783 19.812L28.6335 18.5667C30.4555 17.3406 30.4555 14.6594 28.6335 13.4333L26.783 12.188C26.4182 11.9425 26.2359 11.5023 26.3202 11.0707L26.7482 8.88169C27.1695 6.72635 25.2737 4.83049 23.1183 5.25183L20.9293 5.67976C20.4977 5.76413 20.0575 5.58181 19.812 5.21697L18.5667 3.36649ZM15.0926 4.48311C15.5261 3.83896 16.4739 3.83896 16.9074 4.48311L18.1527 6.33359C18.8472 7.36556 20.0922 7.88125 21.313 7.64261L23.502 7.21468C24.264 7.06572 24.9343 7.73598 24.7853 8.49798L24.3574 10.687C24.1187 11.9078 24.6344 13.1528 25.6664 13.8473L27.5169 15.0926C28.161 15.5261 28.161 16.4739 27.5169 16.9074L25.6664 18.1527C24.6344 18.8472 24.1187 20.0922 24.3574 21.313L24.7853 23.502C24.9343 24.264 24.264 24.9343 23.502 24.7853L21.313 24.3574C20.0922 24.1187 18.8472 24.6344 18.1527 25.6664L16.9074 27.5169C16.4739 28.161 15.5261 28.161 15.0926 27.5169L13.8473 25.6664C13.1528 24.6344 11.9078 24.1187 10.687 24.3574L8.49798 24.7853C7.73598 24.9343 7.06572 24.264 7.21468 23.502L7.64261 21.313C7.88125 20.0922 7.36556 18.8472 6.33359 18.1527L4.48311 16.9074C3.83896 16.4739 3.83896 15.5261 4.48311 15.0926L6.33359 13.8473C7.36556 13.1528 7.88125 11.9078 7.64261 10.687L7.21468 8.49798C7.06572 7.73598 7.73598 7.06572 8.49798 7.21468L10.687 7.64261C11.9078 7.88125 13.1528 7.36556 13.8473 6.33359L15.0926 4.48311Z"
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
        d="M16 9.5C12.4101 9.5 9.5 12.4101 9.5 16C9.5 19.5899 12.4101 22.5 16 22.5C19.5899 22.5 22.5 19.5899 22.5 16C22.5 12.4101 19.5899 9.5 16 9.5ZM12.5 16C12.5 14.067 14.067 12.5 16 12.5C17.933 12.5 19.5 14.067 19.5 16C19.5 17.933 17.933 19.5 16 19.5C14.067 19.5 12.5 17.933 12.5 16Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.9815 3.08734C17.5572 0.970891 14.4428 0.970883 13.0185 3.08734L11.7732 4.93781C11.6399 5.13588 11.401 5.23485 11.1667 5.18905L8.97762 4.76112C6.47395 4.27169 4.27168 6.47394 4.76112 8.97762L5.18905 11.1667C5.23485 11.401 5.13587 11.6399 4.93781 11.7732L3.08734 13.0185C0.970891 14.4428 0.970883 17.5572 3.08734 18.9815L4.93781 20.2268C5.13588 20.3601 5.23485 20.599 5.18905 20.8333L4.76112 23.0224C4.27169 25.5261 6.47394 27.7283 8.97762 27.2389L11.1667 26.811C11.401 26.7652 11.6399 26.8641 11.7732 27.0622L13.0185 28.9127C14.4428 31.0291 17.5572 31.0291 18.9815 28.9127L20.2268 27.0622C20.3601 26.8641 20.599 26.7652 20.8333 26.811L23.0224 27.2389C25.5261 27.7283 27.7283 25.5261 27.2389 23.0224L26.811 20.8333C26.7652 20.599 26.8641 20.3601 27.0622 20.2268L28.9127 18.9815C31.0291 17.5572 31.0291 14.4428 28.9127 13.0185L27.0622 11.7732C26.8641 11.6399 26.7652 11.401 26.811 11.1667L27.2389 8.97762C27.7283 6.47395 25.5261 4.27168 23.0224 4.76112L20.8333 5.18905C20.599 5.23485 20.3601 5.13588 20.2268 4.93781L18.9815 3.08734ZM15.5074 4.76226C15.7427 4.41258 16.2573 4.41258 16.4926 4.76227L17.7379 6.61274C18.5446 7.8115 19.9908 8.41053 21.4089 8.13332L23.5979 7.70539C24.0116 7.62452 24.3755 7.98839 24.2946 8.40206L23.8667 10.5911C23.5895 12.0092 24.1885 13.4554 25.3873 14.2621L27.2377 15.5074C27.5874 15.7427 27.5874 16.2573 27.2377 16.4926L25.3873 17.7379C24.1885 18.5446 23.5895 19.9908 23.8667 21.4089L24.2946 23.5979C24.3755 24.0116 24.0116 24.3755 23.5979 24.2946L21.4089 23.8667C19.9908 23.5895 18.5446 24.1885 17.7379 25.3873L16.4926 27.2377C16.2573 27.5874 15.7427 27.5874 15.5074 27.2377L14.2621 25.3873C13.4554 24.1885 12.0092 23.5895 10.5911 23.8667L8.40205 24.2946C7.98839 24.3755 7.62452 24.0116 7.70539 23.5979L8.13332 21.4089C8.41053 19.9908 7.81149 18.5446 6.61274 17.7379L4.76226 16.4926C4.41258 16.2573 4.41258 15.7427 4.76227 15.5074L6.61274 14.2621C7.8115 13.4554 8.41053 12.0092 8.13332 10.5911L7.70539 8.40205C7.62452 7.98839 7.98839 7.62452 8.40206 7.70539L10.5911 8.13332C12.0092 8.41053 13.4554 7.81149 14.2621 6.61274L15.5074 4.76226Z"
        fill={fill}
      />
    </Svg>
  );
};
SettingsOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
SettingsOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default SettingsOutlined;
