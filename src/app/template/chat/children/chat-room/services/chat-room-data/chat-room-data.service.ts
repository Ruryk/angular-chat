import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { filter, mergeMap, takeUntil } from 'rxjs/operators';

import {
  getChatListById,
  getChatListData,
  getChatRoomData,
  getChatRoomId,
  IState,
} from '../../../../../../reducers';
import { IChatRoomData, IMessageData } from '../../chat-room.interfaces';
import { EmojiService } from '../../../../../../services/emoji/emoji.service';
import { FilesService } from '../../../../../../services/files/files.service';
import { IChatCardParameters } from '../../../../../../shared/custom-ui/chat-card/chat-card.interfaces';
import { IMessageParameters } from '../../../../../../shared/custom-ui/message/message.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ChatRoomDataService implements OnDestroy {
  public unsubscribe$: Subject<void> = new Subject<void>();
  public chatRoomData$: Observable<{
    chatData: IMessageParameters[] | null;
  }> = this.store.select(getChatRoomData);
  public chatId$ = this.store.select(getChatRoomId);

  constructor(
    private store: Store<IState>,
    private http: HttpClient,
    private emojiService: EmojiService,
    private filesService: FilesService
  ) {}

  sendMessage(messageData: IMessageData): void {
    console.log(messageData);
    this.emojiService.emojiValue$.next('');
    this.filesService.file$.next(null);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
