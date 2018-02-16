import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlargeImgComponent } from './enlarge-img.component';

describe('EnlargeImgComponent', () => {
  let component: EnlargeImgComponent;
  let fixture: ComponentFixture<EnlargeImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnlargeImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlargeImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
