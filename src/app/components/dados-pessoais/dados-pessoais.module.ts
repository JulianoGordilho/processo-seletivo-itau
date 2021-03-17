import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosPessoaisComponent } from './dados-pessoais.component';
import { MatIconModule } from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    DadosPessoaisComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    TextMaskModule,
  ],
  exports:[
    DadosPessoaisComponent,
  ]
})
export class DadosPessoaisModule { }
