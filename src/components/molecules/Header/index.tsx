import React from 'react';
import { StyledHeader } from './styled';

type objectOptions = {
  [key: string]: string;
};

export const HeaderTheme: objectOptions = {
  DEFAULT: 'DEFAULT',
};

type HeaderProps = {
  useTheme: string;
  children: React.ReactNode;
  title: string;
  buttons: Array<React.ReactNode>;
};

function Header({ useTheme, children, title, buttons }: HeaderProps): JSX.Element {
  return (
    <StyledHeader useTheme={useTheme}>
      {buttons}
      <span>Messenger Explorer</span>
      {title && <span> - {title}</span>}
      {children}
    </StyledHeader>
  );
}

Header.defaultProps = {
  children: '',
  useTheme: HeaderTheme.DEFAULT,
  title: '',
  buttons: [],
};

export default Header;
