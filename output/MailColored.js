import React from "react";
import PropTypes from "prop-types";
import Svg, { Path, Mask, G } from "react-native-svg";

const MailColored = (props) => {
  const { size } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M3.25 13C3.25 9.41015 6.16015 6.5 9.75 6.5H42.25C45.8399 6.5 48.75 9.41015 48.75 13V39C48.75 42.5899 45.8399 45.5 42.25 45.5H9.75001C6.16016 45.5 3.25 42.5899 3.25 39V13Z"
        fill="#FFAB00"
      />
      <Mask
        id="mask0_1294_3785"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={3}
        y={6}
        width={46}
        height={40}
      >
        <Path
          d="M3.25 13C3.25 9.41015 6.16015 6.5 9.75 6.5H42.25C45.8399 6.5 48.75 9.41015 48.75 13V39C48.75 42.5899 45.8399 45.5 42.25 45.5H9.75001C6.16016 45.5 3.25 42.5899 3.25 39V13Z"
          fill="#FFAB00"
        />
      </Mask>
      <G mask="url(#mask0_1294_3785)">
        <Path
          d="M22.5353 26.2147L3.25 45.5H48.75L29.4648 26.2147C27.5512 24.3012 24.4488 24.3012 22.5353 26.2147Z"
          fill="#FFBB33"
        />
        <Path
          d="M22.5352 25.7852L3.25 6.5H48.7489L29.4648 25.7851C27.5512 27.6987 24.4487 27.6987 22.5352 25.7852Z"
          fill="#FFDF99"
        />
      </G>
    </Svg>
  );
};

MailColored.propTypes = {
  size: PropTypes.oneOf([16, 20, 24, 32]),
};

MailColored.defaultProps = {
  size: 20,
};

MailColored.displayName = "MailColored";

export default MailColored;
