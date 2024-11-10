import { Injectable } from '@angular/core';
import { BehaviorSubject, expand, lastValueFrom, of, takeWhile, tap } from 'rxjs';
import { CardsService } from './cards.service';
import { Card } from '@app/core/models/card.model';
import { Cards } from 'scryfall-api';

@Injectable({
  providedIn: 'root',
})
export class AuthApiCardService {
  private _dataRes: any[] = [];
  // Creo un BehaviorSubject para poder emitir los cambios de la lista de cartas
  private _cardSubject = new BehaviorSubject<any[]>([]);
  // Observable para poder subscribirnos a los cambios de la lista de cartas
  public cards$ = this._cardSubject.asObservable();

  constructor(private _service: CardsService) {

  }




  async getCardsRandoms(): Promise<void> {
    this._dataRes = [];
    for (let i = 0; i < 2; i++) {
      try {
        const card = await Cards.random();
        this._dataRes.push(card);
     
      } catch (error) {
        console.error('Error al obtener las cartas aleatorias:', error);
      }
    }
    this._cardSubject.next(this._dataRes);

  }

  





}
  
