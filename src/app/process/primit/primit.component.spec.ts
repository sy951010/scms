import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimitComponent } from './primit.component';

describe('PrimitComponent', () => {
  let component: PrimitComponent;
  let fixture: ComponentFixture<PrimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
