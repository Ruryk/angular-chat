import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

import { CChatListConfigList } from '../chat-list.config';
import { ChatListDataService } from '../services/chat-list-data/chat-list-data.service';
import { IChatCardParameters } from '../../../../../shared/custom-ui/chat-card/chat-card.interfaces';
import { AddChatModalComponent } from '../children/add-chat-modal/component/add-chat-modal.component';

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

  constructor(
    public chatListDataService: ChatListDataService,
    public dialog: MatDialog
  ) {}

  openAddChatModal(): void {
    const addChatModalRef = this.dialog.open(AddChatModalComponent);
    addChatModalRef.afterClosed().subscribe((result) => {});
  }

  setActiveChat(id: string): void {
    this.activeChatId$.next(id);
  }
}
