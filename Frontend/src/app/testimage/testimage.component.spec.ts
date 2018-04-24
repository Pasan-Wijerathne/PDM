import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimageComponent } from './testimage.component';

describe('TestimageComponent', () => {
  let component: TestimageComponent;
  let fixture: ComponentFixture<TestimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
