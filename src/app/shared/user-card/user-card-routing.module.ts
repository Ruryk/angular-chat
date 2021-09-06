import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserCardComponent } from './component/user-card.component';

const routes: Routes = [
  {path: '', component: UserCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCardRoutingModule { }
