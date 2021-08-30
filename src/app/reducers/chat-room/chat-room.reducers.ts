import { Action } from '@ngrx/store';

import { ChatRoomActions, chatRoomActionsType } from './chat-room.actions';
import { IChatRoomState } from './chat-room.interfaces';
import {
  EFileTypes,
  EMessageStatus,
  EMessageTypes,
} from '../../shared/custom-ui/message/message.enums';

export const chatRoomNode = 'chatRoomData';

const chatRoomState: IChatRoomState = {
  chatId: null,
  chatData: null,
};

export const chatRoomDataReducer = (
  state = chatRoomState,
  action: Action
): IChatRoomState => {
  const chatRoomActions = action as ChatRoomActions;
  switch (chatRoomActions.type) {
    case chatRoomActionsType.setChatId:
      return {
        ...state,
        chatId: chatRoomActions.payload.id,
      };
    case chatRoomActionsType.setChatData:
      return {
        ...state,
        chatData: chatRoomActions.payload.chatData,
      };
    default:
      return state;
  }
};
