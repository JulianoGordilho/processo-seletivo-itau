import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ResponseAno } from './../interfaces/response-ano';

@Injectable({
  providedIn: 'root'
})
export class FipeAnoService {
  private readonly api = 'http://fipeapi.appspot.com/api/1/';

  constructor(
    private http: HttpClient
  ) {}

  get(tipoVeiculo: string, idMarca: number, idModelo: string) {
    return this.http.get<ResponseAno>(`${this.api}/${tipoVeiculo}/veiculo/${idMarca}/${idModelo}.json`)
      .pipe(
        tap(console.log));
  }
}
