import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListProductsComponent } from './components/list-products/list-products.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductResolverGuard } from './guards/product-resolver-guard.service';
import { EditProductComponent } from './components/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListProductsComponent,
  },
  {
    path: 'cadastrar',
    component: CreateProductComponent,
  },
  {
    path: 'editar/:id',
    component: EditProductComponent,
    resolve: {
      product: ProductResolverGuard,
    },
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
