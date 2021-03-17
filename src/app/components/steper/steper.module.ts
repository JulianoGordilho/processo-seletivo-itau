import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SteperComponent } from './steper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DadosPessoaisModule } from '../dados-pessoais/dados-pessoais.module';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SobreFinanciamentoModule } from '../sobre-financiamento/sobre-financiamento.module';
import { ResultadoModule } from '../resultado/resultado.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SteperComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    DadosPessoaisModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    SobreFinanciamentoModule,
    ResultadoModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SteperModule { }
