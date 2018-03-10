import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandErrorComponent } from './hand-error.component';

describe('HandErrorComponent', () => {
  let component: HandErrorComponent;
  let fixture: ComponentFixture<HandErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
