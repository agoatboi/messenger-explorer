import React from 'react';
import { StyledSeparator } from './styled';

type objectOptions = {
  [key: string]: string;
};

export const SeparatorTheme: objectOptions = {
  DEFAULT: 'DEFAULT',
};

type SeparatorProps = {
  useTheme: string;
  children: React.ReactNode;
};

function Separator({ useTheme }: SeparatorProps) {
  return <StyledSeparator useTheme={useTheme} />;
}

Separator.defaultProps = {
  children: '',
  useTheme: SeparatorTheme.DEFAULT,
};

export default Separator;
