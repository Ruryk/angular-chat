import { Component, Input } from '@angular/core';

import { ESelectTypes } from '../select.enums';
import { ISelectParameters } from '../select.interfaces';
import { CSelectOptionsConfigList } from '../select.options.config';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  public ESelectTypes = ESelectTypes;
  public selectOptionsConfigList = CSelectOptionsConfigList;
  public componentParameters: ISelectParameters = { type: '' };

  @Input() set selectParameters(params: ISelectParameters) {
    this.componentParameters = params;
  }

  get selectParameters(): ISelectParameters {
    return this.componentParameters;
  }
}
