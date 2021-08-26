import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
  EFileTypes,
  EMessageStatus,
  EMessageTypes,
} from '../../../../../shared/custom-ui/message/message.enums';
import { ChatRoomDataService } from '../services/chat-room-data/chat-room-data.service';
import { IChatRoomData } from '../chat-room.interfaces';
import { CChatRoomConfigList } from '../chat-room.config';
import { FormControl, FormGroup } from '@angular/forms';
import { EmojiService } from '../../../../../services/emoji/emoji.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
})
export class ChatRoomComponent implements OnInit, OnDestroy {
  public EMessageTypes = EMessageTypes;
  public EMessageStatus = EMessageStatus;
  public chatRoomConfig = CChatRoomConfigList;
  public chatRoomData$: Observable<{
    chatData: IChatRoomData | null;
  }> = this.chatRoomDataService.charRoomData$;
  public readonly messageForm = new FormGroup({
    message: new FormControl(''),
  });
  public unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    public chatRoomDataService: ChatRoomDataService,
    public emojiService: EmojiService
  ) {}

  sendMessage(event: Event): void {
    event.preventDefault();
    console.log(this.messageForm.value);
  }

  ngOnInit(): void {
    this.emojiService.emojiValue$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        const prevValue = this.messageForm.controls.message.value;
        const newValue = prevValue + value;
        this.messageForm.controls.message.setValue(newValue);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.emojiService.emojiValue$.next('');
  }
}
