import { FormArray, FormControl, FormGroup } from '@angular/forms'

import Swal from 'sweetalert2';

export abstract class Form {
  public formGroup: FormGroup;

  public abstract submit(): void;

  public onSubmit(): void {
    if (this.formGroup.valid) {
      return this.submit();
    }

    this.verifyValidControls(this.formGroup);
  }

  private verifyValidControls(formGroup: FormGroup | FormArray): void {
    Object.keys(formGroup.controls).forEach((field: string) => {
      const control = formGroup.get(field);

      control.markAsDirty();
      control.markAsTouched();

      if (control instanceof FormGroup || control instanceof FormArray) {
        this.verifyValidControls(control);
      }
    })
  }

  public verifyTouchedField(field: any): boolean {
    if (field instanceof FormControl) {
      return !field.valid && (field.touched || field.dirty);
    }

    const formControl = this.formGroup.get(field);

    return !formControl.valid && (formControl.touched || formControl.dirty);
  }

  public isValid(field: string): boolean {
    return !this.verifyTouchedField(this.formGroup.get(field));
  }

  public resetForm(): void {
    this.formGroup.reset();
    this.formGroup.markAsPristine();
  }

  public async handleErrors(error: any): Promise<void> {
    if ([422, 401].includes(error?.status) && error?.error?.errors) {
      Object.keys(error.error.errors).forEach((field: string) => {
        const formControl = this.formGroup.get(field);

        if (formControl) {
          formControl.setErrors({
            [field]: {message: error.error.errors[field][0]},
          });
        }

        if (formControl) {
          formControl.markAsDirty();
        }
      })

      return;
    }

    const message = error?.error?.message ?? error?.error?.data?.message ?? error?.data?.message ?? error?.message;

    await Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
    });
  }
}
