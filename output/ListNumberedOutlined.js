import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ListNumberedOutlined = (props) => {
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
        <G clipPath="url(#clip0_1066_2582)">
          <Path
            d="M5.77999 3.368C6.00399 3.20933 6.20466 3.102 6.382 3.046C6.55933 2.98066 6.71799 2.948 6.85799 2.948C6.97933 2.948 7.12399 2.96666 7.292 3.004C7.46 3.04133 7.61866 3.12066 7.768 3.242C7.92666 3.354 8.05733 3.51733 8.16 3.732C8.26266 3.94666 8.314 4.236 8.314 4.6V11.824C8.314 12.104 8.26733 12.3327 8.174 12.51C8.08999 12.678 7.98733 12.8087 7.86599 12.902C7.74466 12.9953 7.614 13.056 7.474 13.084C7.34333 13.1213 7.23133 13.14 7.13799 13.14C7.04466 13.14 6.928 13.1213 6.78799 13.084C6.65733 13.056 6.53133 12.9953 6.41 12.902C6.28866 12.8087 6.18133 12.678 6.088 12.51C6.00399 12.3327 5.962 12.104 5.962 11.824V5.72L4.89799 6.546C4.76733 6.64866 4.63666 6.71867 4.50599 6.756C4.38466 6.79333 4.27266 6.812 4.16999 6.812C3.88999 6.812 3.65199 6.71866 3.45599 6.532C3.26933 6.336 3.17599 6.08867 3.17599 5.79C3.17599 5.63133 3.21799 5.47733 3.30199 5.328C3.38599 5.16933 3.53533 5.01067 3.74999 4.852L5.77999 3.368Z"
            fill={fill}
          />
          <Path
            d="M4.31 28C3.98333 28 3.71733 27.9627 3.512 27.888C3.316 27.804 3.16666 27.706 3.064 27.594C2.96133 27.4727 2.89133 27.3467 2.854 27.216C2.826 27.0853 2.812 26.9733 2.812 26.88C2.812 26.7867 2.82133 26.6887 2.84 26.586C2.85866 26.4833 2.896 26.376 2.952 26.264C3.008 26.152 3.08733 26.0307 3.19 25.9C3.29266 25.76 3.43266 25.6107 3.61 25.452L6.816 22.54C7.05866 22.316 7.25466 22.0827 7.404 21.84C7.55333 21.588 7.628 21.3127 7.628 21.014C7.628 20.6593 7.516 20.3747 7.292 20.16C7.068 19.936 6.76933 19.824 6.396 19.824C6.116 19.824 5.87333 19.894 5.668 20.034C5.472 20.1647 5.30866 20.342 5.178 20.566C5.066 20.7713 4.912 20.9533 4.716 21.112C4.52933 21.2613 4.31466 21.336 4.072 21.336C3.75466 21.336 3.498 21.2333 3.302 21.028C3.106 20.8227 3.008 20.5707 3.008 20.272C3.008 20.1507 3.02666 20.0293 3.064 19.908C3.11066 19.7773 3.15733 19.67 3.204 19.586C3.53066 19.0353 3.98333 18.606 4.562 18.298C5.14066 17.9807 5.794 17.822 6.522 17.822C6.97933 17.822 7.42266 17.8827 7.852 18.004C8.28133 18.1253 8.664 18.312 9 18.564C9.336 18.816 9.602 19.1333 9.798 19.516C10.0033 19.8987 10.106 20.3467 10.106 20.86C10.106 21.2147 10.0593 21.5367 9.966 21.826C9.87266 22.106 9.742 22.3673 9.574 22.61C9.41533 22.8527 9.22866 23.0813 9.014 23.296C8.80866 23.5013 8.594 23.7067 8.37 23.912L6.074 25.956H9.126C9.36866 25.956 9.56466 25.9933 9.714 26.068C9.86333 26.1427 9.97533 26.236 10.05 26.348C10.134 26.4507 10.19 26.5627 10.218 26.684C10.246 26.796 10.26 26.894 10.26 26.978C10.26 27.062 10.246 27.1647 10.218 27.286C10.19 27.398 10.134 27.51 10.05 27.622C9.97533 27.7247 9.86333 27.8133 9.714 27.888C9.56466 27.9627 9.36866 28 9.126 28H4.31Z"
            fill={fill}
          />
          <Path
            d="M12 6C12 5.44772 12.4477 5 13 5H27C27.5523 5 28 5.44772 28 6C28 6.55228 27.5523 7 27 7H13C12.4477 7 12 6.55228 12 6Z"
            fill={fill}
          />
          <Path
            d="M12 16C12 15.4477 12.4477 15 13 15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H13C12.4477 17 12 16.5523 12 16Z"
            fill={fill}
          />
          <Path
            d="M12 26C12 25.4477 12.4477 25 13 25H27C27.5523 25 28 25.4477 28 26C28 26.5523 27.5523 27 27 27H13C12.4477 27 12 26.5523 12 26Z"
            fill={fill}
          />
        </G>
        <Defs>
          <ClipPath id="clip0_1066_2582">
            <Rect width={32} height={32} fill="white" />
          </ClipPath>
        </Defs>
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
        d="M5.78 3.368C6.004 3.20933 6.20467 3.102 6.382 3.046C6.55934 2.98066 6.718 2.948 6.858 2.948C6.97934 2.948 7.124 2.96666 7.292 3.004C7.46 3.04133 7.61867 3.12066 7.768 3.242C7.92667 3.354 8.05734 3.51733 8.16 3.732C8.26267 3.94666 8.314 4.236 8.314 4.6V11.824C8.314 12.104 8.26734 12.3327 8.174 12.51C8.09 12.678 7.98734 12.8087 7.866 12.902C7.74467 12.9953 7.614 13.056 7.474 13.084C7.34334 13.1213 7.23134 13.14 7.138 13.14C7.04467 13.14 6.928 13.1213 6.788 13.084C6.65734 13.056 6.53134 12.9953 6.41 12.902C6.28867 12.8087 6.18134 12.678 6.088 12.51C6.004 12.3327 5.962 12.104 5.962 11.824V5.72L4.898 6.546C4.76734 6.64866 4.63667 6.71867 4.506 6.756C4.38467 6.79333 4.27267 6.812 4.17 6.812C3.89 6.812 3.652 6.71866 3.456 6.532C3.26934 6.336 3.176 6.08867 3.176 5.79C3.176 5.63133 3.218 5.47733 3.302 5.328C3.386 5.16933 3.53534 5.01067 3.75 4.852L5.78 3.368Z"
        fill={fill}
      />
      <Path
        d="M4.31 28C3.98333 28 3.71733 27.9627 3.512 27.888C3.316 27.804 3.16666 27.706 3.064 27.594C2.96133 27.4727 2.89133 27.3467 2.854 27.216C2.826 27.0854 2.812 26.9734 2.812 26.88C2.812 26.7867 2.82133 26.6887 2.84 26.586C2.85866 26.4834 2.896 26.376 2.952 26.264C3.008 26.152 3.08733 26.0307 3.19 25.9C3.29266 25.76 3.43266 25.6107 3.61 25.452L6.816 22.54C7.05866 22.316 7.25466 22.0827 7.404 21.84C7.55333 21.588 7.628 21.3127 7.628 21.014C7.628 20.6594 7.516 20.3747 7.292 20.16C7.068 19.936 6.76933 19.824 6.396 19.824C6.116 19.824 5.87333 19.894 5.668 20.034C5.472 20.1647 5.30866 20.342 5.178 20.566C5.066 20.7714 4.912 20.9534 4.716 21.112C4.52933 21.2614 4.31466 21.336 4.072 21.336C3.75466 21.336 3.498 21.2334 3.302 21.028C3.106 20.8227 3.008 20.5707 3.008 20.272C3.008 20.1507 3.02666 20.0294 3.064 19.908C3.11066 19.7774 3.15733 19.67 3.204 19.586C3.53066 19.0354 3.98333 18.606 4.562 18.298C5.14066 17.9807 5.794 17.822 6.522 17.822C6.97933 17.822 7.42266 17.8827 7.852 18.004C8.28133 18.1254 8.664 18.312 9 18.564C9.336 18.816 9.602 19.1334 9.798 19.516C10.0033 19.8987 10.106 20.3467 10.106 20.86C10.106 21.2147 10.0593 21.5367 9.966 21.826C9.87266 22.106 9.742 22.3674 9.574 22.61C9.41533 22.8527 9.22866 23.0814 9.014 23.296C8.80866 23.5014 8.594 23.7067 8.37 23.912L6.074 25.956H9.126C9.36866 25.956 9.56466 25.9934 9.714 26.068C9.86333 26.1427 9.97533 26.236 10.05 26.348C10.134 26.4507 10.19 26.5627 10.218 26.684C10.246 26.796 10.26 26.894 10.26 26.978C10.26 27.062 10.246 27.1647 10.218 27.286C10.19 27.398 10.134 27.51 10.05 27.622C9.97533 27.7247 9.86333 27.8134 9.714 27.888C9.56466 27.9627 9.36866 28 9.126 28H4.31Z"
        fill={fill}
      />
      <Path
        d="M14 4.5C13.1716 4.5 12.5 5.17157 12.5 6C12.5 6.82843 13.1716 7.5 14 7.5H27C27.8284 7.5 28.5 6.82843 28.5 6C28.5 5.17157 27.8284 4.5 27 4.5H14Z"
        fill={fill}
      />
      <Path
        d="M12.5 16C12.5 15.1716 13.1716 14.5 14 14.5H27C27.8284 14.5 28.5 15.1716 28.5 16C28.5 16.8284 27.8284 17.5 27 17.5H14C13.1716 17.5 12.5 16.8284 12.5 16Z"
        fill={fill}
      />
      <Path
        d="M14 24.5C13.1716 24.5 12.5 25.1716 12.5 26C12.5 26.8284 13.1716 27.5 14 27.5H27C27.8284 27.5 28.5 26.8284 28.5 26C28.5 25.1716 27.8284 24.5 27 24.5H14Z"
        fill={fill}
      />
    </Svg>
  );
};

ListNumberedOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};

ListNumberedOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ListNumberedOutlined.displayName = "ListNumberedOutlined";

export default ListNumberedOutlined;