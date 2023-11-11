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

  // obtienes el header de la api que permite saber la cantidad de cartas que hay en la api
  public async getHeaderApi(): Promise<any> {
    this.apiScryfallService.getHeaderApiResponse("cards").subscribe(response => {
      const totalCount = response.headers.get('total-count');
      console.log('Total Count:', totalCount);
    });
  }


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

  

  //@param: nameCard: nombre de la carta a buscar
  //@return: retorna un arreglo con la data de la api segun el nombre de la carta
  public async getCardsWithParamApi(nameCard: string, colorIdentityCards: string,
    typeCard:string, cmcCards :number): Promise<any> {
    this.data = [];

    let paramsSeach: any = {
      name: nameCard,
      cmc: cmcCards,
      colorIdentity: colorIdentityCards,
      types: typeCard,
      pageSize: '22',
    };

    console.log(paramsSeach);

    let apiResponse: any;
    apiResponse = await lastValueFrom(this.apiScryfallService.getCardsNameApiResponse(paramsSeach));
    apiResponse.cards.forEach((element: any) => {
      if (element?.imageUrl) {
        this.data.push(element);
      }
    });
    console.log(this.data);
    return this.data;
  }





  public async getPageNextApi(page: number): Promise<any> {

  }

  public async getCardByNameApi(name: string): Promise<any> {

  }



}
