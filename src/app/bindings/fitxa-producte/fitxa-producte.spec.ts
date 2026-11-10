import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitxaProducte } from './fitxa-producte';

describe('FitxaProducte', () => {
  let component: FitxaProducte;
  let fixture: ComponentFixture<FitxaProducte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitxaProducte],
    }).compileComponents();

    fixture = TestBed.createComponent(FitxaProducte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
