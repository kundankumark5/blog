import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildArrCompComponent } from './child-arr-comp.component';

describe('ChildArrCompComponent', () => {
  let component: ChildArrCompComponent;
  let fixture: ComponentFixture<ChildArrCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildArrCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildArrCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
