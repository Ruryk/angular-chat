import { IChatCardParameters } from '../../shared/custom-ui/chat-card/chat-card.interfaces';

export interface IChatListState {
  [key: string]: IChatCardParameters;
}
