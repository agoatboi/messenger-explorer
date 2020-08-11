import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css`
    background: dimgray;
    font-size: 20pt;
    color: white;
    padding: 10px;
    text-align: center;
    margin-top: -8px;
  `;
};

const HeaderTheme: themeOptions = {
  DEFAULT: css``,
};

type HeaderProps = {
  useTheme: string;
};

const getAllStyle = ({ useTheme }: HeaderProps) => {
  return css`
    ${baseStyle()}
    ${HeaderTheme[useTheme]}
  `;
};

export const StyledHeader = styled.div<HeaderProps>`
  ${getAllStyle}
`;
