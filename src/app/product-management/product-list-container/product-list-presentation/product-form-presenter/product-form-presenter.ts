import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductFormPresenter {
  public productForm: FormGroup;  // form group instance
  constructor(
    public formBuilder: FormBuilder
  ) { }

  /**
   * buildProductForm
   */
  public buildProductForm(): FormGroup {
    return this.productForm = this.formBuilder.group(
      {
        id: [''],
        name: ['', [Validators.required]],
        image: ['', [Validators.required]],
        description: ['', [Validators.required]],
        price: ['', [Validators.required]],
        quaility: ['', [Validators.required]],
      });
  }
}
