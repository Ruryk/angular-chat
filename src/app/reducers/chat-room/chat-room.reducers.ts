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
  chatId: 0,
  chatData: {
    name: 'Nika Jerrardo',
    photo: '/assets/img/nika.png',
    online: 1629891189000,
    messageList: [
      {
        id: 0,
        type: EMessageTypes.Member,
        photo: '/assets/img/nika.png',
        text: 'Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.\n',
        date: 1629876134000,
      },
      {
        id: 1,
        type: EMessageTypes.Member,
        photo: '/assets/img/nika.png',
        text: 'Can I send you files?',
        date: 1629876234000,
      },
      {
        id: 2,
        type: EMessageTypes.User,
        status: EMessageStatus.Read,
        text: 'Hey! Okay, send out.',
        date: 1629876334000,
      },
      {
        id: 3,
        type: EMessageTypes.Member,
        date: 1629876414000,
        photo: '/assets/img/nika.png',
        file: {
          name: 'Style.zip',
          size: 42991616,
          type: EFileTypes.Any,
          href: '',
        },
      },
      {
        id: 4,
        type: EMessageTypes.User,
        status: EMessageStatus.Send,
        text: 'Hello! I tweaked everything you asked. I am sending the finished file.',
        date: 1629876434000,
      },
    ],
  },
  // chatData: null,
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
