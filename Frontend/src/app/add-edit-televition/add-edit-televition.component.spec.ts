import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTelevitionComponent } from './add-edit-televition.component';

describe('AddEditTelevitionComponent', () => {
  let component: AddEditTelevitionComponent;
  let fixture: ComponentFixture<AddEditTelevitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTelevitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTelevitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
