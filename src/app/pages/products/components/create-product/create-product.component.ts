import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { Form } from '../../../../shared/classes/form';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent extends Form implements OnInit {

  public constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
  ) {
    super();
  }

  public ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(255)]],
      unit_value: [null, [Validators.required, Validators.min(0.01)]],
    });
  }

  public submit(): void {
    this.productService
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
      text: 'Produto cadastrado com sucesso!',
    })

    this.resetForm()
  }

}
