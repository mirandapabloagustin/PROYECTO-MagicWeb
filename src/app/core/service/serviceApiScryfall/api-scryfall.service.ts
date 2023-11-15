import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Params } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiScryfallService {

  apiUrl: string = 'https://api.magicthegathering.io/v1';

  constructor(
    private http: HttpClient
  ) { }

  // Api responde con una matriz de 75 cartas aleatorias
  // Trae un objeto llamado identifier  que contiene 
  // un id único para cada carta
  public getCardsApiResponse(pageCards:number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cards?page=${pageCards}`);
  }

  public getSearchCardsApiResponse(queryParams: Params): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cards`,{params: queryParams})
  }

  public getCardByIdentifier(identifier: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cards?id=${identifier}`)
  }
  






}

