import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiScryfallService {

  url: string = 'https://api.scryfall.com';

  constructor(
    private http: HttpClient
  ) { }

    // Api responde con una matriz de 75 cartas aleatorias
    // Trae un objeto llamado identifier  que contiene 
    // un id único para cada carta
  public getApiRequestCardsRandom(): Observable<any> {
    return this.http.get<any>(`${this.url}/cards/random`)
  }

  public getApiRequestSearchCards(searchText: string,typeOrder:string): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/cards/search?q=${searchText}&order=${typeOrder}&as=grid&extras=true&unique=cards`)
  }



}
