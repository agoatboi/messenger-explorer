// create - template
const createBaseComp = (componentName) => {
  const StyledComponent = `Styled${componentName}`; // ex StyledDiv

  return `
import React from 'react'
import {${StyledComponent}} from './styled'

type objectOptions = {
  [key: string]: string;
};

export const ${componentName}Theme: objectOptions = {
  DEFAULT: 'DEFAULT'
}

type ${componentName}Props = {
  useTheme: string;
  children: React.ReactNode;
}

function ${componentName} ({ useTheme, children, ...rest } : ${componentName}Props) {
  return (
    <${StyledComponent} useTheme={useTheme} {...rest}>{children}</${StyledComponent}>
  );
}

${componentName}.defaultProps = {
  children: '',
  useTheme: ${componentName}Theme.DEFAULT
}

export default ${componentName}

`;
};
const createStyledComp = (componentName) => {
  const StyledComponent = `Styled${componentName}`; // ex StyledButton
  const componentProps = `${componentName}Props`; // ex ButtonProps
  const componentTheme = `${componentName}Theme`; // ex ButtonProps

  return `
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css\`
  \`;
}

const ${componentTheme}: themeOptions = {
  DEFAULT: css\`
  \`
}

type ${componentProps} = {
  useTheme: string;
}

const getAllStyle = ({ useTheme }: ${componentProps}) => {
  return css\`
    \${baseStyle()}
    \${${componentTheme}[useTheme]}
  \`
}

export const ${StyledComponent} = styled.div<${componentProps}>\`
  \${getAllStyle}
\`

`;
};
const createMD = (atomicName, componentName) => {
  return `
  # ${componentName}
  
  ***
  
  ## Directory Structure
  
  #### *components - ${atomicName} - ${componentName}*
  
\`\`\`
.
├── index.tsx          - for exporting ${componentName} Component
├── stories.tsx  - for storybook
└── styled.tsx   - for theming & styling
├── ${componentName}.md          - for notice
\`\`\`

  ***
  
  ## Default Properties
    
  | key | value |
  | --- | --- |
  \${defaultProps}
  
  ***
  
  
  ## Theme
  
  #### *Atomic*
  
  \${themeTypes}
  
`;
};
const createStories = (atomicName, componentName) => {
  const componentTheme = `${componentName}Theme`; // ex ${ButtonTheme}

  return `
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';

import ${componentName}, { ${componentTheme} } from './';


const stories = storiesOf('components|${atomicName}/${componentName}', module);

stories.addDecorator(withKnobs);

const default${componentName} = () => {
  const themeList = select('ThemeList', ${componentTheme}, ${componentTheme}.DEFAULT);
  return (
    <${componentName}
      useTheme={themeList}
    >
    </${componentName}>
  )
}

stories.add('default', default${componentName});
`;
};
const createTest = (componentName) => '';
const createSCSS = () => {
  return `
*{margin:0, padding:0}
`;
};

module.exports = {
  createBaseComp,
  createStyledComp,
  createMD,
  createStories,
  createTest,
  createSCSS,
};
