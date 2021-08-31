import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { EAuthStage, EAuthView } from '../auth.enums';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authStatus$: BehaviorSubject<string> = new BehaviorSubject<string>(
    EAuthStage.InputData
  );
  public authView$: BehaviorSubject<string> = new BehaviorSubject<string>(
    EAuthView.SignIn
  );

  public authView = '';

  constructor() {
    this.authView$.pipe().subscribe((view: string) => (this.authView = view));
  }
}
