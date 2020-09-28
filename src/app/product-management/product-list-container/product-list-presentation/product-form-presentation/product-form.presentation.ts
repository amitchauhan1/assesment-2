import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from 'src/app/product-management/product.model';
import { PRODUCT_DETAILS } from 'src/app/product-management/token';
import { ProductFormPresenter } from '../product-form-presenter/product-form-presenter';

@Component({
  selector: 'app-product-form-ui',
  templateUrl: './product-form.presentation.html',
  styleUrls: ['./product-form.presentation.scss']
})
export class ProductFormPresentation implements OnInit {

  // projectForm instance
  public productForm: FormGroup;
  constructor(
    @Inject(PRODUCT_DETAILS) public product: Product,
    private productFormPresenter: ProductFormPresenter,
  ) {
    this.productForm = this.productFormPresenter.buildProductForm();
    if (this.product != null) {
      this.productForm.patchValue(this.product);
    }
  }

  ngOnInit() {
  }

}
