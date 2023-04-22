import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Callinlazy1Component } from './callinlazy1.component';

describe('Callinlazy1Component', () => {
  let component: Callinlazy1Component;
  let fixture: ComponentFixture<Callinlazy1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Callinlazy1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Callinlazy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
