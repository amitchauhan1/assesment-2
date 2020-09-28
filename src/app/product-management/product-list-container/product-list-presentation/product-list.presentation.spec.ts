import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListPresentation } from './product-list.presentation';

describe('ProductListPresentation', () => {
  let component: ProductListPresentation;
  let fixture: ComponentFixture<ProductListPresentation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListPresentation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListPresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
