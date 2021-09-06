import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './component/main.component';
import { MainRoutingModule } from './main-routing.module';
import { ChatModule } from '../chat/chat.module';
import { UserCardModule } from '../../shared/user-card/user-card.module';
import { NavigationModule } from '../../shared/navigation/navigation.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ChatModule,
    UserCardModule,
    NavigationModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
