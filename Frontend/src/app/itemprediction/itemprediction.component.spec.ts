import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItempredictionComponent } from './itemprediction.component';

describe('ItempredictionComponent', () => {
  let component: ItempredictionComponent;
  let fixture: ComponentFixture<ItempredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItempredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItempredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
