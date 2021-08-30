import { Component, OnInit } from '@angular/core';
import { CSignInConfigList } from '../sign-in.config';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  public readonly signInConfig = CSignInConfigList;
}
