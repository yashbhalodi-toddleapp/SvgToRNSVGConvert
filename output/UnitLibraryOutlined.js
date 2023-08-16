import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const UnitLibraryOutlined = (props) => {
  const { size, weight, fill } = props;

  if (weight === "REGULAR") {
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M18.154 8.592C18.07 8.76 18.028 8.98867 18.028 9.278V14.066C18.028 14.3367 17.9953 14.5933 17.93 14.836C17.8647 15.0787 17.7573 15.298 17.608 15.494C17.4587 15.6807 17.2627 15.83 17.02 15.942C16.7867 16.054 16.502 16.11 16.166 16.11C15.83 16.11 15.5407 16.054 15.298 15.942C15.0647 15.83 14.8733 15.6807 14.724 15.494C14.584 15.298 14.4767 15.0787 14.402 14.836C14.3367 14.5933 14.304 14.3367 14.304 14.066V9.278C14.304 8.98867 14.2573 8.76 14.164 8.592C14.08 8.41466 13.9773 8.27933 13.856 8.186C13.7347 8.09267 13.604 8.032 13.464 8.004C13.324 7.96666 13.2073 7.948 13.114 7.948C13.0113 7.948 12.89 7.96666 12.75 8.004C12.6193 8.032 12.4933 8.09267 12.372 8.186C12.2507 8.27933 12.1433 8.41466 12.05 8.592C11.966 8.76 11.924 8.98867 11.924 9.278V14.262C11.924 14.8593 12.022 15.4053 12.218 15.9C12.414 16.3853 12.694 16.8053 13.058 17.16C13.422 17.5053 13.8653 17.776 14.388 17.972C14.9107 18.168 15.4987 18.266 16.152 18.266C16.796 18.266 17.3793 18.168 17.902 17.972C18.434 17.776 18.8867 17.5053 19.26 17.16C19.6333 16.8053 19.918 16.3853 20.114 15.9C20.3193 15.4053 20.422 14.8593 20.422 14.262V9.278C20.422 8.98867 20.3753 8.76 20.282 8.592C20.198 8.41466 20.0953 8.27933 19.974 8.186C19.8527 8.09267 19.722 8.032 19.582 8.004C19.442 7.96666 19.3253 7.948 19.232 7.948C19.1293 7.948 19.008 7.96666 18.868 8.004C18.7373 8.032 18.6067 8.09267 18.476 8.186C18.3547 8.27933 18.2473 8.41466 18.154 8.592Z"
          fill={fill}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5 7C4.5 4.23858 6.73858 2 9.5 2H23.5C26.2614 2 28.5 4.23858 28.5 7V25C28.5 27.7614 26.2614 30 23.5 30H9.5C6.73858 30 4.5 27.7614 4.5 25V7ZM26.5 7V17C26.5 19.7614 24.2614 22 21.5 22H6.5V7C6.5 5.34315 7.84315 4 9.5 4H23.5C25.1569 4 26.5 5.34315 26.5 7ZM21.5 24H6.5V25C6.5 26.6569 7.84315 28 9.5 28H23.5C25.1569 28 26.5 26.6569 26.5 25V21.899C25.2295 23.1955 23.4587 24 21.5 24Z"
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
        d="M17.2113 8.35932L17.2066 8.36864C17.0742 8.63352 17.0278 8.94929 17.0278 9.27824V14.0662C17.0278 14.2964 17.0001 14.5091 16.947 14.7063C16.8988 14.8855 16.8211 15.0443 16.7138 15.1864C16.6187 15.3037 16.4886 15.406 16.3103 15.4883L16.3035 15.4915C16.1547 15.5629 15.9484 15.6102 15.6658 15.6102C15.3861 15.6102 15.1727 15.5638 15.0107 15.4898C14.8458 15.4101 14.7195 15.3101 14.6226 15.1921C14.5209 15.0472 14.4404 14.8833 14.3823 14.6976C14.3308 14.5029 14.3038 14.293 14.3038 14.0662V9.27824C14.3038 8.94967 14.2531 8.63187 14.1091 8.3644C14.0011 8.14065 13.8559 7.94011 13.6607 7.78993C13.4875 7.65669 13.2925 7.56286 13.0784 7.51736C12.9214 7.4763 12.7631 7.44824 12.6138 7.44824C12.4575 7.44824 12.2947 7.47553 12.1321 7.51819C11.9239 7.56499 11.7352 7.66051 11.567 7.78993C11.3738 7.93855 11.2243 8.13713 11.1074 8.35937L11.1026 8.36864C10.9702 8.63352 10.9238 8.94929 10.9238 9.27824V14.2622C10.9238 14.9149 11.0311 15.5244 11.253 16.0844L11.2542 16.0875C11.4754 16.6351 11.7937 17.1138 12.2089 17.5184L12.2137 17.523C12.6315 17.9193 13.134 18.2236 13.7123 18.4404C14.2997 18.6607 14.9486 18.7662 15.6518 18.7662C16.3462 18.7662 16.9897 18.6606 17.576 18.4409C18.1621 18.2248 18.6728 17.9219 19.0993 17.5273L19.1042 17.5227C19.5297 17.1186 19.8543 16.6392 20.0766 16.0897C20.3092 15.5282 20.4218 14.9169 20.4218 14.2622V9.27824C20.4218 8.94968 20.3711 8.63187 20.2271 8.36441C20.1191 8.14065 19.9739 7.94011 19.7787 7.78993C19.6055 7.65669 19.4105 7.56286 19.1964 7.51736C19.0394 7.4763 18.8811 7.44824 18.7318 7.44824C18.5755 7.44824 18.4127 7.47552 18.2501 7.51818C18.0455 7.56414 17.8569 7.65671 17.6852 7.77938L17.678 7.78453L17.671 7.78993C17.4778 7.93855 17.3282 8.13708 17.2113 8.35932Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 1.5C5.96243 1.5 3.5 3.96243 3.5 7V25C3.5 28.0376 5.96243 30.5 9 30.5H23C26.0376 30.5 28.5 28.0376 28.5 25V7C28.5 3.96243 26.0376 1.5 23 1.5H9ZM25.5 17V7C25.5 5.61929 24.3807 4.5 23 4.5H9C7.61929 4.5 6.5 5.61929 6.5 7V21.5H21C23.4853 21.5 25.5 19.4853 25.5 17ZM6.5 24.5H21C22.6884 24.5 24.2465 23.9421 25.5 23.0005V25C25.5 26.3807 24.3807 27.5 23 27.5H9C7.61929 27.5 6.5 26.3807 6.5 25V24.5Z"
        fill={fill}
      />
    </Svg>
  );
};

UnitLibraryOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

UnitLibraryOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

UnitLibraryOutlined.displayName = "UnitLibraryOutlined";

export default UnitLibraryOutlined;
