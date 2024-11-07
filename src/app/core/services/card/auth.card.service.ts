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



  


}
