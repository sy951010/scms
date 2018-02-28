import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestMoreComponent } from './contest-more.component';

describe('ContestMoreComponent', () => {
  let component: ContestMoreComponent;
  let fixture: ComponentFixture<ContestMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
