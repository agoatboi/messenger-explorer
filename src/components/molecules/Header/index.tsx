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
};

function Header({ useTheme, children, title }: HeaderProps): JSX.Element {
  return (
    <StyledHeader useTheme={useTheme}>
      Messenger Explorer
      {title && <span> - {title}</span>}
      {children}
    </StyledHeader>
  );
}

Header.defaultProps = {
  children: '',
  useTheme: HeaderTheme.DEFAULT,
  thread_name: '',
};

export default Header;
