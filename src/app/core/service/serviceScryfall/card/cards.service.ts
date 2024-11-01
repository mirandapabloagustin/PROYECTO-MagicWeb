import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cards } from 'scryfall-api';
import { enviorment } from 'src/enviroments/enviroment';
import { IApiResponse } from '@app/core/interfaces/api.response.interface';

@Injectable({
  providedIn: 'root'
})



export class CardsService {
  ev = enviorment.apiUrl;
  constructor(private http: HttpClient) {}

  

  async getRandomCard() {
    return await Cards.random();
  }

  async get20RandomCards() {
      const cards = [];
      for (let i = 0; i < 10; i++) {
        const card = await Cards.random();
        cards.push(card);
      }
      return cards;
  }

  getCards(page:number, pageSize: number): Observable<any> {
    const url = `${this.ev}/cards?page=${page}&pageSize=${pageSize}`;
    return this.http.get<any>(url, { observe: 'response' }).pipe(
      map(response => ({
        cards: response.body.cards,
        headers: response.headers
      }))
    );
  }






}
