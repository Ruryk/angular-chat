import { IChatRoomData } from '../../template/chat/children/chat-room/chat-room.interfaces';

export interface IChatRoomState {
  chatId: number;
  chatData: IChatRoomData | null;
}
