import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

import { Form } from '../../../../shared/classes/form';
import { SaleService } from '../../services/sale.service';
import { Customer } from '../../interfaces/customer';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.scss']
})
export class CreateSaleComponent extends Form implements OnInit {

  public customers: Customer[];
  public products: Product[];

  public constructor(
    private formBuilder: FormBuilder,
    private saleService: SaleService,
    private activatedRoute: ActivatedRoute,
  ) {
    super();
  }

  public get productsForm() : FormArray {
    return this.formGroup.get('products') as FormArray
  }

  public ngOnInit(): void {
    this.customers = this.activatedRoute.snapshot.data['customers']
    this.products = this.activatedRoute.snapshot.data['products']

    this.formGroup = this.formBuilder.group({
      customer_id: [null, [Validators.required]],
      products: this.formBuilder.array([]),
    });
  }

  public addProduct(): void {
    const product = this.formBuilder.group({
      id: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
    })

    this.productsForm.push(product);
  }

  public removeProduct(index: number): void {
    this.productsForm.removeAt(index);
  }

  public submit(): void {
    this.saleService
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
      text: 'Venda cadastrado com sucesso!',
    })

    this.resetForm()
    this.productsForm.clear()
  }

}
