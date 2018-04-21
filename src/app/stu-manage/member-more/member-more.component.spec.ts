import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMoreComponent } from './member-more.component';

describe('MemberMoreComponent', () => {
  let component: MemberMoreComponent;
  let fixture: ComponentFixture<MemberMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
