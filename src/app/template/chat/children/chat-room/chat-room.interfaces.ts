import { IMessageParameters } from '../../../../shared/custom-ui/message/message.interfaces';

export interface IChatRoomData {
  name: string;
  photo: string;
  online: number;
  messageList: IMessageParameters[];
}

export interface IMessageData {
  message: string;
  file: File;
}
