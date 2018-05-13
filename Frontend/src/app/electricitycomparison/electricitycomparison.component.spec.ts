import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricitycomparisonComponent } from './electricitycomparison.component';

describe('ElectricitycomparisonComponent', () => {
  let component: ElectricitycomparisonComponent;
  let fixture: ComponentFixture<ElectricitycomparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricitycomparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricitycomparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
