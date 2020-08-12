import React, { SetStateAction, Dispatch } from 'react';
import { uid } from 'react-uid';
import { IThread } from '@src/interfaces/ThreadInterfaces';
import ThreadEntry from '@src/components/molecules/ThreadEntry';
import { StyledThreadList } from './styled';

type objectOptions = {
  [key: string]: string;
};

export const ThreadListTheme: objectOptions = {
  DEFAULT: 'DEFAULT',
};

type ThreadListProps = {
  useTheme: string;
  children: React.ReactNode;
  threads: Array<IThread>;
  selectThread: (thread: IThread) => void | Dispatch<SetStateAction<IThread>>;
};

function ThreadList({ useTheme, children, threads, selectThread }: ThreadListProps): JSX.Element {
  return (
    <StyledThreadList useTheme={useTheme}>
      {threads &&
        threads.map((thread) => {
          return (
            <ThreadEntry
              key={uid(thread)}
              thread={thread}
              onClick={(e: Event) => selectThread(thread)}
            />
          );
        })}
      {children}
    </StyledThreadList>
  );
}

ThreadList.defaultProps = {
  children: '',
  useTheme: ThreadListTheme.DEFAULT,
};

export default ThreadList;
