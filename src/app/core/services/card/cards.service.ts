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

  search(queryParams: string): Observable<any> {
    return this.http.get<any>(`${this._ev}/cards/search?${queryParams}`);
  }

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
