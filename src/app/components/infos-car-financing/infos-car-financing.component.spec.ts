import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosCarFinancingComponent } from './infos-car-financing.component';

describe('InfosCarFinancingComponent', () => {
  let component: InfosCarFinancingComponent;
  let fixture: ComponentFixture<InfosCarFinancingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosCarFinancingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosCarFinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
