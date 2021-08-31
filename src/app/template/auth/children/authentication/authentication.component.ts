import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInService } from '../sign-in/services/sign-in.service';
import { SignUpService } from '../sign-up/services/sign-up.service';
import { EAuthStatus, EAuthView } from '../../auth.enums';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  public readonly authenticationForm: FormGroup = new FormGroup({
    code: new FormControl('', [Validators.minLength(6)]),
  });
  constructor(
    public signInService: SignInService,
    public signUpService: SignUpService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authenticationForm.statusChanges.pipe().subscribe((status: string) => {
      if (status === EAuthStatus.Valid) {
        switch (this.authService.authView) {
          case EAuthView.SignIn:
            this.signInService.authenticationUser(
              this.authenticationForm.value
            );
            break;
          case EAuthView.SignUp:
            this.signUpService.authenticationUser(
              this.authenticationForm.value
            );
            break;
          default:
            break;
        }
      }
    });
  }
}
