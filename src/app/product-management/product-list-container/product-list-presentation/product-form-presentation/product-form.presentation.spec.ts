import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductFormPresentation } from './product-form.presentation';


describe('ProductFormPresentation', () => {
  let component: ProductFormPresentation;
  let fixture: ComponentFixture<ProductFormPresentation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFormPresentation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormPresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
