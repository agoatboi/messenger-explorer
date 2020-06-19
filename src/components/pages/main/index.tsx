import React from 'react';
import Thread from '@src/components/organisms/Thread';
import { default as testJSON } from '@src/resources/data/6Menes__OzvFqUfiQ/message_1.json';
import { IMessage } from '@src/interfaces/MessageInterfaces';
import MessageGroup from '@src/components/molecules/MessageGroup';
import Message from '@src/components/molecules/Message';
import { uid } from 'react-uid';
import utf8 from 'utf8';

const testThreadObj: Thread & { messages: Array<IMessage> } = JSON.parse(
  utf8.decode(JSON.stringify(testJSON))
);
const Main: React.FC = () => {
  return (
    <div>
      <h1>Messenger Explorer</h1>
      <Thread
        thread_path={testThreadObj.thread_path}
        thread_type={testThreadObj.thread_type}
        participants={testThreadObj.participants}
        title={testThreadObj.title}
      >
        {testThreadObj.messages
          .slice(0, 200)
          .reverse()
          .map((message) => {
            const newMessage = message;
            newMessage.messageType = 'text';
            return (
              <MessageGroup
                useTheme={message.sender_name === 'George Katsikas' ? 'RIGHT' : 'DEFAULT'}
                key={uid(message)}
                sender_name={message.sender_name}
                timestamp={message.timestamp_ms}
              >
                <Message message={message} />
              </MessageGroup>
            );
          })}
      </Thread>
    </div>
  );
};

export default Main;
