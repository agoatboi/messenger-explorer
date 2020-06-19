import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs, date } from '@storybook/addon-knobs';

import Timestamp, { TimestampTheme } from '.';

const stories = storiesOf('components|Atoms/Timestamp', module);

stories.addDecorator(withKnobs);

const defaultTimestamp = () => {
  const themeList = select('ThemeList', TimestampTheme, TimestampTheme.DEFAULT);
  const timestamp = date('timestamp', new Date());
  const dateFormat = select('dateFormat', ['full', 'time'], 'full');

  return <Timestamp useTheme={themeList} timestamp={timestamp} dateFormat={dateFormat} />;
};

stories.add('default', defaultTimestamp);
