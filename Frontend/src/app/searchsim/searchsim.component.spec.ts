import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsimComponent } from './searchsim.component';

describe('SearchsimComponent', () => {
  let component: SearchsimComponent;
  let fixture: ComponentFixture<SearchsimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchsimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchsimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
