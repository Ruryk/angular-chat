import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { IState } from '../../../reducers';
import { CApi } from '../../../contstantes/constanses';
import { environment } from '../../../../environments/environment';
import { IChatCardParameters } from '../../../shared/custom-ui/chat-card/chat-card.interfaces';
import { IChatListState } from '../../../reducers/chat-list/chat-list.interfaces';
import { SetChatListStateAction } from '../../../reducers/chat-list/chat-list.actions';

@Injectable({
  providedIn: 'root',
})
export class ChatDataService {
  constructor(private http: HttpClient, private store: Store<IState>) {}

  getChatListData(): void {
    this.http
      .get<IChatCardParameters[]>(environment.apiUrl + CApi.chatList.get)
      .subscribe((data: IChatCardParameters[]) => {
        const newData = data.reduce<IChatListState>(
          (dataObj, item) => ((dataObj[item.id] = item), dataObj),
          {}
        );
        this.store.dispatch(
          new SetChatListStateAction({ chatListState: newData })
        );
      });
  }
}
