import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs, text } from '@storybook/addon-knobs';

import { TextMessage, PhotoMessage } from '@src/interfaces/MessageInterfaces';
import Message, { MessageTheme } from '.';

const stories = storiesOf('components|Molecules/Message', module);

stories.addDecorator(withKnobs);

const textMessage = () => {
  const themeList = select('ThemeList', MessageTheme, MessageTheme.DEFAULT);
  const content = text('content', 'Message Body');

  const message: TextMessage = {
    messageType: 'text',
    type: 'Generic',
    sender_name: 'John Smith',
    timestamp_ms: 1588772819090,
    content,
  };

  return <Message useTheme={themeList} message={message} />;
};

const photoMessage = () => {
  const themeList = select('ThemeList', MessageTheme, MessageTheme.DEFAULT);
  const uri = text('uri', 'https://www.w3schools.com/howto/img_avatar.png');

  const message: PhotoMessage = {
    messageType: 'photo',
    type: 'Generic',
    sender_name: 'John Smith',
    timestamp_ms: 1588772819090,
    photos: [
      {
        creation_timestamp: 1588772819090,
        uri,
      },
    ],
  };

  return <Message useTheme={themeList} message={message} />;
};

stories.add('text', textMessage);
stories.add('photo', photoMessage);
