import React, { useState, useEffect } from 'react';
import { StyledProfilePicture } from './styled';

type objectOptions = {
  [key: string]: string;
};

export const ProfilePictureTheme: objectOptions = {
  DEFAULT: 'DEFAULT',
  ROUNDED: 'ROUNDED',
};

type ProfilePictureProps = {
  useTheme: string;
  children: React.ReactNode;
  url: string;
};

function ProfilePicture({ useTheme, children, url }: ProfilePictureProps) {
  // const [url, setUrl] = useState(
  //   'https://www.cheshireutilityservicesuk.com/wp-content/uploads/2016/02/facebook-blank-face-blank.jpeg'
  // );

  // useEffect(() => {
  //   setUrl(rest.url);
  // }, [rest.url]);

  return (
    <StyledProfilePicture useTheme={useTheme}>
      {children}
      <img src={url} alt="profile-pic" />
    </StyledProfilePicture>
  );
}

ProfilePicture.defaultProps = {
  children: '',
  useTheme: ProfilePictureTheme.ROUNDED,
  url:
    'https://www.cheshireutilityservicesuk.com/wp-content/uploads/2016/02/facebook-blank-face-blank.jpeg',
};

export default ProfilePicture;
