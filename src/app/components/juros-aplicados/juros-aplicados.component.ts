import { SizeModalService } from 'src/app/core/factories/size-modal.service';
import { Component, OnInit } from '@angular/core';
import { InfosCarFinancingComponent } from '../infos-car-financing/infos-car-financing.component';

@Component({
  selector: 'app-juros-aplicados',
  templateUrl: './juros-aplicados.component.html',
  styleUrls: ['./juros-aplicados.component.scss']
})
export class JurosAplicadosComponent implements OnInit {

  constructor(
    private modalOpeningClose: SizeModalService,
    ) { }

  ngOnInit(): void {
  }
  closeInfosCarToFinancing(): any {
    this.modalOpeningClose.modalOpening.close(InfosCarFinancingComponent);
  }
}
