import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs';

import ThreadEntry, { ThreadEntryTheme } from '.';

const stories = storiesOf('components|Molecules/ThreadEntry', module);

stories.addDecorator(withKnobs);

const defaultThreadEntry = () => {
  const themeList = select('ThemeList', ThreadEntryTheme, ThreadEntryTheme.DEFAULT);
  const threadPath = text('ThreadPath', 'path');
  const threadType = text('ThreadType', 'type');
  const threadTitle = text('threadTitle', 'Conversation');

  const thread = {
    empty: true,
    threadPath,
    threadType,
    participants: [],
    title: threadTitle,
    messages: [],
  };

  return <ThreadEntry useTheme={themeList} thread={thread} />;
};

stories.add('default', defaultThreadEntry);
