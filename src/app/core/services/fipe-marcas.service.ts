import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ResponseMarcas } from './../interfaces/response-marcas';

@Injectable({
  providedIn: 'root'
})
export class FipeMarcasService {
  private readonly api = '/api';

  constructor(
    private http: HttpClient,
  ) {}

  get(tipoVeiculo: string) {
    return this.http.get<ResponseMarcas>(`${this.api}/${tipoVeiculo}/marcas.json`)
      .pipe(
        tap(console.log));
  }
}
