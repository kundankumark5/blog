import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Callinlazy2Component } from './callinlazy2.component';

describe('Callinlazy2Component', () => {
  let component: Callinlazy2Component;
  let fixture: ComponentFixture<Callinlazy2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Callinlazy2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Callinlazy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
