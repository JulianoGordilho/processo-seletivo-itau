import { DadosPessoaisService } from './../../shared/dados-pessoais.service';
import { Component, OnInit } from '@angular/core';
import { PersonalDataFactoryService } from 'src/app/core/factories/personal-data-factory.service';
import { CarDataService } from 'src/app/core/factories/car-data.service';
import { SizeModalService } from 'src/app/core/factories/size-modal.service';

@Component({
  selector: 'app-infos-car-financing',
  templateUrl: './infos-car-financing.component.html',
  styleUrls: ['./infos-car-financing.component.scss']
})
export class InfosCarFinancingComponent implements OnInit {
  personalDataValues: any;
  carDataValues: any;
  inputIsFilled!: boolean;
  fullPrice!: string;
  simulationTyped!: string;
  constructor(
    private modalOpeningClose: SizeModalService,
    private personalData: DadosPessoaisService,
    private personalDataFactory: PersonalDataFactoryService,
    private carDataService: CarDataService,
  ) { }

  ngOnInit(): void {
    this.carDataValues = {id: 0, };
    if (window.screen.width < 1020) {
      this._dataExecutionPersonalData();
      this._dataExecutionCarData();
      this._changedValue();
    }
    this.personalData.nextStepClicked.subscribe(res => {
      if (res) {
        this._dataExecutionPersonalData();
      }
    });
    this.carDataService.nextStepInfoCar.subscribe(res =>{
      if (res) {
        this._dataExecutionCarData();
        this._changedValue();
      }
    });
  }
  private _dataExecutionPersonalData(): any {
    this.personalDataValues = this.personalDataFactory.personalDataSaved;
    this.inputIsFilled = this.personalData.filledInputs;
  }
  private _changedValue(){
    this.simulationTyped = this.carDataService.simulationType;
    if (this.carDataService.simulationType === 'valor') {
      console.log('valor', this.carDataService.priceCarFinancing);
      this.fullPrice = this.carDataService.priceCarFinancing;

    }

  }
  private _dataExecutionCarData(): any {
    this.carDataValues = this.carDataService.carDataSaved;
  }
  private _transform(value: any, args?: any): any {
    return Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value);
  }
  public closeInfosCarToFinancing(): any {
    this.modalOpeningClose.modalOpening.close(InfosCarFinancingComponent);
  }
}
