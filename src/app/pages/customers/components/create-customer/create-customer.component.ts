import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { Form } from '../../../../shared/classes/form';
import { CustomValidators } from '../../../../shared/classes/custom-validators';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent extends Form implements OnInit {

  public constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
  ) {
    super();
  }

  public ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(255)]],
      cpf: [null, [Validators.required, CustomValidators.cpf]],
      email: [null, [Validators.required, Validators.email, Validators.maxLength(255)]],
      birth_date: [null, [Validators.required]],
      address: this.formBuilder.group({
        zip_code: [null, [Validators.required, CustomValidators.zipCode]],
        public_place: [null, [Validators.required, Validators.maxLength(255)]],
        number: [null, [Validators.required, Validators.maxLength(15)]],
        neighborhood: [null, [Validators.required, Validators.maxLength(255)]],
        complement: [null, [Validators.maxLength(255)]],
        city: [null, [Validators.required, Validators.maxLength(255)]],
      })
    });
  }

  public submit(): void {
    this.customerService
      .store(this.formGroup.value)
      .subscribe({
        next: this.handleSuccess.bind(this),
        error: this.handleErrors.bind(this)
      })
  }

  private async handleSuccess(): Promise<void> {
    await Swal.fire({
      icon: 'success',
      title: 'Sucesso',
      text: 'Cliente cadastrado com sucesso!',
    })

    this.resetForm()
  }

}
