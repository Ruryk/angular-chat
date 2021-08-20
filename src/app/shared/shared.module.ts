import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './custom-ui/button/button.component';
import { InputComponent } from './custom-ui/input/input.component';
import { SelectComponent } from './custom-ui/select/select.component';
import { ChatCardComponent } from './custom-ui/chat-card/chat-card.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    SelectComponent,
    ChatCardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    SelectComponent,
    ChatCardComponent,
    MatIconModule
  ]
})
export class SharedModule {
}
