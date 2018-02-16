import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerActComponent } from './seller-act.component';

describe('SellerActComponent', () => {
  let component: SellerActComponent;
  let fixture: ComponentFixture<SellerActComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerActComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
