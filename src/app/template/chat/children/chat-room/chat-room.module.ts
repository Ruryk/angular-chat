import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoomComponent } from './component/chat-room.component';
import { ChatRoomRoutingModule } from './chat-room-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChatRoomComponent],
  imports: [
    CommonModule,
    ChatRoomRoutingModule,
    SharedModule,
    ReactiveComponentModule,
    ReactiveFormsModule,
  ],
  exports: [ChatRoomComponent],
})
export class ChatRoomModule {}
