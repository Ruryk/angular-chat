import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { MatInputModule } from '@angular/material/input';

import { ButtonComponent } from './custom-ui/button/component/button.component';
import { InputComponent } from './custom-ui/input/component/input.component';
import { SelectComponent } from './custom-ui/select/component/select.component';
import { ChatCardComponent } from './custom-ui/chat-card/component/chat-card.component';
import { MessageComponent } from './custom-ui/message/component/message.component';
import { AuthenticationInputComponent } from './custom-ui/authentication-input/authentication-input.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    SelectComponent,
    ChatCardComponent,
    MessageComponent,
    AuthenticationInputComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    PickerModule,
    ReactiveComponentModule,
    MatInputModule,
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    SelectComponent,
    ChatCardComponent,
    MatIconModule,
    MessageComponent,
  ],
})
export class SharedModule {}
