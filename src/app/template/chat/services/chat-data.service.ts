import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

// import { Observable } from 'rxjs';
// import { io } from 'socket.io-client';

import { IState } from '../../../reducers';
import { CApi } from '../../../contstantes/constanses';
import { environment } from '../../../../environments/environment';
import { IChatCardParameters } from '../../../shared/custom-ui/chat-card/chat-card.interfaces';
import { IChatListState } from '../../../reducers/chat-list/chat-list.interfaces';
import { SetChatListStateAction } from '../../../reducers/chat-list/chat-list.actions';
import { IChatRoomData } from '../children/chat-room/chat-room.interfaces';
import { SetChatDataAction } from '../../../reducers/chat-room/chat-room.actions';

@Injectable({
  providedIn: 'root',
})
export class ChatDataService {
  // socket: any;
  constructor(private http: HttpClient, private store: Store<IState>) {
    // this.socket = io('http://localhost:3000');
    // this.socket.on('connected', () => {
    //   console.log('connected !');
    //
    //   this.emit('msgToServer', 'hello');
    // });
    //
    // this.listen('msgToClient').subscribe((res) => console.log(res));
  }

  getChatListData(): void {
    this.http
      .get<IChatCardParameters[]>(
        `${environment.apiUrl}${CApi.chatList.get}/${0}/${10}`
      )
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

  getChatRoomData(id: string | null): void {
    if (id) {
      this.http
        .get<IChatRoomData>(
          `${environment.apiUrl}${CApi.chatRoom.get}/${id}/${0}/${20}`
        )
        .subscribe((chatData) => {
          this.store.dispatch(new SetChatDataAction({ chatData }));
        });
    } else {
      this.store.dispatch(new SetChatDataAction({ chatData: null }));
    }
  }

  // listen(eventName: string): Observable<any> {
  //   return new Observable((subscriber) => {
  //     this.socket.on(eventName, (data: any) => {
  //       subscriber.next(data);
  //     });
  //   });
  // }
  //
  // emit(eventName: string, data: any): void {
  //   this.socket.emit(eventName, data);
  // }
}
