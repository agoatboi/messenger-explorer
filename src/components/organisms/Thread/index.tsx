import React from 'react';
import MessageGroup from '@src/components/molecules/MessageGroup';
import Title from '@src/components/atoms/Title';
import { uid } from 'react-uid';
import { StyledThread } from './styled';

type objectOptions = {
  [key: string]: string;
};

export const ThreadTheme: objectOptions = {
  DEFAULT: 'DEFAULT',
};

interface Thread {
  /** Array of participants, objects with name */
  participants: Array<{ name: string }>;
  /** Conversation name */
  title: string;
  /** Type of thread */
  thread_type: string;
  /** Local path to thread files */
  thread_path: string;
}

interface ThreadProps extends Thread {
  useTheme: string;
  children: React.ReactNode;
}

function Thread({ useTheme, children, participants, title }: ThreadProps) {
  return (
    <StyledThread useTheme={useTheme}>
      <Title title={title} />
      <h3>List of Participants:</h3>
      <ul>
        {participants.map((participant) => (
          <li key={uid(participant)}>{participant.name}</li>
        ))}
      </ul>
      {children}
    </StyledThread>
  );
}

Thread.defaultProps = {
  children: '',
  useTheme: ThreadTheme.DEFAULT,
};

export default Thread;
