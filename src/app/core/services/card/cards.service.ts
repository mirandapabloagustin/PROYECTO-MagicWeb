import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviorment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
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
  getCardsService(page: number): Observable<any> {
    return this.http.get<any>(`${this.ev}/cards?page=${page}`);
  }


}
