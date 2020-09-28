import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api-service/api.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list.container.html',
  styleUrls: ['./product-list.container.scss']
})
export class ProductListContainer implements OnInit {
  // Product list
  public product$: Observable<Product[]>;
  constructor(
    private apiService: ApiService,
  ) {
    this.getProducts();
  }

  ngOnInit() {
  }

  public getProducts(): void {
    this.product$ = this.apiService.getProducts();
  }

}
