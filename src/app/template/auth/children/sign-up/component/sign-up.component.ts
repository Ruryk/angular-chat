import {Component, OnInit} from '@angular/core';

import { CSignUpConfigList } from '../sign-up.config';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from '../services/sign-up.service';
import {AuthService} from "../../../services/auth.service";
import {EAuthView} from "../../../auth.enums";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit{
  public readonly signUpConfig = CSignUpConfigList;
  public readonly signUpForm: FormGroup = new FormGroup({
    firstName: new FormControl('Elon', [Validators.minLength(2), Validators.required]),
    lastName: new FormControl('Musk', [Validators.minLength(2), Validators.required]),
    email: new FormControl('elon.musk@gmail.com', [Validators.email, Validators.required]),
    password: new FormControl('222333', Validators.minLength(6)),
  });

  constructor(private signUpService: SignUpService, private authService: AuthService) {}

  submitForm(): void {
    const formStatus = this.signUpForm.valid;
    if (formStatus) {
      this.signUpService.signUpUser(this.signUpForm.value);
    }
  }

  ngOnInit() {
    this.authService.authView$.next(EAuthView.SignUp)
  }
}
