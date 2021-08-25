import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { getChatListData, IState } from '../../../../../../reducers';
import { IChatCardParameters } from 'src/app/shared/custom-ui/chat-card/chat-card.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ChatListDataService {
  public chatListData$: Observable<IChatCardParameters[]> = this.store
    .select(getChatListData)
    .pipe(map((data) => Object.values(data)));
  public activeChatId$: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);
  constructor(private store: Store<IState>) {}
}
