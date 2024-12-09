import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Card } from '@app/core/models/card.model';
import { FilterSearchDto } from '@app/core/models/dto/filter.search.dto.model';
import { Observable } from 'rxjs';
import { enviorment } from 'src/enviroments/enviroment';


@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private _ev = enviorment.apiUrl;
  private _typeEndpoint = [
    'cards',
    'sets'
  ];
  constructor(private http: HttpClient) {}


  getCardRandom(): Observable<Card> {
    return this.http.get<any>(`${this._ev}/${this._typeEndpoint}/random?q=q`);
  }

  search(queryParams: string): Observable<any> {
    return this.http.get<any>(`${this._ev}/cards/search?${queryParams}`);
  }




  /*
  getFilteredCards(filters: { set: string, color: string }): Observable<any> {
    let query = `set:${filters.set}`;
    if (filters.color) {
      query += ` color:${filters.color}`;
    }
    const url = `${this.baseUrl}?q=${query}`;
    return this.http.get<any>(url);
  }
  
  */



}
