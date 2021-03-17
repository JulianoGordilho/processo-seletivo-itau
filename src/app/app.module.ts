import { FormsModule } from '@angular/forms';
import { SimulacaoRoutingModule } from './components/simulacao/simulacao-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
// import { InfosCarFinancingComponent } from './components/infos-car-financing/infos-car-financing.component';
import { MatSelectModule } from '@angular/material/select';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JurosAplicadosComponent } from './components/juros-aplicados/juros-aplicados.component';


@NgModule({
  declarations: [
    AppComponent,
    JurosAplicadosComponent,
    // InfosCarFinancingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SimulacaoRoutingModule,
    MatCardModule,
    MatStepperModule,
    MatIconModule,
    MatSelectModule,
    CurrencyMaskModule,
    HttpClientModule,
    CurrencyMaskModule,
    FormsModule,
  ],
  exports:[
    // InfosCarFinancingComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
