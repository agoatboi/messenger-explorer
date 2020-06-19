import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css`
    font-family: Helvetica;
    max-width: 70vw;
    justify-content: inherit;
  `;
};

const MessageTheme: themeOptions = {
  DEFAULT: css``,
};

type MessageProps = {
  useTheme: string;
};

const getAllStyle = ({ useTheme }: MessageProps) => {
  return css`
    ${baseStyle()}
    ${MessageTheme[useTheme]}
  `;
};

export const StyledMessage = styled.div<MessageProps>`
  ${getAllStyle}
`;
