import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import { IChatRoomState } from './chat-room/chat-room.interfaces';
import {
  chatRoomDataReducer,
  chatRoomNode,
} from './chat-room/chat-room.reducers';

import * as chatRoomDataSelectors from './chat-room/chat-room.selectors';
import * as chatListDataSelectors from './chat-list/chat-list.selectors';
import {
  chatListDataReducer,
  chatListNode,
} from './chat-list/chat-list.reducers';
import { IChatListState } from './chat-list/chat-list.interfaces';

export interface IState {
  [chatRoomNode]: IChatRoomState;
  [chatListNode]: IChatListState;
}

export const reducers: ActionReducerMap<IState> = {
  [chatRoomNode]: chatRoomDataReducer,
  [chatListNode]: chatListDataReducer,
};
export const getChatRoomDataState = (state: IState): IChatRoomState =>
  state[chatRoomNode];

export const getChatListDataState = (state: IState): IChatListState =>
  state[chatListNode];

// ChatRoom Selectors
export const getChatRoomData = createSelector(
  getChatRoomDataState,
  chatRoomDataSelectors.selectChatRoomData
);

// ChatList Selectors
export const getChatListData = createSelector(
  getChatListDataState,
  chatListDataSelectors.selectChatListData
);

export const metaReducers: MetaReducer<IState>[] = !environment.production
  ? []
  : [];
