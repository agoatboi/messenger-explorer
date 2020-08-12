import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { IThread } from '@src/interfaces/ThreadInterfaces';
import ThreadList, { ThreadListTheme } from '.';

const stories = storiesOf('components|Molecules/ThreadList', module);

stories.addDecorator(withKnobs);

const defaultThreadList = () => {
  const themeList = select('ThemeList', ThreadListTheme, ThreadListTheme.DEFAULT);
  let thread: { title: string } | IThread = { title: '' };
  return (
    <ThreadList
      useTheme={themeList}
      threads={[]}
      selectThread={(t: IThread) => {
        thread = t;
      }}
    >
      {`Selected Thread Title: ${thread.title}`}
    </ThreadList>
  );
};

stories.add('default', defaultThreadList);
