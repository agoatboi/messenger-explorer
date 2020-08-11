import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css`
    div.message {
      padding: 6px 8px;
      margin: 1px;
    }
  `;
};

const MessageGroupTheme: themeOptions = {
  THEIRS: css`
    div {
      clear: both;
      float: left;

      div.message {
        background: #f3f3f3;
        color: black;
        border-radius: 0em 0.75em 0.75em 0em;
      }
      div.message:first-of-type {
        border-radius: 0.75em 0.75em 0.75em 0em;
      }
      div.message:last-of-type {
        border-radius: 0em 0.75em 0.75em 0.75em;
      }
    }
  `,
  OURS: css`
    div {
      clear: both;
      float: right;

      div.message {
        background: blue;
        color: white;
        border-radius: 0.75em 0em 0em 0.75em;
      }
      div.message:first-of-type {
        border-radius: 0.75em 0.75em 0em 0.75em;
      }
      div.message:last-of-type {
        border-radius: 0.75em 0em 0.75em 0.75em;
      }
    }
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
