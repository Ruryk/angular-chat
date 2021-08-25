import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import {
  EFileTypes,
  EMessageStatus,
  EMessageTypes,
} from '../../../../../shared/custom-ui/message/message.enums';
import { ChatRoomDataService } from '../services/chat-room-data/chat-room-data.service';
import { IChatRoomData } from '../chat-room.interfaces';
import { CChatRoomConfigList } from '../chat-room.config';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
})
export class ChatRoomComponent {
  public EMessageTypes = EMessageTypes;
  public EMessageStatus = EMessageStatus;
  public chatRoomConfig = CChatRoomConfigList;
  public chatRoomData$: Observable<{
    chatData: IChatRoomData | null;
  }> = this.chatRoomDataService.charRoomData$;

  constructor(public chatRoomDataService: ChatRoomDataService) {}
}
