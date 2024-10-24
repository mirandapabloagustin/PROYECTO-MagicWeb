import { Injectable } from '@angular/core';
import { Cards } from 'scryfall-api';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }

  async getRandomCard() {
    return await Cards.random();
  }

  async get20RandomCards() {
      const cards = [];
      for (let i = 0; i < 20; i++) {
        const card = await Cards.random();
        cards.push(card);
      }
      console.log('cards:', cards);
      return cards;

  }
  
  

  async getCardById(id: string) {
    return await Cards.byId(id);
  }


}
