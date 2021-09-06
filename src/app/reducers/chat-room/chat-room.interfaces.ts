import { IChatRoomData } from '../../template/chat/children/chat-room/chat-room.interfaces';
import { IMessageParameters } from '../../shared/custom-ui/message/message.interfaces';

export interface IChatRoomState {
  chatId: string | null;
  chatData: IMessageParameters[] | null;
}
