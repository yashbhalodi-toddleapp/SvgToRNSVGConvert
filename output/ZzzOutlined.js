import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import { colors } from "js/Common/UIElements/colors";

const ZzzOutlined = (props) => {
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
        d="M6.5334 14.0039C6.7574 14.1106 7.05073 14.1639 7.4134 14.1639H13.6374C13.9254 14.1639 14.1547 14.1213 14.3254 14.0359C14.5067 13.9399 14.6454 13.8333 14.7414 13.7159C14.8374 13.5879 14.9014 13.4546 14.9334 13.3159C14.9654 13.1773 14.9814 13.0599 14.9814 12.9639C14.9814 12.8679 14.9654 12.7559 14.9334 12.6279C14.9014 12.4893 14.8374 12.3613 14.7414 12.2439C14.6454 12.1159 14.5067 12.0093 14.3254 11.9239C14.1547 11.8386 13.9254 11.7959 13.6374 11.7959H9.1894L14.2134 5.66794C14.4587 5.3586 14.6294 5.09727 14.7254 4.88394C14.8214 4.65994 14.8694 4.43594 14.8694 4.21194C14.8694 4.10527 14.8481 3.97194 14.8054 3.81194C14.7734 3.65194 14.6987 3.5026 14.5814 3.36394C14.4747 3.2146 14.3201 3.09194 14.1174 2.99594C13.9254 2.88927 13.6641 2.83594 13.3334 2.83594H7.1094C6.83207 2.83594 6.60807 2.8786 6.4374 2.96394C6.26673 3.04927 6.1334 3.15594 6.0374 3.28394C5.95207 3.40127 5.8934 3.52394 5.8614 3.65194C5.8294 3.77994 5.8134 3.89194 5.8134 3.98794C5.8134 4.08394 5.8294 4.20127 5.8614 4.33994C5.8934 4.46794 5.95207 4.59594 6.0374 4.72394C6.1334 4.84127 6.26673 4.9426 6.4374 5.02794C6.60807 5.11327 6.83207 5.15594 7.1094 5.15594H11.3014L6.4534 11.1079C6.18673 11.4386 6.00007 11.7266 5.8934 11.9719C5.78673 12.2066 5.7334 12.4466 5.7334 12.6919C5.7334 12.8093 5.7494 12.9533 5.7814 13.1239C5.82407 13.2946 5.90407 13.4599 6.0214 13.6199C6.1494 13.7693 6.32007 13.8973 6.5334 14.0039Z"
        fill={fill}
      />
      <Path
        d="M19.6454 20.1639C19.3281 20.1639 19.0714 20.1173 18.8754 20.0239C18.6887 19.9306 18.5394 19.8186 18.4274 19.6879C18.3247 19.5479 18.2547 19.4033 18.2174 19.2539C18.1894 19.1046 18.1754 18.9786 18.1754 18.8759C18.1754 18.6613 18.2221 18.4513 18.3154 18.2459C18.4087 18.0313 18.5721 17.7793 18.8054 17.4899L23.0474 12.2819H19.3794C19.1367 12.2819 18.9407 12.2446 18.7914 12.1699C18.6421 12.0953 18.5254 12.0066 18.4414 11.9039C18.3667 11.7919 18.3154 11.6799 18.2874 11.5679C18.2594 11.4466 18.2454 11.3439 18.2454 11.2599C18.2454 11.1759 18.2594 11.0779 18.2874 10.9659C18.3154 10.8539 18.3667 10.7466 18.4414 10.6439C18.5254 10.5319 18.6421 10.4386 18.7914 10.3639C18.9407 10.2893 19.1367 10.2519 19.3794 10.2519H24.8254C25.1147 10.2519 25.3434 10.2986 25.5114 10.3919C25.6887 10.4759 25.8241 10.5833 25.9174 10.7139C26.0201 10.8353 26.0854 10.9659 26.1134 11.1059C26.1507 11.2459 26.1694 11.3626 26.1694 11.4559C26.1694 11.6519 26.1274 11.8479 26.0434 12.0439C25.9594 12.2306 25.8101 12.4593 25.5954 12.7299L21.1994 18.0919H25.0914C25.3434 18.0919 25.5441 18.1293 25.6934 18.2039C25.8521 18.2786 25.9734 18.3719 26.0574 18.4839C26.1414 18.5866 26.1974 18.6986 26.2254 18.8199C26.2534 18.9319 26.2674 19.0299 26.2674 19.1139C26.2674 19.1979 26.2534 19.3006 26.2254 19.4219C26.1974 19.5433 26.1414 19.6599 26.0574 19.7719C25.9734 19.8746 25.8521 19.9679 25.6934 20.0519C25.5441 20.1266 25.3434 20.1639 25.0914 20.1639H19.6454Z"
        fill={fill}
      />
      <Path
        d="M10.3774 29.1639C10.1054 29.1639 9.88543 29.1239 9.71743 29.0439C9.55743 28.9639 9.42943 28.8679 9.33343 28.7559C9.24543 28.6359 9.18543 28.5119 9.15343 28.3839C9.12943 28.2559 9.11743 28.1479 9.11743 28.0599C9.11743 27.8759 9.15743 27.6959 9.23743 27.5199C9.31743 27.3359 9.45743 27.1199 9.65743 26.8719L13.2934 22.4079H10.1494C9.94143 22.4079 9.77343 22.3759 9.64543 22.3119C9.51743 22.2479 9.41743 22.1719 9.34543 22.0839C9.28143 21.9879 9.23743 21.8919 9.21343 21.7959C9.18943 21.6919 9.17743 21.6039 9.17743 21.5319C9.17743 21.4599 9.18943 21.3759 9.21343 21.2799C9.23743 21.1839 9.28143 21.0919 9.34543 21.0039C9.41743 20.9079 9.51743 20.8279 9.64543 20.7639C9.77343 20.6999 9.94143 20.6679 10.1494 20.6679H14.8174C15.0654 20.6679 15.2614 20.7079 15.4054 20.7879C15.5574 20.8599 15.6734 20.9519 15.7534 21.0639C15.8414 21.1679 15.8974 21.2799 15.9214 21.3999C15.9534 21.5199 15.9694 21.6199 15.9694 21.6999C15.9694 21.8679 15.9334 22.0359 15.8614 22.2039C15.7894 22.3639 15.6614 22.5599 15.4774 22.7919L11.7094 27.3879H15.0454C15.2614 27.3879 15.4334 27.4199 15.5614 27.4839C15.6974 27.5479 15.8014 27.6279 15.8734 27.7239C15.9454 27.8119 15.9934 27.9079 16.0174 28.0119C16.0414 28.1079 16.0534 28.1919 16.0534 28.2639C16.0534 28.3359 16.0414 28.4239 16.0174 28.5279C15.9934 28.6319 15.9454 28.7319 15.8734 28.8279C15.8014 28.9159 15.6974 28.9959 15.5614 29.0679C15.4334 29.1319 15.2614 29.1639 15.0454 29.1639H10.3774Z"
        fill={fill}
      />
    </Svg>
  );
};

ZzzOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["BOLD"]),
  fill: PropTypes.string,
};

ZzzOutlined.defaultProps = {
  size: 20,
  weight: "BOLD",
  fill: colors.iconDefault,
};

ZzzOutlined.displayName = "ZzzOutlined";

export default ZzzOutlined;