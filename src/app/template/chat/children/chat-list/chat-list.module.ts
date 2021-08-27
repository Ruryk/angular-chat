import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { ChatListComponent } from './component/chat-list.component';
import { ChatListRoutingModule } from './chat-list-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { UserCardModule } from '../../../../shared/user-card/user-card.module';
import { AddChatModalComponent } from './children/add-chat-modal/component/add-chat-modal.component';

@NgModule({
  declarations: [ChatListComponent, AddChatModalComponent],
  imports: [
    CommonModule,
    ChatListRoutingModule,
    SharedModule,
    UserCardModule,
    ReactiveComponentModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  exports: [ChatListComponent],
})
export class ChatListModule {}
