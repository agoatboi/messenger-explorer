/* eslint-disable global-require */
import React, { useState } from 'react';
import Thread from '@src/components/organisms/Thread';
import { IMessage } from '@src/interfaces/MessageInterfaces';
import MessageGroup from '@src/components/molecules/MessageGroup';
import Message from '@src/components/molecules/Message';
import { uid } from 'react-uid';
import BackupDropper from '@src/components/atoms/BackupDropper';
import Header from '@src/components/molecules/Header';
import Button from '@src/components/atoms/Button';
import SettingsSVGIcon from '@src/resources/icons/settings-24px.svg';

function groupMessages(arr: IMessage[][], el: IMessage) {
  let newArr = arr;
  const lastGroupIdx = arr.length - 1;
  const lastGroup = newArr[lastGroupIdx];
  const lastMessage = lastGroup
    ? lastGroup[lastGroup.length - 1]
    : { sender_name: '', timestamp_ms: 0 };
  if (
    arr && // Not empty
    lastGroup && // Group exists
    lastMessage.sender_name === el.sender_name && // Same sender
    lastMessage.timestamp_ms - el.timestamp_ms < 1000 * 60 * 5 // 5 Mins
  ) {
    newArr[lastGroupIdx] = [...lastGroup, el];
  } else {
    newArr = [...arr, [el]];
  }
  return newArr;
}

// threadObj = undefined;
function Main(): JSX.Element {
  const [threadObj, setThreadObj] = useState({
    empty: true,
    thread_path: '',
    thread_type: '',
    participants: [],
    title: '',
    messages: [],
  });
  return (
    <div>
      <Header
        title={threadObj.empty ? '' : threadObj.title}
        buttons={[<Button text="" key={uid(SettingsSVGIcon)} icon={SettingsSVGIcon} />]}
      />
      {threadObj.empty && (
        <BackupDropper message="Drop your Conversation .json file here" onLoaded={setThreadObj} />
      )}
      {!threadObj.empty && (
        <Thread
          thread_path={threadObj.thread_path}
          thread_type={threadObj.thread_type}
          participants={threadObj.participants}
        >
          {threadObj.messages
            .reduce(groupMessages, [])
            .reverse()
            .map((messageGroup: IMessage[]) => {
              const firstMessage = messageGroup[0];
              // const messagesJSX = messageGroup.map((message: IMessage) => {
              //   return <Message key={uid(message)} message={message} />;
              // });
              return (
                <MessageGroup
                  useTheme={firstMessage.sender_name === 'George Katsikas' ? 'OURS' : 'THEIRS'}
                  key={uid(messageGroup)}
                  sender_name={firstMessage.sender_name}
                  timestamp={firstMessage.timestamp_ms}
                >
                  {messageGroup.reverse().map((message: IMessage) => {
                    const messageWithType = message;
                    messageWithType.messageType = 'text';
                    return <Message key={uid(message)} message={messageWithType} />;
                  })}
                </MessageGroup>
              );
            })}
        </Thread>
      )}
    </div>
  );
}

export default Main;
