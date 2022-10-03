import { Component, forwardRef, Input } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {

  @Input() public placeholder = '';
  @Input() public multiple = false;
  @Input() public disabled = false;
  @Input() public isValid: boolean = true;
  @Input() public class: any;
  @Input() public id: string;

  private _innerValue: any;

  public get innerValue(): any {
    return this._innerValue;
  }

  public set innerValue(value: any) {
    if (value === this._innerValue) {
      return;
    }

    this._innerValue = value;
    this.onChangeCallback(value);
  }

  public onChangeCallback: (_: any) => void = () => {};
  public onTouchedCallback: (_: any) => void = () => {};

  public writeValue(obj: any): void {
    this.innerValue = obj;
  }

  public registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
