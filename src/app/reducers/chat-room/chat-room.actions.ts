import { Action } from '@ngrx/store';

import { IChatRoomData } from '../../template/chat/children/chat-room/chat-room.interfaces';
import { IMessageParameters } from '../../shared/custom-ui/message/message.interfaces';

export enum chatRoomActionsType {
  setChatId = '[CHATROOM] setChatId',
  setChatData = '[CHATROOM] editUserData',
}

export class SetChatIdAction implements Action {
  readonly type = chatRoomActionsType.setChatId;

  constructor(public payload: { id: string | null }) {}
}

export class SetChatDataAction implements Action {
  readonly type = chatRoomActionsType.setChatData;

  constructor(
    public payload: {
      chatData: IMessageParameters[] | null;
    }
  ) {}
}

export type ChatRoomActions = SetChatIdAction | SetChatDataAction;
