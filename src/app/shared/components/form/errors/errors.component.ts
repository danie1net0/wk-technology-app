import { Component, Input } from '@angular/core'
import { AbstractControl } from '@angular/forms'

import { CustomValidators } from '../../../classes/custom-validators';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss'],
})
export class ErrorsComponent {

  @Input() public control: AbstractControl

  public get errorMessage(): any {
    for (const controlName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(controlName) && (this.control.touched || this.control.dirty)) {
        return CustomValidators.getErrorMessage(controlName, this.control.errors[controlName]);
      }
    }

    return null;
  }

}
