import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "js/Common/UIElements/colors";
const CommentCircleRightOutlined = (props) => {
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
          d="M16 6C21.5228 6 26 10.4772 26 16C26 17.4889 25.6753 18.8992 25.0937 20.1662C25.0119 20.3445 24.9843 20.543 25.0145 20.7369L25.8053 25.8244L20.5408 25.0929C20.3579 25.0674 20.1716 25.0931 20.0025 25.1671C18.7782 25.7025 17.4252 26 16 26C10.4772 26 6 21.5228 6 16C6 10.4772 10.4772 6 16 6ZM28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C17.6043 28 19.1373 27.6847 20.5385 27.1118L25.8631 27.8516C27.0248 28.0131 28.0133 27.0084 27.8332 25.8495L27.0358 20.72C27.6567 19.2701 28 17.6739 28 16Z"
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
        d="M16 6.5C21.2467 6.5 25.5 10.7533 25.5 16C25.5 17.4154 25.1914 18.7547 24.6393 19.9576C24.5165 20.2252 24.4752 20.5229 24.5204 20.8137L25.2079 25.2366L20.6096 24.5976C20.3353 24.5595 20.0559 24.5981 19.8021 24.709C18.6398 25.2173 17.3549 25.5 16 25.5C10.7533 25.5 6.5 21.2467 6.5 16C6.5 10.7533 10.7533 6.5 16 6.5ZM28.5 16C28.5 9.09644 22.9036 3.5 16 3.5C9.09644 3.5 3.5 9.09644 3.5 16C3.5 22.9036 9.09644 28.5 16 28.5C17.6224 28.5 19.1757 28.1902 20.6016 27.6253L25.7943 28.3469C27.2879 28.5544 28.5589 27.2628 28.3272 25.7727L27.5517 20.7833C28.1631 19.3082 28.5 17.6917 28.5 16Z"
        fill={fill}
      />
    </Svg>
  );
};
CommentCircleRightOutlined.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
  weight: PropTypes.oneOf(["REGULAR", "BOLD"]),
  fill: PropTypes.string,
};
CommentCircleRightOutlined.defaultProps = {
  size: 20,
  weight: "REGULAR",
  fill: colors.iconDefault,
};
export default CommentCircleRightOutlined;
