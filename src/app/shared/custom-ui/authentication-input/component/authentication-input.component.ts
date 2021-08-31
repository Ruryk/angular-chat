import {
  Component,
  forwardRef,
  OnDestroy,
  QueryList,
  ViewChildren,
  ElementRef,
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormArray,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

export const INPUTAUTHENTICATION_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AuthenticationInputComponent),
  multi: true,
};

@Component({
  selector: 'app-authentication-input',
  templateUrl: './authentication-input.component.html',
  styleUrls: ['./authentication-input.component.scss'],
  providers: [INPUTAUTHENTICATION_VALUE_ACCESSOR],
})
export class AuthenticationInputComponent
  implements ControlValueAccessor, OnDestroy
{
  @ViewChildren('input') authInputs: QueryList<ElementRef> | null = null;
  public unsubscribe$ = new Subject<void>();
  public readonly authenticationForm: FormGroup = new FormGroup({
    authArray: new FormArray([
      new FormControl('', [Validators.required, Validators.maxLength(1)]),
      new FormControl('', [Validators.required, Validators.maxLength(1)]),
      new FormControl('', [Validators.required, Validators.maxLength(1)]),
      new FormControl('', [Validators.required, Validators.maxLength(1)]),
      new FormControl('', [Validators.required, Validators.maxLength(1)]),
      new FormControl('', [Validators.required, Validators.maxLength(1)]),
    ]),
  });

  public value: string | null = null;
  public disableState = false;
  private onChange: (p: any) => void = () => {};
  private onTouched: (p: any) => void = () => {};

  constructor() {
    this.disableState = false;
    this.value = '';
    this.authenticationForm.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value: string) => {
        this.changeValue(this.authenticationForm.value);
      });
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

  changeValue(value: any): void {
    const resultValue = value.authArray.join('');
    this.onChange(resultValue);
    this.onTouched(resultValue);
  }

  getControls(): any {
    return this.authenticationForm.controls.authArray as FormArray;
  }

  setSelectionStart(event: any): void {
    event.target.selectionStart = event.target.value.length;
  }

  focusIn(event: any): void {
    event.target.classList.add('active');
  }

  focusOut(event: any): void {
    event.target.classList.remove('active');
  }

  change(index: number): void {
    const item = this.authInputs?.toArray()[index].nativeElement;
    const nextItem = this.authInputs?.toArray()[index + 1].nativeElement;

    if (item.value.length >= 1) {
      nextItem.focus();
    }
  }

  keyDetection(event: KeyboardEvent, index: number): void {
    const item = this.authInputs?.toArray()[index].nativeElement;
    const previousItem = this.authInputs?.toArray()[index - 1].nativeElement;
    if (event.key === 'Backspace') {
      previousItem.focus();
      item.value = '';
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
