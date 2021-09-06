import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { EAuthStage, EAuthView } from '../auth.enums';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  public EAuthStage = EAuthStage;
  public EAuthView = EAuthView;
  public authStage$: BehaviorSubject<string> = this.authService.authStatus$;
  constructor(private authService: AuthService) {}

  setAuthView(view: string): void {
    this.authService.authView$.next(view);
  }
}
