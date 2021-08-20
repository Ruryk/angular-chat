import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { ButtonComponent } from './custom-ui/button/component/button.component';
import { InputComponent } from './custom-ui/input/component/input.component';
import { SelectComponent } from './custom-ui/select/component/select.component';
import { ChatCardComponent } from './custom-ui/chat-card/component/chat-card.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    SelectComponent,
    ChatCardComponent,
  ],
  imports: [CommonModule, MatIconModule, MatSelectModule],
  exports: [
    ButtonComponent,
    InputComponent,
    SelectComponent,
    ChatCardComponent,
    MatIconModule,
  ],
})
export class SharedModule {}
