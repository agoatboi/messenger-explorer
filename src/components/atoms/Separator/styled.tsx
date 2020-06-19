import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css`
    flex-basis: 100%;
  `;
};

const SeparatorTheme: themeOptions = {
  DEFAULT: css``,
};

type SeparatorProps = {
  useTheme: string;
};

const getAllStyle = ({ useTheme }: SeparatorProps) => {
  return css`
    ${baseStyle()}
    ${SeparatorTheme[useTheme]}
  `;
};

export const StyledSeparator = styled.div<SeparatorProps>`
  ${getAllStyle}
`;
