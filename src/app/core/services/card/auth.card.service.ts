import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { CardsService } from './cards.service';
import { Cards } from 'scryfall-api';
import { FilterSearchDto } from '@app/core/models/dto/filter.search.dto.model';

@Injectable({
  providedIn: 'root',
})
export class AuthApiCardService {
  private _randomCards: any[] = [];
  private _base: number = 0;
  private _limit: number = 9;
  private _top: boolean = false;
  private _bottom: boolean = false;
  private _total: number = 0;
  private _nextPageStatus = new BehaviorSubject<boolean>(false);
  public nextPageStatus$ = this._nextPageStatus.asObservable();
  private _prevPageStatus = new BehaviorSubject<boolean>(false);
  public prevPageStatus$ = this._prevPageStatus.asObservable();
  private _cardSubject = new BehaviorSubject<any[]>([]);
  public cards$ = this._cardSubject.asObservable();
  private _iterator = new BehaviorSubject<any[]>([]);
  public iterator$ = this._iterator.asObservable();
  private _listCards = new BehaviorSubject<any[]>([]);
  public listCars$ = this._listCards.asObservable();



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
    let query = 'q=';
    if (filters.q) {
      query += `${filters.q} `;
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
    query += '(game=paper)';
    return query;
  }




  async searchCards(filters: FilterSearchDto): Promise<void> {
    const queryParams = this._generateQueryParams(filters);
    try {
      const res = await lastValueFrom(this._service.search(queryParams));
      this._setListValues(res);
      console.log('cantidad cartas lista', this._listCards.getValue().length);
      if(res.has_more){
        const resMore = await lastValueFrom(this._service.getByUrl(res.next_page));
        this._listCards.next([...this._listCards.getValue(), ...resMore]);
        this._total = this._listCards.getValue().length;
      }
      console.log('cantidad cartas lista', this._listCards.getValue().length,'total', this._total);
    } catch (error) {
      console.error('Error al buscar las cartas:', error);
    }
  }

  private _resetValuesPagination(totalCards: number, base: number, top: boolean, bottom: boolean) {
    this._base = base;
    this._top = top;
    this._bottom = bottom;
    this._total = totalCards;
  }

  private _setListValues(res : any) {
    
    this._listCards.next(res.data);

    this._updateArraySubj(this._iterator, this._listCards.getValue().slice(0,9));
    const nextPrev = this._listCards.getValue().length > 9 ? false : true; 
    this._nextPageStatus.next(nextPrev);
    this._prevPageStatus.next(true);
    this._resetValuesPagination(this._listCards.getValue().length, 0, false, true);
  }

  private _updateArraySubj(list: BehaviorSubject<any>, data: any[]) {
    list.next(data);
  }

  private _cleanList(list: BehaviorSubject<any>) {
    list.next([]);
  }

  next() {
    this._base += this._limit;
    this._cleanList(this._iterator);
    const finalRange = Math.min(this._base + this._limit, this._total);
    if (!this._top) {
      this._iterator.next(this._listCards.getValue().slice(this._base, this._base + this._limit));
      if (finalRange >= this._total) {
        this._top = true;
        this._nextPageStatus.next(true);
      } else {
        this._nextPageStatus.next(false);
        this._prevPageStatus.next(false);
        this._bottom = false;
      }
    }
    console.log('base', this._base, 'card',this._iterator.getValue().length, 'total', this._total );
  }

  prev() {
    this._base = this._base - this._limit;
      if(!this._bottom){
        this._cleanList(this._iterator);
        this._updateArraySubj(this._iterator, this._listCards.getValue().slice(this._base, this._base + this._limit));
        const nextPrev = this._listCards.getValue().length > 9 ? false : true; 
        this._nextPageStatus.next(nextPrev);
        this._top = false;
        if(this._base <= 0){
          this._resetValuesPagination(this._total, 0, false, true);
          this._prevPageStatus.next(true);
        }
      }  
      console.log('base', this._base, 'card',this._iterator.getValue().length, 'total', this._total );
  }





}

