import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazy2compComponent } from './lazy2comp.component';

describe('Lazy2compComponent', () => {
  let component: Lazy2compComponent;
  let fixture: ComponentFixture<Lazy2compComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lazy2compComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lazy2compComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
