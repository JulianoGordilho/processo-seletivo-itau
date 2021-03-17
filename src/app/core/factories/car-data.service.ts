import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarDataService {
  carDataSaved: object = new Object();
  nextStepInfoCar = new EventEmitter();
  allInfosCarsFilled = new EventEmitter();
  priceCarFinancing!: any;
  simulationType!: string;
  fullPriceCar!: string;

  constructor() { }
  public createCarData(carData: object): any{
    this.carDataSaved = carData;
    console.log(carData, this.carDataSaved);
  }
}
