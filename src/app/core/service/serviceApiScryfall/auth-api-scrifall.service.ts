import { Injectable } from '@angular/core';
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
  public async getAllsCardsApi(pageCards : number): Promise<any> {
    this.data = [];
    try {

      let apiResponse = await lastValueFrom(this.apiScryfallService.getCardsApiResponse(pageCards));

      if (apiResponse.cards.length > 0) {
        apiResponse.cards.forEach((element: any) => {
          if (element?.imageUrl) {
            this.data.push(element);
          }
        });
      }

    } catch (error) {
      console.log(error);
    }
    return this.data;
  }



  //@param: nameCard: nombre de la carta a buscar
  //@return: retorna un arreglo con la data de la api segun el nombre de la carta
  public async getCardsWithParamApi(nameCard: string, colorIdentityCards: string,
    typeCard: string, cmcCards: number, numberPage:number): Promise<any> {
    this.data = [];

    let paramsSeach: any = {
      name: nameCard,
      cmc: cmcCards,
      colorIdentity: colorIdentityCards,
      types: typeCard,
      page: numberPage
    };

    let apiResponse: any;
    apiResponse = await lastValueFrom(this.apiScryfallService.getSearchCardsApiResponse(paramsSeach));
    apiResponse.cards.forEach((element: any) => {
      if (element?.imageUrl) {
        this.data.push(element);
      }
    });
    return this.data;
  }



  //@param: identifier: identificador unico de la carta
  //@return: retorna un objeto con la data de la api segun el identificador
  public async getCardByIdentifier(id: string): Promise<any> {
    let data: any;
    try{
      data = await lastValueFrom(this.apiScryfallService.getCardByIdentifier(id));
    }catch(error){
      console.log(error);
    }
    return data.cards[0];
  }

}
