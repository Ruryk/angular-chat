import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatListComponent } from './component/chat-list.component';
import { ChatListRoutingModule } from './chat-list-routing.module';

@NgModule({
  declarations: [
    ChatListComponent
  ],
  imports: [
    CommonModule,
    ChatListRoutingModule
  ],
  exports: [
    ChatListComponent
  ]
})
export class ChatListModule { }
