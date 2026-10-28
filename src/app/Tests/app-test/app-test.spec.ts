import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTest } from './app-test';

describe('AppTest', () => {
  let component: AppTest;
  let fixture: ComponentFixture<AppTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTest],
    }).compileComponents();

    fixture = TestBed.createComponent(AppTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
