import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cards } from 'scryfall-api';
import { enviorment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})



export class CardsService {
  url = enviorment.apiUrl;
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

  async getAllCards() {
    return this.http.get(`${this.url}cards`);
  }






}
