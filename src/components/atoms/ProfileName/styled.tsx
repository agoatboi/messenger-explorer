import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css`
    font-family: helvetica;
    font-weight: 600;
    color: darkslategray;
    justify-content: inherit;
  `;
};

const ProfileNameTheme: themeOptions = {
  DEFAULT: css``,
};

type ProfileNameProps = {
  useTheme: string;
};

const getAllStyle = ({ useTheme }: ProfileNameProps) => {
  return css`
    ${baseStyle()}
    ${ProfileNameTheme[useTheme]}
  `;
};

export const StyledProfileName = styled.div<ProfileNameProps>`
  ${getAllStyle}
`;
