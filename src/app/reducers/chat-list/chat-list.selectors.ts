import { IChatListState } from './chat-list.interfaces';
import { IChatCardParameters } from '../../shared/custom-ui/chat-card/chat-card.interfaces';

export const selectChatListData = (state: IChatListState): IChatListState =>
  state;

export const selectChatListById = (
  state: IChatListState,
  props: { id: string }
): IChatCardParameters => state[props.id];
