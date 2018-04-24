import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTelephoneComponent } from './add-edit-telephone.component';

describe('AddEditTelephoneComponent', () => {
  let component: AddEditTelephoneComponent;
  let fixture: ComponentFixture<AddEditTelephoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTelephoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
