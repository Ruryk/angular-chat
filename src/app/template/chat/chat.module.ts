import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatComponent } from './component/chat.component';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatListModule } from './children/chat-list/chat-list.module';
import { ChatRoomModule } from './children/chat-room/chat-room.module';

@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    ChatListModule,
    ChatRoomModule
  ],
  exports: [
    ChatComponent
  ]
})
export class ChatModule { }
