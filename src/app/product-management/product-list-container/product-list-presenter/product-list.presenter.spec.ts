import { TestBed } from '@angular/core/testing';

import { ProductListPresenter } from './product-list.presenter';

describe('ProductListPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductListPresenter = TestBed.get(ProductListPresenter);
    expect(service).toBeTruthy();
  });
});
