import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contat } from './contat';

describe('Contat', () => {
  let component: Contat;
  let fixture: ComponentFixture<Contat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contat],
    }).compileComponents();

    fixture = TestBed.createComponent(Contat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
