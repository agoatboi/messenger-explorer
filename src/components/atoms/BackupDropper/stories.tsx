import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs, text } from '@storybook/addon-knobs';

import BackupDropper, { BackupDropperTheme } from '.';

const stories = storiesOf('components|Atoms/BackupDropper', module);

stories.addDecorator(withKnobs);

const defaultBackupDropper = () => {
  const themeList = select('ThemeList', BackupDropperTheme, BackupDropperTheme.DEFAULT);
  const message = text('Message', 'Place your JSON file here.');
  return <BackupDropper useTheme={themeList} message="test" />;
};

stories.add('default', defaultBackupDropper);
