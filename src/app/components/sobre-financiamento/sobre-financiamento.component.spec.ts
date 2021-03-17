import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreFinanciamentoComponent } from './sobre-financiamento.component';

describe('SobreFinanciamentoComponent', () => {
  let component: SobreFinanciamentoComponent;
  let fixture: ComponentFixture<SobreFinanciamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreFinanciamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreFinanciamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
