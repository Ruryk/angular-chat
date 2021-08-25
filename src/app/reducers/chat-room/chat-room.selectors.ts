import { IChatRoomState } from './chat-room.interfaces';
import { IMessageParameters } from '../../shared/custom-ui/message/message.interfaces';
import { IChatRoomData } from '../../template/chat/children/chat-room/chat-room.interfaces';

export const selectChatRoomData = (
  state: IChatRoomState
): {
  chatData: IChatRoomData | null;
} => state;
