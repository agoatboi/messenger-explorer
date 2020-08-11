import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css`
    margin: auto;
    height: 90vh;
    width: 95vw;
    overflow: scroll;

    .message-group {
      margin-top: 5px;
      margin-bottom: 5px;
    }
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
