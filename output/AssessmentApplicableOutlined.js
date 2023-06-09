import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const AssessmentApplicableOutlined = (props) => {
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
          d="M21.7071 13.2929C22.0976 13.6834 22.0976 14.3166 21.7071 14.7071L14.7071 21.7071C14.3166 22.0976 13.6834 22.0976 13.2929 21.7071L10.2929 18.7071C9.90237 18.3166 9.90237 17.6834 10.2929 17.2929C10.6834 16.9024 11.3166 16.9024 11.7071 17.2929L14 19.5858L20.2929 13.2929C20.6834 12.9024 21.3166 12.9024 21.7071 13.2929Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.8293 4H23C25.7614 4 28 6.23858 28 9V25C28 27.7614 25.7614 30 23 30H9C6.23858 30 4 27.7614 4 25V9C4 6.23858 6.23858 4 9 4H9.17071C9.58254 2.83481 10.6938 2 12 2H20C21.3062 2 22.4175 2.83481 22.8293 4ZM9.17071 6H9C7.34315 6 6 7.34315 6 9V25C6 26.6569 7.34315 28 9 28H23C24.6569 28 26 26.6569 26 25V9C26 7.34315 24.6569 6 23 6H22.8293C22.4175 7.16519 21.3062 8 20 8H12C10.6938 8 9.58254 7.16519 9.17071 6ZM11 5C11 4.44772 11.4477 4 12 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H12C11.4477 6 11 5.55228 11 5Z"
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
        d="M22.0607 12.9393C22.6464 13.5251 22.6464 14.4749 22.0607 15.0607L15.0607 22.0607C14.4749 22.6464 13.5251 22.6464 12.9393 22.0607L9.93934 19.0607C9.35355 18.4749 9.35355 17.5251 9.93934 16.9393C10.5251 16.3536 11.4749 16.3536 12.0607 16.9393L14 18.8787L19.9393 12.9393C20.5251 12.3536 21.4749 12.3536 22.0607 12.9393Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.2108 4.00397C26.1507 4.11478 28.5 6.53303 28.5 9.5V25C28.5 28.0376 26.0376 30.5 23 30.5H9C5.96243 30.5 3.5 28.0376 3.5 25V9.5C3.5 6.53303 5.8493 4.11478 8.78916 4.00397C9.38155 2.53595 10.8198 1.5 12.5 1.5H19.5C21.1802 1.5 22.6184 2.53595 23.2108 4.00397ZM8.79415 7.00835C7.50973 7.11303 6.5 8.1886 6.5 9.5V25C6.5 26.3807 7.61929 27.5 9 27.5H23C24.3807 27.5 25.5 26.3807 25.5 25V9.5C25.5 8.1886 24.4903 7.11304 23.2058 7.00836C22.6104 8.46984 21.1755 9.5 19.5 9.5H12.5C10.8245 9.5 9.38961 8.46984 8.79415 7.00835ZM11.5 5.5C11.5 4.94772 11.9477 4.5 12.5 4.5H19.5C20.0523 4.5 20.5 4.94772 20.5 5.5C20.5 6.05228 20.0523 6.5 19.5 6.5H12.5C11.9477 6.5 11.5 6.05229 11.5 5.5Z"
        fill={fill}
      />
    </Svg>
  );
};

AssessmentApplicableOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

AssessmentApplicableOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

AssessmentApplicableOutlined.displayName = "AssessmentApplicableOutlined";

export default AssessmentApplicableOutlined;
