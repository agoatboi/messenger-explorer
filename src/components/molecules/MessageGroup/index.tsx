import React from 'react';
import ProfileName from '@src/components/atoms/ProfileName';
import Timestamp from '@src/components/atoms/Timestamp';
import Separator from '@src/components/atoms/Separator';
import { StyledMessageGroup } from './styled';

type objectOptions = {
  [key: string]: string;
};

export const MessageGroupTheme: objectOptions = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
};

type MessageGroupProps = {
  useTheme: string;
  children: React.ReactNode;
  sender_name: string;
  timestamp: number;
};

function MessageGroup({ useTheme, children, sender_name, timestamp }: MessageGroupProps) {
  return (
    <StyledMessageGroup className="message-group" useTheme={useTheme}>
      <ProfileName name={sender_name} />
      <div>{children}</div>
      <Timestamp timestamp={timestamp} dateFormat="full" />
    </StyledMessageGroup>
  );
}

MessageGroup.defaultProps = {
  children: '',
  useTheme: MessageGroupTheme.LEFT,
};

export default MessageGroup;
