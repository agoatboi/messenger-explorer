import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs';

import Header, { HeaderTheme } from '.';

const stories = storiesOf('components|Molecules/Header', module);

stories.addDecorator(withKnobs);

const defaultHeader = () => {
  const themeList = select('ThemeList', HeaderTheme, HeaderTheme.DEFAULT);
  const title = text('title', 'Thread Title');

  return <Header useTheme={themeList} title={title} />;
};

stories.add('default', defaultHeader);
