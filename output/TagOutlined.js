import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const TagOutlined = (props) => {
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
          d="M11 9C9.34315 9 8 10.3431 8 12C8 13.6569 9.34315 15 11 15C12.6569 15 14 13.6569 14 12C14 10.3431 12.6569 9 11 9ZM10 12C10 11.4477 10.4477 11 11 11C11.5523 11 12 11.4477 12 12C12 12.5523 11.5523 13 11 13C10.4477 13 10 12.5523 10 12Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 4C4.34315 4 3 5.34315 3 7V15.1716C3 15.9672 3.31607 16.7303 3.87868 17.2929L14.8787 28.2929C16.0503 29.4645 17.9497 29.4645 19.1213 28.2929L27.2929 20.1213C28.4645 18.9497 28.4645 17.0503 27.2929 15.8787L16.2929 4.87868C15.7303 4.31607 14.9672 4 14.1716 4H6ZM5 7C5 6.44772 5.44772 6 6 6H14.1716C14.4368 6 14.6911 6.10536 14.8787 6.29289L25.8787 17.2929C26.2692 17.6834 26.2692 18.3166 25.8787 18.7071L17.7071 26.8787C17.3166 27.2692 16.6834 27.2692 16.2929 26.8787L5.29289 15.8787C5.10536 15.6911 5 15.4368 5 15.1716V7Z"
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
        d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 3.5C5.067 3.5 3.5 5.067 3.5 7V15.1716C3.5 16.0998 3.86875 16.9901 4.52513 17.6464L15.5251 28.6464C16.892 30.0133 19.108 30.0133 20.4749 28.6464L28.6464 20.4749C30.0133 19.108 30.0133 16.892 28.6464 15.5251L17.6464 4.52513C16.9901 3.86875 16.0998 3.5 15.1716 3.5H7ZM6.5 7C6.5 6.72386 6.72386 6.5 7 6.5H15.1716C15.3042 6.5 15.4314 6.55268 15.5251 6.64645L26.5251 17.6464C26.7204 17.8417 26.7204 18.1583 26.5251 18.3536L18.3536 26.5251C18.1583 26.7204 17.8417 26.7204 17.6464 26.5251L6.64645 15.5251C6.55268 15.4314 6.5 15.3042 6.5 15.1716V7Z"
        fill={fill}
      />
    </Svg>
  );
};

TagOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

TagOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

TagOutlined.displayName = "TagOutlined";

export default TagOutlined;
