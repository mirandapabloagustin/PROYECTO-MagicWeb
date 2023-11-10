import { Injectable, afterNextRender } from '@angular/core';
import { ApiScryfallService } from './api-scryfall.service';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthApiScrifallService {
  data: any[] = [];
  constructor(
    private apiScryfallService: ApiScryfallService,
    private http: HttpClient
  ) { }




  // Api responde con un arreglo de la cantidad de cartas solicitadas y un maximo de 100
  // Selecciona solamente las que tengan imagen
  //@return: retorna un arreglo con la data de la api
  public async getCardsApi(): Promise<any> {
    let apiResponse: any;
    try {
      apiResponse = await lastValueFrom(this.apiScryfallService.getCardsApiResponse());
      apiResponse.cards.forEach((element: any) => {
        if (element?.imageUrl) {
          this.data.push(element);
        }
      });
      return this.data;
    } catch (error) {
      console.log(error);
    }
  }

  // obtienes el header de la api que permite saber la cantidad de cartas que hay en la api
  public async getHeaderApi(): Promise<any> {
    this.apiScryfallService.getHeaderApiResponse("cards").subscribe(response => {
      const totalCount = response.headers.get('total-count');
      console.log('Total Count:', totalCount);
    });
  }

  public async getCardsNameApi(nameCard: string): Promise<any> {
    this.data = [];

    let paramsSeach: any = {
      name: nameCard,
      manaCost: '',
      cmc: '',
      colorIdentity: '',
      types: '',
      subtypes: '',
      rarity: '',
      pageSize: '22',
    };

    let apiResponse: any;
    apiResponse = await lastValueFrom(this.apiScryfallService.getCardsNameApiResponse(paramsSeach));
    apiResponse.cards.forEach((element: any) => {
      if (element?.imageUrl) {
        this.data.push(element);
      }
    });
    return this.data;
  }





  public async getPageNextApi(page: number): Promise<any> {

  }

  public async getCardByNameApi(name: string): Promise<any> {

  }



}
