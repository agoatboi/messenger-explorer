import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs, text } from '@storybook/addon-knobs';

import Title, { TitleTheme } from '.';

const stories = storiesOf('components|Atoms/Title', module);

stories.addDecorator(withKnobs);

const defaultTitle = () => {
  const themeList = select('ThemeList', TitleTheme, TitleTheme.DEFAULT);
  const title = text('title', 'My Title');

  return <Title useTheme={themeList} title={title} />;
};

stories.add('default', defaultTitle);
