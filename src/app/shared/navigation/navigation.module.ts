import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { NavigationComponent } from './component/navigation.component';
import { NavigationRoutingModule } from './navigation-routing.module';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    MatIconModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule {
}
