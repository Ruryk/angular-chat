import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

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
import { FilesService } from '../../../../../services/files/files.service';
import { IChatCardParameters } from '../../../../../shared/custom-ui/chat-card/chat-card.interfaces';
import { IMessageParameters } from '../../../../../shared/custom-ui/message/message.interfaces';
import { IChatListState } from '../../../../../reducers/chat-list/chat-list.interfaces';
import { ChatDataService } from '../../../services/chat-data.service';
import { ChatListDataService } from '../../chat-list/services/chat-list-data/chat-list-data.service';

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
    chatData: IMessageParameters[] | null;
  }> = this.chatRoomDataService.chatRoomData$;
  public chatRoomId$: Observable<string | null> =
    this.chatRoomDataService.chatId$;
  public chatListData$: Observable<IChatListState> =
    this.chatListDataService.chatListDataObject$;
  public file$: BehaviorSubject<{ file: any; type: string } | null> =
    this.filesService.file$;
  public readonly messageForm = new FormGroup({
    message: new FormControl(''),
    file: new FormControl(null),
  });
  public unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    public chatRoomDataService: ChatRoomDataService,
    public chatListDataService: ChatListDataService,
    public emojiService: EmojiService,
    public filesService: FilesService
  ) {}

  sendMessage(event: Event): void {
    event.preventDefault();
    const messageData = this.messageForm.value;
    this.chatRoomDataService.sendMessage(messageData);
    this.messageForm.controls.message.setValue('');
  }

  ngOnInit(): void {
    this.emojiService.emojiValue$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        const prevValue = this.messageForm.controls.message.value;
        const newValue = prevValue + value;
        this.messageForm.controls.message.setValue(newValue);
      });
    this.filesService.file$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((fileObject: { file: any; type: string } | null) => {
        const file = fileObject?.file || null;
        this.messageForm.controls.file.setValue(file);
      });
  }

  deleteFile(): void {
    this.filesService.deleteFile();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.emojiService.emojiValue$.next('');
  }
}
