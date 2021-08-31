import { Component, OnInit } from '@angular/core';

import { CSignUpConfigList } from '../sign-up.config';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  public readonly signUpConfig = CSignUpConfigList;
}
