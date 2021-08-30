import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { getChatListData, IState } from '../../../../../../reducers';
import { IChatCardParameters } from 'src/app/shared/custom-ui/chat-card/chat-card.interfaces';
import { SetChatIdAction } from '../../../../../../reducers/chat-room/chat-room.actions';
import { ChatDataService } from '../../../../services/chat-data.service';
import { IChatListState } from '../../../../../../reducers/chat-list/chat-list.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ChatListDataService {
  public unsubscribe$: Subject<void> = new Subject<void>();
  public chatListDataObject$: Observable<IChatListState> =
    this.store.select(getChatListData);
  public chatListData$: Observable<IChatCardParameters[]> = this.store
    .select(getChatListData)
    .pipe(map((data) => Object.values(data)));
  public activeChatId$: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);
  constructor(
    private store: Store<IState>,
    private chatDataService: ChatDataService
  ) {
    this.activeChatId$.pipe(takeUntil(this.unsubscribe$)).subscribe((id) => {
      this.store.dispatch(new SetChatIdAction({ id }));
      this.chatDataService.getChatRoomData(id);
    });
  }
}
