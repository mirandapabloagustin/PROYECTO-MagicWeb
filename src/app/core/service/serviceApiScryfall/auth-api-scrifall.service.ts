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
      this.data = await lastValueFrom(this.apiScryfallService.getApiRequestResponseCards());
      return this.data;
    } catch (error) {
      console.log(error);
    }
  }
}
