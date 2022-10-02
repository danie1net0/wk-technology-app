import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { FormModule } from '../../shared/components/form/form.module';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { ProductService } from './services/product.service';
import { ProductResolverGuard } from './guards/product-resolver-guard.service';

@NgModule({
  declarations: [
    ListProductsComponent,
    CreateProductComponent,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormModule,
    PaginationComponent,
  ],
  providers: [ProductService, ProductResolverGuard],
})
export class ProductsModule { }
