import { Overlay } from '@angular/cdk/overlay';
import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { Product } from '../../product.model';
import { ProductListPresenter } from '../product-list-presenter/product-list.presenter';

@Component({
  selector: 'app-product-list-ui',
  templateUrl: './product-list.presentation.html',
  styleUrls: ['./product-list.presentation.scss']
})
export class ProductListPresentation implements OnInit {

  // Get project by id getter setter
  @Input() public set productDetails(value: Product[]) {
    if (value) {
      this._getProducts = value;
      this.filterList = this.productDetails.map((data: Product) => data.name);
      this.filteredProductList = value;
      this.filteredProductList = this.filteredProductList.length > 0 ? this.filteredProductList : value;
      this.totalRecords = this.filteredProductList.length;
    }
  }

  public get productDetails(): Product[] {
    return this._getProducts;
  }

  // Products dtail store
  private _getProducts: Product[];
  // For storing size of page
  public pageSize: number;
  // For storing total records
  public totalRecords: number;
  // For storing current page number
  public currentPage: number;
  // list after filter
  public filteredProductList: Product[];
  // search string
  public filterQuery: string;
  // suggetion list
  public filterList: string[];
  // filter filed
  public field: string;
  // Stores the name of field as per the model
  public fieldName: string;
  // For reversing the project list
  public reverse: boolean;

  constructor(
    private productListPresenter: ProductListPresenter,
    public overlay: Overlay,
    public viewContainerRef: ViewContainerRef
  ) {
    this.currentPage = 1;
    this.field = 'name';
    this.filterQuery = '';
    this.fieldName = 'id';
    this.reverse = true;
  }

  ngOnInit() {
    console.log('Work');
  }

  /**
   * create function which will be called on add project button
   * @param projectForm projectForm of type model Product
   */
  public loadProductForm(projectForm: Product): void {
    this.productListPresenter.createProjectForm(projectForm);
  }

  /**
   * filter
   */
  public filter(): void {
    this.currentPage = 1;
    this.filteredProductList = this.productListPresenter.filter(this.productDetails, this.field, this.filterQuery);
    this.totalRecords = this.filteredProductList.length;
  }

  /**
   * Number of pages
   */
  public numberOfPages(): number {
    return Math.ceil(this.totalRecords / this.pageSize);
  }

  /**
   * Sets the current page on page changes
   * @param pageNumber Current page number
   */
  public onPageChanges(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  /**
   * Function for sorting project list
   * @param fieldName Contains the name of field to sort with
   */
  public sorting(fieldName: string): void {
    // Gets the name of the field to which sorting should be applied
    this.fieldName = fieldName;
    // Sets reverse  to sort in ascending or descending order
    this.reverse = !this.reverse;
  }

  public edit(productDetails: number): void {
    // Emit productDetails
  }

  public delete(id: number): void {
    
  }

}
