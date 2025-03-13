import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { expand, map, Observable, of, takeWhile } from 'rxjs';
import { enviorment } from 'src/enviroments/enviroment';


@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private _ev = enviorment.apiUrl;
  
  constructor(private http: HttpClient) {}

  /**
   * @description
   * Metodo que obtiene todas las cartas de la api
   * @param {string} queryParams - Parametros de busqueda
   * @returns {Observable<any>} - Retorna un observable con la respuesta de la api
   */
  search(queryParams: string): Observable<any> {
    return this.http.get<any>(`${this._ev}/cards/search?${queryParams}`);
  }

  /**
   * @description
   * Metodo que obtiene cartas por url
   * - Recibe el url de la paginacion de la busqueda, verifica la respuesta si existen mas paginas y las obtiene hasta que no hallan mas.
   * @param {string} url - Url de la api
   * @returns {Observable<any>} - Retorna un observable con la respuesta de la api
   */
  getByUrl(url: string): Observable<any[]> {
    let cards: any[] = [];
    return this.http.get<any>(url).pipe(
      expand((dataResponse) => {
        if (dataResponse && dataResponse.has_more && dataResponse.next_page) {
          return this.http.get<any>(dataResponse.next_page);
        }
        return of(null);
      }),
      takeWhile((dataResponse) => dataResponse !== null),
      map((dataResponse) => {
        if(dataResponse !== null){
          cards.push(...dataResponse.data);
          console.log();
        }
        return cards;
      }
      ));
  }
  



}
