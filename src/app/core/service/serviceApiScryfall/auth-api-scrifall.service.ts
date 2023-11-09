import { Injectable } from '@angular/core';
import { ApiScryfallService } from './api-scryfall.service';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiScrifallService {
  data: any[] = [];
  constructor(
    private apiScryfallService: ApiScryfallService
  ) { }

  params: any = {
    manaCost: '',
    cmc: '',
    colors: '',
    colorIdentity: '',
    type: '',
    supertypes: '',
    types: '',
    subtypes: '',
    rarity: '',
    pageSide:'20',
    originalType: ''
  }


  public async getCardsApi(): Promise<any> {
    try {
      this.data.push(await lastValueFrom(this.apiScryfallService.getCardsApiResponse()));
      return this.data[0].cards;
    } catch (error) {
      console.log(error);
    }
  }

  public async getPageNextApi(page: number): Promise<any> {
    this.data = [];
    try {
      this.data.push(await lastValueFrom(this.apiScryfallService.getPageNextApiResponse(page)));
      return this.data[0].cards;
    } catch (error) {
      console.log(error);
      this.data.push(await lastValueFrom(this.apiScryfallService.getPageNextApiResponse(page--)));
      return this.data[0].cards;
    }
  }

  public async getCardByNameApi(name: string): Promise<any> {
    this.data = [];
    try {
      this.data.push(await lastValueFrom(this.apiScryfallService.getCardsNameApiResponse(name)));
      return this.data[0].cards;
    } catch (error) {
      console.log(error);
    }
  }



}
