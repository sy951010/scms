import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerActComponent } from './buyer-act.component';

describe('BuyerActComponent', () => {
  let component: BuyerActComponent;
  let fixture: ComponentFixture<BuyerActComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerActComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
