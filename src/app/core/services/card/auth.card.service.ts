import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, lastValueFrom } from 'rxjs';
import { CardsService } from './cards.service';
import { Cards } from 'scryfall-api';
import { FilterSearchDto } from '@app/core/models/dto/filter.search.dto.model';

@Injectable({
  providedIn: 'root',
})
export class AuthApiCardService {
  private _randomCards: any[] =[];

  private _cardSubject = new BehaviorSubject<any[]>([]);
  public cards$ = this._cardSubject.asObservable();
  http: any;

  constructor(private _service: CardsService) {
  }

  async getCardsRandoms(): Promise<any> {
    this._randomCards = [];
    for (let i = 0; i < 5; i++) {
      try {
        const card = await Cards.random();
        this._randomCards.push(card);
      } catch (error) {
        console.error('Error al obtener las cartas aleatorias:', error);
      }
    }
    return this._randomCards;
  }

  updateCards(Cards: any[]) {
   this.clearCards();
    this._cardSubject.next(Cards);

  }
  
  getCards() {
    return this._cardSubject.getValue();
  }

  clearCards() {
    this._cardSubject.next([]);
  }

  private _generateQueryParams(filters: FilterSearchDto): string {
    let query = '';
    if (filters.q) {
      query += `q=${filters.q} `;
    }
    if (filters.color) {
      query += `color:${filters.color} `;
    }
    if (filters.mana) {
      query += `mana:${filters.mana} `;
    }
    if (filters.type) {
      query += `type:${filters.type} `;
    }
    if (filters.format) {
      query += `format:${filters.format}`;
    }
    return query;
  }


  async searchCards(filters: FilterSearchDto){
    let cards: any;
    try {
      const param = this._generateQueryParams(filters);
      cards = await lastValueFrom(this._service.search(param));
    } catch (error) {
      console.error('Error al buscar cartas:', error);
      cards = [];
    }
    return cards.data;
  }




}
  
