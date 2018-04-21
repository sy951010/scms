import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSelectsComponent } from './search-selects.component';

describe('SearchSelectsComponent', () => {
  let component: SearchSelectsComponent;
  let fixture: ComponentFixture<SearchSelectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSelectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSelectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
