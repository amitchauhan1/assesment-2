import { Injectable, Injector, ViewContainerRef } from '@angular/core';
import { Product } from '../../product.model';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ProductFormPresentation } from '../product-list-presentation/product-form-presentation/product-form.presentation';
import { PRODUCT_DETAILS } from '../../token';


@Injectable()
export class ProductListPresenter {
  // store data for filter
  private obj: object;

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector
  ) { }

  /**
   * to open overlay and pass project data
   * @param productDetails productDetails
   */
  public createProjectForm(productDetails: Product): void {
    this.viewContainerRef.clear();

    let config = new OverlayConfig();

    // To set position of overlay
    config.positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    // Used to close overlay on Backdrop
    config.hasBackdrop = true;

    // Used in creating overlay
    let overlayRef = this.overlay.create(config);

    // Used to close overlay on Backdrop
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
    // Create overlay
    let ref = overlayRef.attach(new ComponentPortal(
      ProductFormPresentation, this.viewContainerRef, this.createInjector(productDetails, overlayRef)));


  }

  /**
   * filter
   * @param productList list of suggestion
   * @param field filter field
   * @param filterQuery filter string
   * @description get field name, list and search string the apply filter
   */
  public filter(productList: Product[], field: string, filterQuery: string): Product[] {
    if (filterQuery === '') {
      this.obj = {};
    } else {
      if (field === 'name') {
        this.obj = { name: filterQuery };
      } else if (field === 'description') {
        this.obj = { description: filterQuery }
      } else if (field === 'price') {
        this.obj = { price: filterQuery }
      }
    }

    const keys = Object.keys(this.obj);
    const filterList = list => {
      let result = keys.map(key => {
        if (list[key]) {
          return String(list[key]).toLowerCase().startsWith(String(this.obj[key]).toLowerCase());
        } else {
          return false;
        }

      });
      result = result.filter(it => it !== undefined);

      return result.reduce((acc: number, cur: any) => {
        // tslint:disable-next-line: no-bitwise
        return acc & cur;
      }, 1);
    };
    return productList.filter(filterList);
  }

  /**
   * createInjector() method
   * @param productDetails productDetails of type ProjectForm
   * @param overlayRef overlayRef which returns PortalInjector
   */
  private createInjector(productDetails: Product, overlayRef: OverlayRef): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(OverlayRef, overlayRef);
    injectorTokens.set(PRODUCT_DETAILS, productDetails);
    return new PortalInjector(this.injector, injectorTokens);
  }
}
