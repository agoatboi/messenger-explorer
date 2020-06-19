import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs, text } from '@storybook/addon-knobs';

import ProfileName, { ProfileNameTheme } from '.';

const stories = storiesOf('components|Atoms/ProfileName', module);

stories.addDecorator(withKnobs);

const defaultProfileName = () => {
  const themeList = select('ThemeList', ProfileNameTheme, ProfileNameTheme.DEFAULT);
  const name = text('name', 'John Smith');
  return <ProfileName useTheme={themeList} name={name} />;
};

stories.add('default', defaultProfileName);
