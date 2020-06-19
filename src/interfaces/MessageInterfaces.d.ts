interface Reaction {
  /** Reaction symbol in utf8 */
  reaction: string;
  /** Name of user who reacted */
  actor: string;
}

interface AttachmentBase {
  /** Local uri to attachment */
  uri: string;
  /** Attachment creation timestamp in milliseconds */
  creation_timestamp: number;
}

type MessageType = 'text' | 'sticker' | 'gif' | 'photo' | 'video' | 'audio' | 'share' | 'call';

interface MessageBase {
  /** Type of message */
  messageType: MessageType;
  /** Type of message in FB schema */
  type: 'Generic' | 'Call' | 'Share';
  /** Name of sender */
  sender_name: string;
  /** Timestamp in milliseconds */
  timestamp_ms: number;
  /** Array of reactions */
  reactions?: Array<Reaction>;
}

interface TextMessage extends MessageBase {
  messageType: 'text';
  type: 'Generic';
  /** Text content, main body of message */
  content: string;
}

interface StickerMessage extends MessageBase {
  messageType: 'sticker';
  type: 'Generic';
  /** Sticker object with local uri to sticker */
  sticker: { uri: string };
}

interface GifMessage extends MessageBase {
  messageType: 'gif';
  type: 'Generic';
  /** Array of gifs, attachments with only a uri */
  gifs: Array<Omit<AttachmentBase, 'creation_timestamp'>>;
}

interface PhotoMessage extends MessageBase {
  messageType: 'photo';
  type: 'Generic';
  /** Array of photo attachments */
  photos: Array<AttachmentBase>;
}

interface VideoMessage extends MessageBase {
  messageType: 'video';
  type: 'Generic';
  /** Array of video attachments with thumbnail */
  videos: Array<AttachmentBase & { thumbnail: { uri: string } }>;
}

interface AudioMessage extends MessageBase {
  messageType: 'audio';
  type: 'Generic';
  /** Array of audio attachments */
  audios: Array<AttachmentBase>;
}

interface ShareMessage extends MessageBase {
  messageType: 'share';
  type: 'Share';
  /** Optional text message above share */
  content?: string;
  /** Share object with link */
  share: { link: string };
}

interface CallMessage extends Omit<MessageBase, 'reactions'> {
  messageType: 'call';
  type: 'Call';
  /** Text description of call event */
  content: string;
  /** Call duration in seconds (?) */
  call_duration: number;
}

type IMessage =
  | TextMessage
  | StickerMessage
  | GifMessage
  | PhotoMessage
  | VideoMessage
  | AudioMessage
  | ShareMessage
  | CallMessage;

export {
  IMessage,
  MessageBase,
  MessageType,
  AttachmentBase,
  Reaction,
  TextMessage,
  StickerMessage,
  GifMessage,
  PhotoMessage,
  VideoMessage,
  AudioMessage,
  ShareMessage,
  CallMessage,
};
