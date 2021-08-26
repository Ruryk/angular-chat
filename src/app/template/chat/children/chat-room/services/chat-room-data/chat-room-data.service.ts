import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getChatRoomData, IState } from '../../../../../../reducers';
import { IChatRoomData, IMessageData } from '../../chat-room.interfaces';
import { HttpClient } from '@angular/common/http';
import { EmojiService } from '../../../../../../services/emoji/emoji.service';
import { FilesService } from '../../../../../../services/files/files.service';

@Injectable({
  providedIn: 'root',
})
export class ChatRoomDataService {
  public charRoomData$: Observable<{
    chatData: IChatRoomData | null;
  }> = this.store.select(getChatRoomData);

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
}
