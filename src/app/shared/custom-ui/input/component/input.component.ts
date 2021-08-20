import { Component, Input } from '@angular/core';

import { EInputTypes } from '../input.enums';
import { IInputParameters } from '../input.interfaces';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  public EInputTypes = EInputTypes;
  public focus: boolean = false;
  public componentParameters: IInputParameters = { type: '', placeholder: '' };

  @Input() set inputParameters(params: IInputParameters) {
    this.componentParameters = params;
  }

  get inputParameters(): IInputParameters {
    return this.componentParameters;
  }
}
