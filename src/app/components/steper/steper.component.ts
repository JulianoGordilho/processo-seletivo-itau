import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CarDataService } from 'src/app/core/factories/car-data.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { SizeModalService } from 'src/app/core/factories/size-modal.service';
import { take } from 'rxjs/operators';

import { InfosCarFinancingComponent } from '../infos-car-financing/infos-car-financing.component';
import { DadosPessoaisService } from 'src/app/shared/dados-pessoais.service';
@Component({
  selector: 'app-steper',
  templateUrl: './steper.component.html',
  styleUrls: ['./steper.component.scss']
})
export class SteperComponent implements OnInit {
  smallScreen: boolean = false;
  steppeer: any;
  buttonIsReady!: boolean;
  buttonInfosCarsReady!: boolean;
  isOptional!: FormGroup;
  isOptional2!: FormGroup;
  stepperTrue!: string;
  stepperTrue2!: string;
  // isOptional = new FormControl('', [
  //   Validators.required,
  // ]);
  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private sizeModal: SizeModalService,
    private personalData: DadosPessoaisService,
    private carDataService: CarDataService,
    private formBuilder: FormBuilder,


  ) {
  breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
    ]).subscribe(result => {
      this.smallScreen = result.matches;
  });
  }
  ngOnInit(): void{
    this.personalData.allInputsFilled.subscribe( res => {
      this.buttonIsReady = res;
    });
    this.carDataService.allInfosCarsFilled.subscribe(res => {
      console.log(res);
      this.buttonInfosCarsReady = res;
    });
    this.disableStepper();
    this.personalData.allInputsFilled.subscribe(res =>{
      this.stepperTrue = '.';
    });
    this.carDataService.allInfosCarsFilled.subscribe(res =>{
      this.stepperTrue2 = '.';
    });
  }
  disableStepper(): void{
    this.isOptional = this.formBuilder.group({
      stepper: ['', [Validators.required]]
    });
    this.isOptional2 = this.formBuilder.group({
      stepper: ['', [Validators.required]]
    });
  }
  nextPage(clicked: boolean): any {
    this.personalData.nextStepClicked.emit(clicked);
  }
  nextPageResult(clicked: boolean): any {
    this.carDataService.nextStepInfoCar.emit(clicked);
   }
  openInFullScreenInfosCarFinancing(): void {
    const dialogRef = this.dialog.open(InfosCarFinancingComponent, {
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
}
