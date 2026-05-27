import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaSucre } from './ficha-sucre';

describe('FichaSucre', () => {
  let component: FichaSucre;
  let fixture: ComponentFixture<FichaSucre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaSucre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaSucre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
