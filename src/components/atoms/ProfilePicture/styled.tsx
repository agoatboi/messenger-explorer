import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css`
    img {
      width: 5em;
      height: 5em;
    }
  `;
};

const ProfilePictureTheme: themeOptions = {
  DEFAULT: css``,
  ROUNDED: css`
    img {
      border-radius: 50%;
    }
  `,
};

type ProfilePictureProps = {
  useTheme: string;
};

const getAllStyle = ({ useTheme }: ProfilePictureProps) => {
  return css`
    ${baseStyle()}
    ${ProfilePictureTheme[useTheme]}
  `;
};

export const StyledProfilePicture = styled.div<ProfilePictureProps>`
  ${getAllStyle}
`;
