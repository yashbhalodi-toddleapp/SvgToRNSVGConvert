import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const LinkOutlined = (props) => {
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
          d="M18.7071 6.70722C20.5257 4.88861 23.4743 4.88861 25.2929 6.70722C27.1115 8.52584 27.1115 11.4744 25.2929 13.293L21.5355 17.0504C19.5829 19.003 16.4171 19.003 14.4645 17.0504L13.7071 16.293C13.3166 15.9025 12.6834 15.9025 12.2929 16.293C11.9024 16.6835 11.9024 17.3167 12.2929 17.7072L13.0502 18.4646C15.7839 21.1983 20.2161 21.1982 22.9497 18.4646L26.7071 14.7072C29.3068 12.1076 29.3068 7.89267 26.7071 5.29301C24.1074 2.69334 19.8925 2.69335 17.2929 5.29301L14.2929 8.29301C13.9024 8.68353 13.9024 9.3167 14.2929 9.70722C14.6834 10.0977 15.3166 10.0977 15.7071 9.70722L18.7071 6.70722Z"
          fill="#717171"
        />
        <Path
          d="M10.4645 14.9498C12.4171 12.9972 15.5829 12.9972 17.5355 14.9498L18.2929 15.7072C18.6834 16.0977 19.3166 16.0977 19.7071 15.7072C20.0976 15.3167 20.0976 14.6835 19.7071 14.293L18.9497 13.5356C16.2161 10.802 11.7839 10.802 9.05025 13.5356L5.29288 17.293C2.69322 19.8927 2.69323 24.1075 5.29289 26.7072C7.89255 29.3069 12.1074 29.3069 14.7071 26.7072L17.7071 23.7072C18.0976 23.3167 18.0976 22.6835 17.7071 22.293C17.3166 21.9025 16.6834 21.9025 16.2929 22.293L13.2929 25.293C11.4743 27.1116 8.52572 27.1116 6.7071 25.293C4.88849 23.4744 4.88848 20.5258 6.7071 18.7072L10.4645 14.9498Z"
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
        d="M19.0607 7.06078C20.684 5.43742 23.316 5.43742 24.9393 7.06078C26.5627 8.68413 26.5627 11.3161 24.9393 12.9395L21.182 16.6968C19.4246 18.4542 16.5754 18.4542 14.818 16.6968L14.0607 15.9395C13.4749 15.3537 12.5251 15.3537 11.9393 15.9395C11.3536 16.5252 11.3536 17.475 11.9393 18.0608L12.6967 18.8181C15.6256 21.7471 20.3744 21.7471 23.3033 18.8181L27.0607 15.0608C29.8556 12.2659 29.8556 7.73438 27.0607 4.93946C24.2657 2.14453 19.7343 2.14453 16.9393 4.93946L13.9393 7.93946C13.3536 8.52524 13.3536 9.47499 13.9393 10.0608C14.5251 10.6466 15.4749 10.6466 16.0607 10.0608L19.0607 7.06078Z"
        fill="#717171"
      />
      <Path
        d="M10.818 15.3034C12.5754 13.546 15.4246 13.546 17.182 15.3034L17.9393 16.0607C18.5251 16.6465 19.4749 16.6465 20.0607 16.0607C20.6464 15.4749 20.6464 14.5252 20.0607 13.9394L19.3033 13.182C16.3744 10.2531 11.6256 10.2531 8.69669 13.1821L4.93933 16.9394C2.1444 19.7344 2.14441 24.2658 4.93934 27.0607C7.73426 29.8557 12.2657 29.8557 15.0607 27.0607L18.0607 24.0607C18.6464 23.475 18.6464 22.5252 18.0607 21.9394C17.4749 21.3536 16.5251 21.3536 15.9393 21.9394L12.9393 24.9394C11.316 26.5628 8.68401 26.5628 7.06066 24.9394C5.4373 23.3161 5.4373 20.6841 7.06065 19.0607L10.818 15.3034Z"
        fill="#717171"
      />
    </Svg>
  );
};

LinkOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

LinkOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};
export default LinkOutlined;
