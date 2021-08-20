import { Component, Input } from '@angular/core';

import { IButtonsParameters } from '../button.interfaces';
import { EButtonTypes } from '../button.enums';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  public EButtonTypes = EButtonTypes;
  public componentParameters: IButtonsParameters = { text: '', type: '' };

  @Input() set buttonParameters(params: IButtonsParameters) {
    this.componentParameters = params;
  }

  get buttonParameters(): IButtonsParameters {
    return this.componentParameters;
  }
}
