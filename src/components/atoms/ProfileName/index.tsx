import React from 'react';
import { StyledProfileName } from './styled';

type objectOptions = {
  [key: string]: string;
};

export const ProfileNameTheme: objectOptions = {
  DEFAULT: 'DEFAULT',
};

type ProfileNameProps = {
  useTheme: string;
  name: string;
};

function ProfileName({ useTheme, name }: ProfileNameProps) {
  return <StyledProfileName useTheme={useTheme}>{name}</StyledProfileName>;
}

ProfileName.defaultProps = {
  children: '',
  useTheme: ProfileNameTheme.DEFAULT,
};

export default ProfileName;
