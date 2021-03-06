import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './component/auth.component';
import { SignInComponent } from './children/sign-in/component/sign-in.component';
import { SignUpComponent } from './children/sign-up/component/sign-up.component';
import { AuthenticationComponent } from './children/authentication/authentication.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    AuthenticationComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
  ],
  exports: [AuthenticationComponent],
})
export class AuthModule {}
