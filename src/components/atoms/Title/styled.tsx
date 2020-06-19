import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css``;
};

const TitleTheme: themeOptions = {
  DEFAULT: css``,
};

type TitleProps = {
  useTheme: string;
};

const getAllStyle = ({ useTheme }: TitleProps) => {
  return css`
    ${baseStyle()}
    ${TitleTheme[useTheme]}
  `;
};

export const StyledTitle = styled.div<TitleProps>`
  ${getAllStyle}
`;
