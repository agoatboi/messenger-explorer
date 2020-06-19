import React from 'react';
import { StyledTitle } from './styled';

type objectOptions = {
  [key: string]: string;
};

export const TitleTheme: objectOptions = {
  DEFAULT: 'DEFAULT',
};

type TitleProps = {
  useTheme: string;
  title: string;
};

function Title({ useTheme, title }: TitleProps): JSX.Element {
  return (
    <StyledTitle useTheme={useTheme}>
      <h1>{title}</h1>
    </StyledTitle>
  );
}

Title.defaultProps = {
  children: '',
  useTheme: TitleTheme.DEFAULT,
};

export default Title;
