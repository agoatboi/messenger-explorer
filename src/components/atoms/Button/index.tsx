import React from 'react';
import SVG from 'react-inlinesvg';
import { StyledButton } from './styled';

type objectOptions = {
  [key: string]: string;
};

export const ButtonTheme: objectOptions = {
  DEFAULT: 'DEFAULT',
};

type ButtonProps = {
  useTheme: string;
  text: string;
  icon: string;
};

function Button({ useTheme, text, icon }: ButtonProps) {
  return (
    <StyledButton useTheme={useTheme}>
      <SVG src={icon} alt={`${text} icon`} />
      {text && <span>{text}</span>}
    </StyledButton>
  );
}

Button.defaultProps = {
  children: '',
  useTheme: ButtonTheme.DEFAULT,
};

export default Button;
