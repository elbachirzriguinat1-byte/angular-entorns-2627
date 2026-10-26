import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Botiga } from './botiga';

describe('Botiga', () => {
  let component: Botiga;
  let fixture: ComponentFixture<Botiga>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Botiga],
    }).compileComponents();

    fixture = TestBed.createComponent(Botiga);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
