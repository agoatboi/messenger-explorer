import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs, text } from '@storybook/addon-knobs';

import Thread, { ThreadTheme } from '.';

const stories = storiesOf('components|Organisms/Thread', module);

stories.addDecorator(withKnobs);

const defaultThread = () => {
  const themeList = select('ThemeList', ThreadTheme, ThreadTheme.DEFAULT);
  const title = text('title', 'Thread Title');
  const serializedParticipants = text('serialized participants', 'participant A, participant B');
  const participants = serializedParticipants.split(', ').map((participant) => ({
    name: participant,
  }));
  const thread_path = text('thread_path', 'myThread');
  const thread_type = select('thread_type', ['RegularGroup'], 'RegularGroup');

  return (
    <Thread
      useTheme={themeList}
      participants={participants}
      title={title}
      thread_path={thread_path}
      thread_type={thread_type}
    />
  );
};

stories.add('default', defaultThread);
