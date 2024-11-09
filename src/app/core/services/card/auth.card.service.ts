import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CardsService } from './cards.service';
import { Card } from '@app/core/models/card.model';

@Injectable({
  providedIn: 'root',
})
export class AuthApiCardService {
  private _dataRes: Card[] = [];

  constructor(private _service: CardsService) {

  }



  async getCardsRandom() {
    this._dataRes = await lastValueFrom(this._service.getCardsRandom());
    return this._dataRes;
  }



}
