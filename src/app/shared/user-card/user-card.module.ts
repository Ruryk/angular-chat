import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCardComponent } from './component/user-card.component';
import { UserCardRoutingModule } from './user-card-routing.module';

@NgModule({
  declarations: [
    UserCardComponent
  ],
  imports: [
    CommonModule,
    UserCardRoutingModule
  ],
  exports: [
    UserCardComponent
  ]
})
export class UserCardModule { }
