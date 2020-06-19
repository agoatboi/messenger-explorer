import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs, text } from '@storybook/addon-knobs';

import ProfilePicture, { ProfilePictureTheme } from '.';

const stories = storiesOf('components|Atoms/ProfilePicture', module);

stories.addDecorator(withKnobs);

const defaultProfilePicture = () => {
  const themeList = select('ThemeList', ProfilePictureTheme, ProfilePictureTheme.DEFAULT);
  const uri = text(
    'uri',
    'https://www.cheshireutilityservicesuk.com/wp-content/uploads/2016/02/facebook-blank-face-blank.jpeg'
  );

  return <ProfilePicture useTheme={themeList} url={uri} />;
};

const w3schoolsProfilePicture = () => {
  const themeList = select('ThemeList', ProfilePictureTheme, ProfilePictureTheme.DEFAULT);
  const uri = text('uri', 'https://www.w3schools.com/howto/img_avatar.png');

  return <ProfilePicture useTheme={themeList} url={uri} />;
};

stories.add('default', defaultProfilePicture);
stories.add('w3schools', w3schoolsProfilePicture);
