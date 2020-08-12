import React from 'react';
import ProfileName from '@src/components/atoms/ProfileName';
import ProfilePicture from '@src/components/atoms/ProfilePicture';
import { IThread } from '@src/interfaces/ThreadInterfaces';
import { StyledThreadEntry } from './styled';

type objectOptions = {
  [key: string]: string;
};

export const ThreadEntryTheme: objectOptions = {
  DEFAULT: 'DEFAULT',
};

type ThreadEntryProps = {
  useTheme: string;
  children: React.ReactNode;
  thread: IThread;
};

function ThreadEntry({ useTheme, children, thread, ...rest }: ThreadEntryProps): JSX.Element {
  return (
    <StyledThreadEntry useTheme={useTheme} {...rest}>
      {/* <ProfilePicture url={`${thread.thread_path}/photo.png`} /> */}
      <ProfileName name={thread.title} />
      {children}
    </StyledThreadEntry>
  );
}

ThreadEntry.defaultProps = {
  children: '',
  useTheme: ThreadEntryTheme.DEFAULT,
};

export default ThreadEntry;
