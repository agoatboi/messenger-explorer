import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css`
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
  `;
};

const MessageGroupTheme: themeOptions = {
  DEFAULT: css`
    justify-content: flex-start;
  `,
  RIGHT: css`
    justify-content: flex-end;
  `,
};

type MessageGroupProps = {
  useTheme: string;
};

const getAllStyle = ({ useTheme }: MessageGroupProps) => {
  return css`
    ${baseStyle()};
    ${MessageGroupTheme[useTheme]};
  `;
};

export const StyledMessageGroup = styled.div<MessageGroupProps>`
  ${getAllStyle}
`;
