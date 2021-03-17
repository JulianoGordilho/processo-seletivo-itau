import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JurosAplicadosComponent } from './juros-aplicados.component';

describe('JurosAplicadosComponent', () => {
  let component: JurosAplicadosComponent;
  let fixture: ComponentFixture<JurosAplicadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JurosAplicadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JurosAplicadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
