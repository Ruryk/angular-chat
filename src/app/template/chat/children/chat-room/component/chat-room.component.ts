import { Component, OnInit } from '@angular/core';
import { EMessageTypes } from '../../../../../shared/custom-ui/message/message.enums';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
})
export class ChatRoomComponent {
  testMessageParamsList = [
    {
      type: EMessageTypes.Member,
      text: 'Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.\n',
      date: 1629876134000,
    },
    {
      type: EMessageTypes.Member,
      text: 'Can I send you files?',
      date: 1629876234000,
    },
    {
      type: EMessageTypes.User,
      text: 'Hey! Okay, send out.',
      date: 1629876334000,
    },
    {
      type: EMessageTypes.Member,
      date: 1629876414000,
      file: { name: 'Style.zip', size: '41.36 Mb' },
    },
    {
      type: EMessageTypes.User,
      text: 'Hello! I tweaked everything you asked. I am sending the finished file.',
      date: 1629876434000,
    },
  ];
}
