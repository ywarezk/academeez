import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'academeez-control-value-accessor-example',
  template: `
    <div [formGroup]="passwordGroup">
      <input type="password" name="password" formControlName="password" (blur)="touchCB()" />
      <input type="password" name="repeat" formControlName="repeat" (blur)="touchCB()" />
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ControlValueAccessorExampleComponent
    }
  ]
})
export class ControlValueAccessorExampleComponent implements ControlValueAccessor, OnInit {
  private _changeCB = null;
  public touchCB = () => null;

  passwordGroup = this._formBuilder.group({
    password: '',
    repeat: ''
  });

  constructor(private _formBuilder: FormBuilder) {}

  writeValue(obj: string): void {
    this.passwordGroup.controls['password'].setValue(obj);
    this.passwordGroup.controls['repeat'].setValue(obj);
  }
  registerOnChange(fn: any): void {
    this._changeCB = fn;
  }
  registerOnTouched(fn: any): void {
    this.touchCB = fn;
  }

  ngOnInit() {
    this.passwordGroup.valueChanges.subscribe((values) => {
      if (values.password === values.repeat && this._changeCB) (this._changeCB as any)(values.password);
    });
  }
}
