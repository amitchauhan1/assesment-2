import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagementRoutingModule } from './product-management-routing.module';
import { ProductListPresenter } from './product-list-container/product-list-presenter/product-list.presenter';
import { ProductListContainer } from './product-list-container/product-list.container';
import { ProductListPresentation } from './product-list-container/product-list-presentation/product-list.presentation';
import {
  ProductFormPresentation
} from './product-list-container/product-list-presentation/product-form-presentation/product-form.presentation';
import { OverlayModule } from '@angular/cdk/overlay';
import { ApiService } from './api-service/api.service';


@NgModule({
  declarations: [ProductListContainer, ProductListPresentation, ProductFormPresentation],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    OverlayModule,
  ],
  providers: [ApiService],
  entryComponents:[ProductFormPresentation]
})
export class ProductManagementModule { }
