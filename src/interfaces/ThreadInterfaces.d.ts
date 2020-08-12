import { IMessage } from '@src/interfaces/MessageInterfaces';

interface IThread {
  /** Array of participants, objects with name */
  participants: Array<{ name: string }>;
  /** Conversation name */
  title: string;
  /** Type of thread */
  threadType: string;
  /** Local path to thread files */
  threadPath: string;
  /** Messages in thread */
  messages: Array<IMessage>;
}

export { IThread };
