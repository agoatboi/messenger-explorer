import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css`
    padding: 10px;
  `;
};

const BackupDropperTheme: themeOptions = {
  DEFAULT: css``,
  HIGHLIGHTED: css`
    background-color: lightgreen;
  `,
};

type BackupDropperProps = {
  useTheme: string;
};

const getAllStyle = ({ useTheme }: BackupDropperProps) => {
  return css`
    ${baseStyle()}
    ${BackupDropperTheme[useTheme]}
  `;
};

export const StyledBackupDropper = styled.div<BackupDropperProps>`
  ${getAllStyle}
`;
