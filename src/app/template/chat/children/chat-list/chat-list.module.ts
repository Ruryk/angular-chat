import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatListComponent } from './component/chat-list.component';
import { ChatListRoutingModule } from './chat-list-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { UserCardModule } from '../../../../shared/user-card/user-card.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [ChatListComponent],
  imports: [
    CommonModule,
    ChatListRoutingModule,
    SharedModule,
    UserCardModule,
    ReactiveComponentModule,
  ],
  exports: [ChatListComponent],
})
export class ChatListModule {}
