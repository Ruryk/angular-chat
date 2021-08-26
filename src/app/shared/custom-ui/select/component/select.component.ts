import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { ESelectTypes } from '../select.enums';
import { ISelectParameters } from '../select.interfaces';
import { CSelectOptionsConfigList } from '../select.options.config';

export const SELECT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectComponent),
  multi: true,
};

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [SELECT_VALUE_ACCESSOR],
})
export class SelectComponent implements ControlValueAccessor {
  public ESelectTypes = ESelectTypes;
  public selectOptionsConfigList = CSelectOptionsConfigList;
  public componentParameters: ISelectParameters = { type: '' };
  public defaultValue = 'Select';
  public value: string | null = null;
  public disableState = false;

  private onChange: (p: any) => void = () => {};
  private onTouched: (p: any) => void = () => {};

  @Input() set selectParameters(params: ISelectParameters) {
    this.componentParameters = params;
  }

  get selectParameters(): ISelectParameters {
    return this.componentParameters;
  }

  writeValue(value: string | null): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disableState = isDisabled;
  }

  change(value: string): void {
    this.value = value;
    this.onChange(value);
    this.onTouched(value);
  }
}
