import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { EInputTypes } from '../input.enums';
import { IInputParameters } from '../input.interfaces';

export const INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true,
};

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [INPUT_VALUE_ACCESSOR],
})
export class InputComponent implements ControlValueAccessor {
  public EInputTypes = EInputTypes;
  public focus = false;
  public componentParameters: IInputParameters = { type: '', placeholder: '' };
  public value: string | null = null;
  public disableState = false;

  private onChange: (p: any) => void = () => {};
  private onTouched: (p: any) => void = () => {};

  @Input() set inputParameters(params: IInputParameters) {
    this.componentParameters = params;
  }

  get inputParameters(): IInputParameters {
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

  change(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
    this.onTouched(value);
  }
}
