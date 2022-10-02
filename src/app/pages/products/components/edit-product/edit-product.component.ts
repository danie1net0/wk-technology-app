import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

import { Form } from '../../../../shared/classes/form';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent extends Form implements OnInit {

  private product: Product

  public constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) {
    super();
  }

  public ngOnInit(): void {
    this.product = this.activatedRoute.snapshot.data['product'];

    this.formGroup = this.formBuilder.group({
      id: [this.product.id],
      name: [this.product.name, [Validators.required, Validators.maxLength(255)]],
      unit_value: [this.product.unit_value, [Validators.required, Validators.min(0.01)]],
    });
  }

  public submit(): void {
    this.productService
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
      text: 'Produto atualizado com sucesso!',
    })
  }

}
