import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css`
    padding: 5px;
    text-align: center;
    background: #cccccc;
  `;
};

const ThreadEntryTheme: themeOptions = {
  DEFAULT: css``,
};

type ThreadEntryProps = {
  useTheme: string;
};

const getAllStyle = ({ useTheme }: ThreadEntryProps) => {
  return css`
    ${baseStyle()}
    ${ThreadEntryTheme[useTheme]}
  `;
};

export const StyledThreadEntry = styled.div<ThreadEntryProps>`
  ${getAllStyle}
`;
