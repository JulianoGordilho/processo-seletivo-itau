import { take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarDataService } from 'src/app/core/factories/car-data.service';
import { SizeModalService } from 'src/app/core/factories/size-modal.service';
import { JurosAplicadosComponent } from '../juros-aplicados/juros-aplicados.component';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  sliderValue!: number;
  total12x!: number;
  total18x!: number;
  total24x!: number;
  total36x!: number;
  total48x!: number;
  total60x!: number;
  totalX = {
    'total12x': 0,
    'total18x':0,
  }
  apperance12x!: boolean;
  apperance18x!: boolean;
  apperance24x!: boolean;
  apperance36x!: boolean;
  apperance48x!: boolean;
  apperance60x!: boolean;
  carData!: any;
  simulationType!: string;
  fullPriceCar!: string;
  minValueSlider!: number;
  maxValueSlider!: number;
  cardClicked!: boolean;
  priceObj = {
    'minValue': 0,
    'fullPriceCar': '',
  };
  constructor(
    private carDataService: CarDataService,
    public dialog: MatDialog,
    private sizeModal: SizeModalService,

  ) { }

  ngOnInit(): void {
    this.carDataService.nextStepInfoCar.subscribe(res => {
      if (res) {
        this.getCarData();
      }
    });
  }
  setMinPriceCar(itemPrice: any): any {
    console.log(itemPrice);
    const fullPriceCar = itemPrice * 0.9;
    const minPriceCar = itemPrice * 0.1;
    this.maxValueSlider = fullPriceCar;
    this.minValueSlider = minPriceCar;
  }
  getCarData(): void{
    this.carData = this.carDataService.carDataSaved;
    console.log( this.carData);
    this.simulationType = this.carDataService.simulationType;
    this.fullPriceCar = this.carDataService.fullPriceCar;
    if (this.carDataService.simulationType === 'veiculo') {
      console.log(this.carData);
      const converTextToNumber = parseFloat(this.carData.preco.replace('R$ ', '').replace(/\./gi, '').replace(/\,/gi, '.'));
      this.carData = this.carDataService.carDataSaved;
      this.setMinPriceCar(converTextToNumber);
      this.transformNumber(this.minValueSlider);
    }else{
      this.carData = this.carDataService.carDataSaved;
      this.setMinPriceCar(this.carDataService.fullPriceCar);
      this.setNumber(this.minValueSlider);
      this.priceObj.minValue = this.minValueSlider;
      this.priceObj.fullPriceCar = this.carDataService.fullPriceCar;
      this.loadingValues(this.priceObj, 'loading');
    }

  }
  public loadingValues(value: any, name: any){
    if (this.simulationType === 'veiculo') {
      console.log(this.simulationType);
      this.transformNumber(value.minValue);
    } else{
      this.setNumber(value.minValue);
    }
  }
  public sliderChangeValue(value: any, name: any): void {
    this.carDataService.priceCarFinancing =  parseFloat(this.priceObj.fullPriceCar) - this.priceObj.minValue;
    if (this.simulationType === 'veiculo') {
      if (value !== undefined) {
        this.transformNumber(value);
        console.log(this.simulationType);
      }
    } else{
      this.setNumber(value);
      console.log(this.simulationType);
    }
  }

  public setNumber(value: number){
    if (value !== undefined) {
      this.total12x = value / 12;
      this.total18x = value / 18;
      this.total24x = value / 24;
      this.total36x = value / 36;
      this.total48x = value / 48;
      this.total60x = value / 60;
    }
  }
  public transformNumber(value: number): any{
    if (value !== undefined) {
      this.total12x = this.setNumberDivision(value, 12);
      this.total18x = this.setNumberDivision(value, 18);
      this.total24x = this.setNumberDivision(value, 24);
      this.total36x = this.setNumberDivision(value, 36);
      this.total48x = this.setNumberDivision(value, 48);
      this.total60x = this.setNumberDivision(value, 60);
    }

  }
  public setNumberDivision(value: number, divisor: number): any {
    return (parseFloat(this.carData.preco.replace('R$ ', '').replace(/\./gi, '').replace(/\,/gi, '.')) - value) / divisor;
  }
  public openModal(){
    const dialogRef = this.dialog.open(JurosAplicadosComponent, {
      width: 'calc(100% - 50px)',
      maxWidth: '100vw',
      panelClass: 'container-profile',
    });
    this.sizeModal.setSizeModal(dialogRef);
    dialogRef
    .afterClosed()
    .pipe(take(1))
    .subscribe((result => {
      console.log('dialog was closed')
    }));
  }
  cardSelect(cardCliked: string) {
    this.apperance12x = false;
    this.apperance18x = false;
    this.apperance24x = false;
    this.apperance36x = false;
    this.apperance48x = false;
    this.apperance60x = false;
    switch (cardCliked) {
      case '12x':
        this.apperance12x = true;
        break;
      case '18x':
        this.apperance18x = true;
      break;
      case '24x':
        this.apperance24x = true;
      break;
      case '36x':
        this.apperance36x = true;
        break;
      case '48x':
        this.apperance48x = true;
        break;
      case '60x':
        this.apperance60x = true;
        break;
      default:
        break;
    }
  }
}
export interface ObjPrices {
  minValue: any,
  fullPriceCar: any,
}
