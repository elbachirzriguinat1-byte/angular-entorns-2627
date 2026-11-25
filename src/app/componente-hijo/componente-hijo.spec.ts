import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteHijo } from './componente-hijo';

describe('ComponenteHijo', () => {
  let component: ComponenteHijo;
  let fixture: ComponentFixture<ComponenteHijo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteHijo],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteHijo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
