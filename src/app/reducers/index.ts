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

export interface IState {
  [chatRoomNode]: IChatRoomState;
}

export const reducers: ActionReducerMap<IState> = {
  [chatRoomNode]: chatRoomDataReducer,
};
export const getChatRoomDataState = (state: IState): IChatRoomState =>
  state[chatRoomNode];

// ChatRoom Selectors
export const getChatRoomData = createSelector(
  getChatRoomDataState,
  chatRoomDataSelectors.selectChatRoomData
);

export const metaReducers: MetaReducer<IState>[] = !environment.production
  ? []
  : [];
