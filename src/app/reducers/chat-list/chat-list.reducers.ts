import { Action } from '@ngrx/store';

import { ChatListActions, chatListActionsType } from './chat-list.actions';
import { IChatListState } from './chat-list.interfaces';

export const chatListNode = 'chatListData';

const chatListState: IChatListState = {};

export const chatListDataReducer = (
  state = chatListState,
  action: Action
): IChatListState => {
  const chatListActions = action as ChatListActions;
  switch (chatListActions.type) {
    case chatListActionsType.setChatListState:
      return chatListActions.payload.chatListState;
    case chatListActionsType.addNewChat:
      return {
        ...state,
        [chatListActions.payload.chatId]: chatListActions.payload.chatData,
      };
    case chatListActionsType.deleteChat:
      const newState = { ...state };
      delete newState[chatListActions.payload.chatId];
      return newState;
    default:
      return state;
  }
};
