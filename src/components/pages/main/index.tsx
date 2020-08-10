import React, { useState } from 'react';
import Thread from '@src/components/organisms/Thread';
import { IMessage } from '@src/interfaces/MessageInterfaces';
import MessageGroup from '@src/components/molecules/MessageGroup';
import Message from '@src/components/molecules/Message';
import { uid } from 'react-uid';
import BackupDropper from '@src/components/atoms/BackupDropper';

// threadObj = undefined;
function Main(): JSX.Element {
  const [threadObj, setThreadObj] = useState({
    thread_path: '',
    thread_type: '',
    participants: [],
    title: '',
    messages: [],
  });
  return (
    <div>
      <h1>Messenger Explorer</h1>
      <BackupDropper message="Drop your Conversation .json file here" onLoaded={setThreadObj} />
      {threadObj && (
        <Thread
          thread_path={threadObj.thread_path}
          thread_type={threadObj.thread_type}
          participants={threadObj.participants}
          title={threadObj.title}
        >
          {threadObj.messages
            // .slice(0, 200)
            .reverse()
            .map((message: IMessage) => {
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
      )}
    </div>
  );
}

export default Main;
