import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css`
    color: darkgray;
  `;
};

const TimestampTheme: themeOptions = {
  DEFAULT: css``,
};

type TimestampProps = {
  useTheme: string;
};

const getAllStyle = ({ useTheme }: TimestampProps) => {
  return css`
    ${baseStyle()}
    ${TimestampTheme[useTheme]}
  `;
};

export const StyledTimestamp = styled.div<TimestampProps>`
  ${getAllStyle}
`;
