import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadbandinfoComponent } from './broadbandinfo.component';

describe('BroadbandinfoComponent', () => {
  let component: BroadbandinfoComponent;
  let fixture: ComponentFixture<BroadbandinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadbandinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadbandinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
