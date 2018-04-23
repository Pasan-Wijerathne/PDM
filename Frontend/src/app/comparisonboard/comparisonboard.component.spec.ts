import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonboardComponent } from './comparisonboard.component';

describe('ComparisonboardComponent', () => {
  let component: ComparisonboardComponent;
  let fixture: ComponentFixture<ComparisonboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparisonboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
