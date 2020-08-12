import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css`
    float: left;
    min-width: 200px;
    max-width: 15vw;
    background: #dddddd;
  `;
};

const ThreadListTheme: themeOptions = {
  DEFAULT: css``,
};

type ThreadListProps = {
  useTheme: string;
};

const getAllStyle = ({ useTheme }: ThreadListProps) => {
  return css`
    ${baseStyle()}
    ${ThreadListTheme[useTheme]}
  `;
};

export const StyledThreadList = styled.div<ThreadListProps>`
  ${getAllStyle}
`;
