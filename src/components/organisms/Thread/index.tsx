import React from 'react';
import MessageGroup from '@src/components/molecules/MessageGroup';
import Title from '@src/components/atoms/Title';
import { uid } from 'react-uid';
import { IThread } from '@src/interfaces/ThreadInterfaces';
import { StyledThread } from './styled';

type objectOptions = {
  [key: string]: string;
};

export const ThreadTheme: objectOptions = {
  DEFAULT: 'DEFAULT',
};

interface ThreadProps {
  useTheme: string;
  children: React.ReactNode;
  thread: IThread;
}

function Thread({ useTheme, children, thread, ...rest }: ThreadProps): JSX.Element {
  return (
    <StyledThread useTheme={useTheme}>
      {thread.participants && (
        <>
          <h3>List of Participants:</h3>
          <ul>
            {thread.participants.map((participant) => (
              <li key={uid(participant)}>{participant.name}</li>
            ))}
          </ul>
        </>
      )}
      {children}
    </StyledThread>
  );
}

Thread.defaultProps = {
  children: '',
  useTheme: ThreadTheme.DEFAULT,
  title: '',
};

export default Thread;
