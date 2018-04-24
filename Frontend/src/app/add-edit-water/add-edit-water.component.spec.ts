import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditWaterComponent } from './add-edit-water.component';

describe('AddEditWaterComponent', () => {
  let component: AddEditWaterComponent;
  let fixture: ComponentFixture<AddEditWaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditWaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
