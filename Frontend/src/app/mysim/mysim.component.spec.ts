import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysimComponent } from './mysim.component';

describe('MysimComponent', () => {
  let component: MysimComponent;
  let fixture: ComponentFixture<MysimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
