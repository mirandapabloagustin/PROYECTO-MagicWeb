import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { enviorment } from 'src/enviroments/enviroment';
import { IApiResponse } from '@app/core/interfaces/api.response.interface';

@Injectable({
  providedIn: 'root'
})

export class CardsService {
  ev = enviorment.apiUrl;
  constructor(private http: HttpClient) {}

  /* 
  Funcion que obtiene las cartas de la api de scryfall, recibe como parametros el numero de pagina y el tamaño de la pagina
  esta funcion retorna un observable de tipo IApiResponse.
  @param page: number
  @param pageSize: number
  @returns Observable<IApiResponse>
  */
  getCards(page:number, pageSize: number): Observable<IApiResponse> {
    const url = `${this.ev}/cards?page=${page}&pageSize=${pageSize}`;
    return this.http.get<any>(url, { observe: 'response' }).pipe(
      map(response => ({
        cards: response.body.cards,
        headers: response.headers
      }))
    );
  }






}
