import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Product } from '../product.model';

// Base URL
const productUrl = environment.basePath + 'products/';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Get product detail
   */
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productUrl);
  }

  /**
   * Post product detail
   * @param produtDetail Product produtDetail
   */
  public addProduct(produtDetail: Product): Observable<Product[]> {
    return this.http.post<Product[]>(productUrl, produtDetail);
  }

  /**
   * Update product detail
   * @param id Product Id
   * @param produtDetail Product produtDetail
   */
  public updateProduct(id: number, produtDetail: Product): Observable<Product[]> {
    return this.http.put<Product[]>(productUrl + '/' + id, produtDetail);
  }

  /**
   * Delete product detail
   * @param id Product Id
   */
  public deleteProduct(id: number): Observable<Product[]> {
    return this.http.delete<Product[]>(productUrl + '/' + id);
  }

}
