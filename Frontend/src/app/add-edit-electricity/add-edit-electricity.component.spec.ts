import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditElectricityComponent } from './add-edit-electricity.component';

describe('AddEditElectricityComponent', () => {
  let component: AddEditElectricityComponent;
  let fixture: ComponentFixture<AddEditElectricityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditElectricityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditElectricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
