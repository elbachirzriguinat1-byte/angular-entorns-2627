import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capcalera } from './capcalera';

describe('Capcalera', () => {
  let component: Capcalera;
  let fixture: ComponentFixture<Capcalera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Capcalera],
    }).compileComponents();

    fixture = TestBed.createComponent(Capcalera);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
