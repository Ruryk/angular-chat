import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { CChatListConfigList } from '../chat-list.config';
import { ChatListDataService } from '../services/chat-list-data/chat-list-data.service';
import { IChatCardParameters } from '../../../../../shared/custom-ui/chat-card/chat-card.interfaces';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent {
  public readonly chatListConfig = CChatListConfigList;
  public readonly chatListData$: Observable<IChatCardParameters[]> =
    this.chatListDataService.chatListData$;
  public readonly activeChatId$: BehaviorSubject<string | null> =
    this.chatListDataService.activeChatId$;
  public readonly chatListForm = new FormGroup({
    search: new FormControl(null),
    filter: new FormControl(null),
  });

  constructor(public chatListDataService: ChatListDataService) {}

  setActiveChat(id: string): void {
    this.activeChatId$.next(id);
  }
}
