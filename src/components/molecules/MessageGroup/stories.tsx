import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { uid } from 'react-uid';

import { TextMessage } from 'src/interfaces/MessageInterfaces';
import MessageGroup, { MessageGroupTheme } from '.';
import Message from '../Message';

const stories = storiesOf('components|Molecules/MessageGroup', module);

stories.addDecorator(withKnobs);

const defaultMessage: TextMessage = {
  messageType: 'text',
  type: 'Generic',
  sender_name: 'John Smith',
  timestamp_ms: 1588772819090,
  content: 'test',
};

const messageArray = [defaultMessage, defaultMessage, defaultMessage];

const defaultMessageGroup = () => {
  const themeList = select('ThemeList', MessageGroupTheme, MessageGroupTheme.LEFT);
  return (
    <MessageGroup useTheme={themeList} sender_name="John Smith" timestamp={1588771819090}>
      {messageArray.map((message) => (
        <Message key={uid(message)} message={message} />
      ))}
    </MessageGroup>
  );
};

stories.add('default', defaultMessageGroup);
