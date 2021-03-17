import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { CarDataService } from 'src/app/core/factories/car-data.service';
import { FipeAnoService } from 'src/app/core/services/fipe-ano.service';
import { FipeCompletoService } from 'src/app/core/services/fipe-completo.service';
import { FipeMarcasService } from 'src/app/core/services/fipe-marcas.service';
import { FipeModeloVersaoService } from 'src/app/core/services/fipe-modelo-versao.service';

@Component({
  selector: 'app-sobre-financiamento',
  templateUrl: './sobre-financiamento.component.html',
  styleUrls: ['./sobre-financiamento.component.scss']
})
export class SobreFinanciamentoComponent implements OnInit {
  vehicleType!: FormGroup;
  brands!: any[];
  models!: any[];
  years!: any[];
  full!: any[];
  fullPriceCar!: any;
  simulationType!: string;
  vehicleTypeChecked!: string;
  allInfos!: string;

  carInfosReturn = {
    brandId: 1,
    modelId: '',
    yearId: ''
  }
  constructor(
    private formBuilder: FormBuilder,
    private fipeBrandService: FipeMarcasService,
    private fipeModelService: FipeModeloVersaoService,
    private fipeYearService: FipeAnoService,
    private fipeFullService: FipeCompletoService,
    private carDataService: CarDataService,
    ) {

    this.vehicleType = formBuilder.group({
      simulationType: [ '', [Validators.required]],
      fullPriceCar: ['', Validators.required],
      typeVehicle: [ '', [Validators.required]],
      nameCar: ['', [Validators.required]],
      version: ['', [Validators.required]],
      year: ['', [Validators.required]]
    });
   }
  ngOnInit(): void {
    this.valueCarFull();
  }
  private getBrands(brands: string): void {
    this.fipeBrandService.get(brands).toPromise().then( res => {
      this.brands = res;
    });
  }
  private getModels(brands: string, id: number): void {
    this.fipeModelService.get(brands, id).toPromise().then( res => {
      this.models = res;
    });
  }
  private getYearCar(brands: string, id: number, idModel: string): void {
    this.fipeYearService.get(brands, id, idModel).toPromise().then( res => {
      this.years = res;
    });
  }
  private getFullService(brands: string, id: number, idModel: string, idYear: string): void {
    this.fipeFullService.get(brands, id, idModel, idYear).toPromise().then( res => {
      this.full = res;
      this.carDataService.createCarData(res);
    });

  }
  public changeSimulationType(): void {
    this.carDataService.simulationType = this.vehicleType.controls.simulationType.value;
    this.simulationType = this.vehicleType.controls.simulationType.value;
  }
  public changeTypeVehicle(event: any): void {
    this.vehicleTypeChecked = this.vehicleType.controls.typeVehicle.value;
    this.getBrands(this.vehicleTypeChecked);
  }
  public selectBrandRetrunModel(event: any): void{
    this.carInfosReturn.brandId = event.id;
    this.getModels(this.vehicleTypeChecked, event.id);
  }
  public selectModelReturnYear(event: any): void{
    this.carInfosReturn.yearId = event.id;
    this.getYearCar(this.vehicleTypeChecked, this.carInfosReturn.brandId, event.id);
  }
  public selectYearReturnFull(event: any): void{
    this.allInfos = event.id;
    this.getFullService(this.vehicleTypeChecked, this.carInfosReturn.brandId, this.carInfosReturn.yearId, event.key);
    this.allInputsFilled();
  }
  inputValueChanged(value: string): void {
    if (value) {
      this.carDataService.allInfosCarsFilled.emit(true);
      console.log(value)
      this.carDataService.priceCarFinancing = value;
    }
  }
  allInputsFilled(): void {
    if (this.vehicleTypeChecked && this.carInfosReturn.brandId && this.carInfosReturn.yearId) {
      this.carDataService.allInfosCarsFilled.emit(true);
    }
  }
  valueCarFull(): any{
    this.carDataService.nextStepInfoCar.subscribe(res =>{
      this.carDataService.fullPriceCar = this.fullPriceCar;
    });
  }
}
