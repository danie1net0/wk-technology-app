import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

import { Form } from '../../../../shared/classes/form';
import { CustomValidators } from '../../../../shared/classes/custom-validators';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent extends Form implements OnInit {

  private customer: Customer

  public constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
  ) {
    super();
  }

  public ngOnInit(): void {
    this.customer = this.activatedRoute.snapshot.data['customer'];

    this.formGroup = this.formBuilder.group({
      id: [this.customer.id],
      name: [this.customer.name, [Validators.required, Validators.maxLength(255)]],
      cpf: [this.customer.cpf, [Validators.required, CustomValidators.cpf]],
      email: [this.customer.email, [Validators.required, Validators.email, Validators.maxLength(255)]],
      birth_date: [this.customer.birth_date, [Validators.required]],
      address: this.formBuilder.group({
        zip_code: [this.customer.address.zip_code, [Validators.required, CustomValidators.zipCode]],
        public_place: [this.customer.address.public_place, [Validators.required, Validators.maxLength(255)]],
        number: [this.customer.address.number, [Validators.required, Validators.maxLength(15), Validators.minLength(3)]],
        neighborhood: [this.customer.address.neighborhood, [Validators.required, Validators.maxLength(255)]],
        complement: [this.customer.address.complement, [Validators.maxLength(255)]],
        city: [this.customer.address.city, [Validators.required, Validators.maxLength(255)]],
      })
    });
  }

  public submit(): void {
    this.customerService
      .update(this.formGroup.value)
      .subscribe({
        next: this.handleSuccess.bind(this),
        error: this.handleErrors.bind(this)
      })
  }

  private async handleSuccess(): Promise<void> {
    await Swal.fire({
      icon: 'success',
      title: 'Sucesso',
      text: 'Cliente atualizado com sucesso!',
    })
  }

}
