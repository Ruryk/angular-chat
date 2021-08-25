import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getChatRoomData, IState } from '../../../../../../reducers';
import { IChatRoomData } from '../../chat-room.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ChatRoomDataService {
  public charRoomData$: Observable<{
    chatData: IChatRoomData | null;
  }> = this.store.select(getChatRoomData);

  constructor(private store: Store<IState>) {}
}
