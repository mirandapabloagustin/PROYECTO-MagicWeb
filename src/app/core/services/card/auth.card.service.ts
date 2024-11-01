import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { CardsService } from './cards.service';
import { Card } from '@app/core/models/card.model';
import { IApiResponse } from '@app/core/interfaces/api.response.interface';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthApiCardService {
  data: Card[] = [];

  constructor(
    private service: CardsService
  ) { }



  async getCardsData(page: number, pageSize: number): Promise<IApiResponse> {
    let response: IApiResponse = {
      cards: [],
      headers: new HttpHeaders()
    };
    try {
      const res = await lastValueFrom(this.service.getCards(page, pageSize));
      res.cards.forEach((card: any) => {
        if(!card.imageUrl){
          card.imageUrl = 'no_img_card.png';
        }
      });
      response = res;
    } catch (error) {
      console.error('Error al obtener los datos de las cartas:', error);
      response.headers = response.headers.append('error', 'Error fetching data');
    }
    return response;
  }
  


}