import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap,of } from 'rxjs';
import Fuse from 'fuse.js';


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
  public getCardsApiResponse(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cards?&pageSize=20`)
  }

  public getPagePreviousApiResponse(page:number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cards?page=${page}&pageSize=20`)
  }

  public getPageNextApiResponse(page:number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cards?page=${page}&pageSize=20`)
  }


  public getCardsNameApiResponse(name:string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cards?name=${name}&pageSize=20`)
  }





}

