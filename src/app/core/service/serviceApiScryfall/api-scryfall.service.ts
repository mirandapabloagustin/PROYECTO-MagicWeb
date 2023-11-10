import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, of } from 'rxjs';
import Fuse from 'fuse.js';
import { Params } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiScryfallService {

  apiUrl: string = 'https://api.magicthegathering.io/v1';

  constructor(
    private http: HttpClient
  ) { }

  
  //@param: recibe un string con la consulta a la api
  // @return: retorna un arreglo con la data de la api HttpHeaderResponse
  public getHeaderApiResponse(queryApi:string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${queryApi}`, { observe: 'response' });
  }

  // Api responde con una matriz de 75 cartas aleatorias
  // Trae un objeto llamado identifier  que contiene 
  // un id único para cada carta
  public getCardsApiResponse(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cards?&pageSize=28`);
  }

  public getPagePreviousApiResponse(page: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cards?page=${page}&pageSize=28`)
  }

  public getPageNextApiResponse(page: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cards?page=${page}&pageSize=20`)
  }


  public getCardsNameApiResponse(queryParams: Params): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cards`,{params: queryParams})
  }





}

