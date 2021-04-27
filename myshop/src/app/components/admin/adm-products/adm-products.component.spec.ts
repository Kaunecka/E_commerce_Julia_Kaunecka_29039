import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmProductsComponent } from './adm-products.component';

describe('AdmProductsComponent', () => {
  let component: AdmProductsComponent;
  let fixture: ComponentFixture<AdmProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
