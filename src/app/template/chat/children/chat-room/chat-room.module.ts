import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoomComponent } from './component/chat-room.component';
import { ChatRoomRoutingModule } from './chat-room-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteMessageModalComponent } from './children/delete-message-modal/delete-message-modal.component';
import { EditMessageModalComponent } from './children/edit-message-modal/edit-message-modal.component';
import { DeleteChatModalComponent } from './children/delete-chat-modal/delete-chat-modal.component';

@NgModule({
  declarations: [ChatRoomComponent, DeleteMessageModalComponent, EditMessageModalComponent, DeleteChatModalComponent],
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
