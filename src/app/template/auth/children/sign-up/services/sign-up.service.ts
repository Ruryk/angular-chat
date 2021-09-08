import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { ISignUpData } from '../sign-up.interfaces';
import { AuthService } from '../../../services/auth.service';
import { EAuthStage } from '../../../auth.enums';
import { CApi } from '../../../../../contstantes/constanses';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private signUpData$: BehaviorSubject<ISignUpData | null> =
    new BehaviorSubject<ISignUpData | null>(null);
  constructor(private http: HttpClient,
              public authService: AuthService,
              private cookie: CookieService) {}

  signUpUser(signUpData: ISignUpData): void {
    const { email } = signUpData;
    this.signUpData$.next(signUpData);
    this.http
      .post<{ token: string }>(CApi.server + CApi.user.register, { email })
      .subscribe((res) => {
        if (res.token) {
          this.cookie.set('token', res.token);
          this.authService.authStatus$.next(EAuthStage.Authentication);
        }
      });
  }

  authenticationUser(secretKey: string): void {
    const registerData = Object.assign({secretKey: secretKey}, this.signUpData$.value)
    console.log(registerData);
    this.http
      .post<{ token: string }>(CApi.user.authenticationRegister, {
        registerData
      })
      .subscribe((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.authService.authStatus$.next(EAuthStage.InputData);
        }
      });
  }
}
