import React from 'react';
import { IMessage } from 'src/interfaces/MessageInterfaces';
import { uid } from 'react-uid';
import { StyledMessage } from './styled';

type objectOptions = {
  [key: string]: string;
};

export const MessageTheme: objectOptions = {
  DEFAULT: 'DEFAULT',
};

type MessageProps = {
  useTheme: string;
  // children: React.ReactNode;
  /** Message object */
  message: IMessage;
};

function Message({ useTheme, message }: MessageProps) {
  switch (message.messageType) {
    case 'text':
      return <StyledMessage useTheme={useTheme}>{message.content}</StyledMessage>;
    case 'photo':
      return (
        <StyledMessage useTheme={useTheme}>
          {message.photos.map((photo, index) => (
            <img key={uid(photo)} src={photo.uri} alt="" />
          ))}
        </StyledMessage>
      );
    default:
      return <div />;
  }

  // return <StyledMessage useTheme={useTheme}>
  //   {
  //     if ("content" in data) {
  //       data.content
  //     }
  //   }
  // </StyledMessage>;
}

Message.defaultProps = {
  // children: '',
  useTheme: MessageTheme.DEFAULT,
};

export default Message;
