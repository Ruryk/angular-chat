import { Component, OnInit } from '@angular/core';
import {
  EFileTypes,
  EMessageStatus,
  EMessageTypes,
} from '../../../../../shared/custom-ui/message/message.enums';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
})
export class ChatRoomComponent {
  public EMessageTypes = EMessageTypes;
  public EMessageStatus = EMessageStatus;
  testMessageParamsList = [
    {
      id: 0,
      type: EMessageTypes.Member,
      photo: '',
      text: 'Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.\n',
      date: 1629876134000,
    },
    {
      id: 1,
      type: EMessageTypes.Member,
      photo: '',
      text: 'Can I send you files?',
      date: 1629876234000,
    },
    {
      id: 2,
      type: EMessageTypes.User,
      status: '',
      text: 'Hey! Okay, send out.',
      date: 1629876334000,
    },
    {
      id: 3,
      type: EMessageTypes.Member,
      date: 1629876414000,
      photo: '',
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
      status: '',
      text: 'Hello! I tweaked everything you asked. I am sending the finished file.',
      date: 1629876434000,
    },
  ];
}
