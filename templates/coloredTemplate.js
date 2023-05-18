const propTypesTemplate = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl }
) => {
  return tpl`
  import React from "react";
  import PropTypes from 'prop-types';
  ${imports}

  ${interfaces}
  
  const ${componentName} = (props) => {
    const { size } = props

    return ${jsx};
  }
  
  ${componentName}.propTypes = {
    size: PropTypes.oneOf([16, 20, 24, 32]),
  };

  ${componentName}.defaultProps = {
    size: 20,
  }

  ${componentName}.displayName = "${componentName}"
  
  ${exports}
    `;
};

export default propTypesTemplate;
