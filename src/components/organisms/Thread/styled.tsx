import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css`
    margin: 20px;
  `;
};

const ThreadTheme: themeOptions = {
  DEFAULT: css``,
};

type ThreadProps = {
  useTheme: string;
};

const getAllStyle = ({ useTheme }: ThreadProps) => {
  return css`
    ${baseStyle()}
    ${ThreadTheme[useTheme]}
  `;
};

export const StyledThread = styled.div<ThreadProps>`
  ${getAllStyle}
`;
