import { Action } from '@ngrx/store';

import { IChatCardParameters } from '../../shared/custom-ui/chat-card/chat-card.interfaces';
import { IChatListState } from './chat-list.interfaces';

export enum chatListActionsType {
  setChatListState = '[CHATLIST] setChatListState',
  addNewChat = '[CHATLIST] addNewChat',
  deleteChat = '[CHATLIST] deleteChat',
}

export class SetChatListStateAction implements Action {
  readonly type = chatListActionsType.setChatListState;

  constructor(public payload: { chatListState: IChatListState }) {}
}

export class AddNewChatAction implements Action {
  readonly type = chatListActionsType.addNewChat;

  constructor(
    public payload: {
      chatId: number;
      chatData: IChatCardParameters;
    }
  ) {}
}

export class DeleteChatAction implements Action {
  readonly type = chatListActionsType.deleteChat;

  constructor(public payload: { chatId: number }) {}
}

export type ChatListActions =
  | SetChatListStateAction
  | AddNewChatAction
  | DeleteChatAction;
