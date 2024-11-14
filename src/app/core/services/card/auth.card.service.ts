import { Injectable } from '@angular/core';
import { BehaviorSubject, expand, lastValueFrom, of, takeWhile, tap } from 'rxjs';
import { CardsService } from './cards.service';
import { Cards } from 'scryfall-api';

@Injectable({
  providedIn: 'root',
})
export class AuthApiCardService {
  private _dataRes: any[] = [];
  private _randomCards: any[] =[];

  private _cardSubject = new BehaviorSubject<any[]>([]);

  public cards$ = this._cardSubject.asObservable();

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

  





}
  
