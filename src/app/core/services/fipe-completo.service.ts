import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ResponseCompleto } from './../interfaces/response-completo';

@Injectable({
  providedIn: 'root'
})
export class FipeCompletoService {
  private readonly api = 'http://fipeapi.appspot.com/api/1/';

  constructor(
    private http: HttpClient
  ) {}

  get(tipoVeiculo: string, idMarca: number, idModelo: string, idAno: string) {
    return this.http.get<ResponseCompleto>(`${this.api}/${tipoVeiculo}/veiculo/${idMarca}/${idModelo}/${idAno}.json`)
      .pipe(
        tap(console.log));
  }
}
