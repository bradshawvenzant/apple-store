import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNavIconsComponent } from './product-nav-icons.component';

describe('ProductNavIconsComponent', () => {
  let component: ProductNavIconsComponent;
  let fixture: ComponentFixture<ProductNavIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductNavIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNavIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
