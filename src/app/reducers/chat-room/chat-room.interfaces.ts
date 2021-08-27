import { IChatRoomData } from '../../template/chat/children/chat-room/chat-room.interfaces';

export interface IChatRoomState {
  chatId: string | null;
  chatData: IChatRoomData | null;
}
