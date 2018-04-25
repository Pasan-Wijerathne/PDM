import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricEqComponent } from './electric-eq.component';

describe('ElectricEqComponent', () => {
  let component: ElectricEqComponent;
  let fixture: ComponentFixture<ElectricEqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricEqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricEqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
