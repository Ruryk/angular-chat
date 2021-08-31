import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { EAuthStage } from '../auth.enums';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authStatus$: BehaviorSubject<string> = new BehaviorSubject<string>(
    EAuthStage.InputData
  );
}
