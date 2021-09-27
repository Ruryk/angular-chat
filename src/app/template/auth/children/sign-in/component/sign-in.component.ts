import {Component, OnInit} from '@angular/core';

import { CSignInConfigList } from '../sign-in.config';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInService } from '../services/sign-in.service';
import {HttpClient} from "@angular/common/http";
import {CApi} from "../../../../../contstantes/constanses";
import {AuthService} from "../../../services/auth.service";
import {EAuthView} from "../../../auth.enums";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit{
  public readonly signInConfig = CSignInConfigList;
  public readonly signInForm: FormGroup = new FormGroup({
    email: new FormControl('test@gmail.com', [Validators.email, Validators.required]),
    password: new FormControl('222333', Validators.minLength(6)),
  });

  constructor(private signInService: SignInService, private authService: AuthService) {}

  submitForm(): void {
    const formStatus = this.signInForm.valid;
    if (formStatus) {
      this.signInService.loginUser(this.signInForm.value);
    }
  }

  ngOnInit(){
    this.authService.authView$.next(EAuthView.SignIn)
  }
}
