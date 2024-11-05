import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CardsService } from './cards.service';
import { Card } from '@app/core/models/card.model';

@Injectable({
  providedIn: 'root',
})
export class AuthApiCardService {
  private _dataRes: Card[] = [];
  private _initialHomePage: number = 1;
  private _initialIndex: number = 0;
  private _itemsToShow: number = 10;

  constructor(private service: CardsService) {}

  async preLoad(): Promise<Card[]> {
    this._dataRes = await this.getCardsWithApi();
    return this._dataRes.slice(this._initialIndex, this._itemsToShow);
  }

  async getCardsWithApi(): Promise<Card[]> {
    try {
      const apiResponse = await lastValueFrom(this.service.getCardsService(this._initialHomePage));
      return apiResponse.cards?.filter((card: Card) => card.imageUrl) || [];
    } catch (error) {
      console.error('Error fetching cards:', error);
      return [];
    }
  }
  


}
