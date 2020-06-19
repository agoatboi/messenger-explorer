import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';

import Separator, { SeparatorTheme } from '.';

const stories = storiesOf('components|Atoms/Separator', module);

stories.addDecorator(withKnobs);

const defaultSeparator = () => {
  const themeList = select('ThemeList', SeparatorTheme, SeparatorTheme.DEFAULT);
  return <Separator useTheme={themeList} />;
};

stories.add('default', defaultSeparator);
