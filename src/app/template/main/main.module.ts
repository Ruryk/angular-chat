import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './component/main.component';
import { MainRoutingModule } from './main-routing.module';
import { ChatModule } from '../../shared/chat/chat.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ChatModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
