import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictEachItemComponent } from './predict-each-item.component';

describe('PredictEachItemComponent', () => {
  let component: PredictEachItemComponent;
  let fixture: ComponentFixture<PredictEachItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictEachItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictEachItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
