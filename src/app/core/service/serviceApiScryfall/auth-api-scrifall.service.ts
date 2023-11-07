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

  public async getApiRequestResponseCards():Promise<any> {
    try {
      for (let i = 0; i < 40; i++) {
        this.data.push(await lastValueFrom(this.apiScryfallService.getApiRequestCards()));
      }
      console.log(this.data);
      return this.data;
    } catch (error) {
      console.log(error);
    }
  }

  public async getApiRequestResponseCardsSearch():Promise<any> {
    try {
      this.data = await lastValueFrom(this.apiScryfallService.getApiRequestCardsSearch());
      return this.data;
    } catch (error) {
      console.log(error);
    }
  }


}
