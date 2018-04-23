import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecomparisonComponent } from './telecomparison.component';

describe('TelecomparisonComponent', () => {
  let component: TelecomparisonComponent;
  let fixture: ComponentFixture<TelecomparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecomparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecomparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
