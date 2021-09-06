import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ISignInData } from '../sign-in.interfaces';
import { AuthService } from '../../../services/auth.service';
import { EAuthStage } from '../../../auth.enums';
import { CApi } from '../../../../../contstantes/constanses';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  constructor(private http: HttpClient, public authService: AuthService) {}

  loginUser(signInData: ISignInData): void {
    this.http
      .post<{ token: string }>(CApi.server + CApi.user.login, signInData)
      .subscribe((res) => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.authService.authStatus$.next(EAuthStage.Authentication);
        }
      });
  }

  authenticationUser(code: string): void {
    this.http
      .post<{ token: string }>(CApi.server + CApi.user.authenticationLogin, {
        code,
      })
      .subscribe((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.authService.authStatus$.next(EAuthStage.InputData);
        }
      });
  }
}
