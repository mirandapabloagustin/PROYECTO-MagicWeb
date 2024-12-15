import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  search(queryParams: string): Observable<any> {
    return this.http.get<any>(`${this._ev}/cards/search?${queryParams}`);
  }




}
