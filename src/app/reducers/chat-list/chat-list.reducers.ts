import { Action } from '@ngrx/store';

import { ChatListActions, chatListActionsType } from './chat-list.actions';
import { IChatListState } from './chat-list.interfaces';

export const chatListNode = 'chatListData';

const chatListState: IChatListState = {
  aqw: {
    id: 'aqw',
    data: {
      firstName: 'Luy',
      lastName: 'Robin',
      photo: 'luy',
      noChecked: 2,
      message:
        'Most of its text is made up from sections 1.10.32–3 of Cicero De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).',
      time: 1629471112000,
      online: true,
      status: '...writes',
    },
  },
  aqe: {
    id: 'aqe',
    data: {
      firstName: 'Jared',
      lastName: 'Sunn',
      photo: 'jared',
      noChecked: 1,
      message:
        'Most of its text is made up from sections 1.10.32–3 of Cicero De finibus bonorum et malorum.',
      time: 1629472112000,
      online: true,
      status: 'records voice message',
    },
  },
  aqr: {
    id: 'aqr',
    data: {
      firstName: 'Nika',
      lastName: 'Jerrardo',
      photo: 'nika',
      message:
        'Cicero famously orated against his political opponent Lucius Sergius Catilina.',
      noChecked: 0,
      time: 1629473112000,
      online: false,
      status: 'last online 5 hours ago',
    },
  },
};

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
