import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './component/navigation.component';
import { NavigationRoutingModule } from './navigation-routing.module';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
