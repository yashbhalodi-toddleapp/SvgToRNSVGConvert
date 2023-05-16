const propTypesTemplate = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl }
) => {
  return tpl`
  ${imports}
  import React from "react";
  import PropTypes from 'prop-types';
  import { colors } from "js/Common/UIElements/colors";

  ${interfaces}
  
  const ${componentName} = (props) => {
    const { size, weight } = props

    return ${jsx};
  }
  
  ${componentName}.propTypes = {
    size: PropTypes.oneOf([16, 20, 24, 32]),
    weight: PropTypes.oneOf(["REGULAR","BOLD"]),
    fill: PropTypes.string,
  };

  ${componentName}.defaultProps = {
    size: 20,
    weight: "REGULAR",
    fill: colors.iconDefault
  }
  
  ${exports}
    `;
};

export default propTypesTemplate;
