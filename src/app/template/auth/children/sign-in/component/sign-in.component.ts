import { Component } from '@angular/core';

import { CSignInConfigList } from '../sign-in.config';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInService } from '../services/sign-in.service';
import {HttpClient} from "@angular/common/http";
import {CApi} from "../../../../../contstantes/constanses";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  public readonly signInConfig = CSignInConfigList;
  public readonly signInForm: FormGroup = new FormGroup({
    email: new FormControl('test@gmail.com', [Validators.email, Validators.required]),
    password: new FormControl('222333', Validators.minLength(6)),
  });

  constructor(private signInService: SignInService, private http: HttpClient) {}

  submitForm(): void {
    const formStatus = this.signInForm.valid;
    if (formStatus) {
      this.signInService.loginUser(this.signInForm.value);
    }
  }
}
