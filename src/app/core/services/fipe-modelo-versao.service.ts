import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ResponseModeloVersao } from './../interfaces/response-modelo-versao';

@Injectable({
  providedIn: 'root'
})
export class FipeModeloVersaoService {
  private readonly api = 'http://fipeapi.appspot.com/api/1/';

  constructor(
    private http: HttpClient
  ) {}

  get(tipoVeiculo: string, idMarca: number) {
    return this.http.get<ResponseModeloVersao>(`${this.api}/${tipoVeiculo}/veiculos/${idMarca}.json`)
      .pipe(
        tap(console.log));
  }
}
