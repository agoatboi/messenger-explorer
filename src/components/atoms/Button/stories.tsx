import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs';

import Button, { ButtonTheme } from '.';

const stories = storiesOf('components|Atoms/Button', module);

stories.addDecorator(withKnobs);

const defaultButton = () => {
  const themeList = select('ThemeList', ButtonTheme, ButtonTheme.DEFAULT);
  const buttonName = text('buttonName', 'Settings');
  const buttonSvgPath = text(
    'buttonSvgPath',
    'https://image.flaticon.com/icons/svg/503/503849.svg'
  );

  return <Button useTheme={themeList} text={buttonName} icon={buttonSvgPath} />;
};

stories.add('default', defaultButton);
