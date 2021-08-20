import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoomComponent } from './component/chat-room.component';
import { ChatRoomRoutingModule } from './chat-room-routing.module';

@NgModule({
  declarations: [
    ChatRoomComponent
  ],
  imports: [
    CommonModule,
    ChatRoomRoutingModule
  ],
  exports: [
    ChatRoomComponent
  ]
})
export class ChatRoomModule { }
