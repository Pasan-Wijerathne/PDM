import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherbillsComponent } from './otherbills.component';

describe('OtherbillsComponent', () => {
  let component: OtherbillsComponent;
  let fixture: ComponentFixture<OtherbillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherbillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherbillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
