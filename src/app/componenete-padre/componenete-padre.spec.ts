import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenetePadre } from './componenete-padre';

describe('ComponenetePadre', () => {
  let component: ComponenetePadre;
  let fixture: ComponentFixture<ComponenetePadre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenetePadre],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenetePadre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
