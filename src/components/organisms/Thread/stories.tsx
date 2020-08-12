import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs, text } from '@storybook/addon-knobs';

import { TextMessage } from '@src/interfaces/MessageInterfaces';
import { time } from 'console';
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
  const serializedMessages = text('serialized messages', 'participant A, participant B');
  const messages: Array<TextMessage> = serializedMessages.split('\n').map((messageText, i) => ({
    content: messageText,
    timestamp_ms: new Date().getTime() + 1500 * i,
    sender_name: participants[i].name,
    messageType: 'text',
    type: 'Generic',
  }));
  const threadPath = text('threadPath', 'myThread');
  const threadType = select('threadType', ['RegularGroup'], 'RegularGroup');

  return (
    <Thread
      useTheme={themeList}
      thread={{ threadPath, threadType, participants, title, messages }}
    />
  );
};

stories.add('default', defaultThread);
