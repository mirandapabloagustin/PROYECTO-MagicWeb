import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CardsService } from './cards.service';
import { Card } from '@app/core/models/card.model';
import { ApiResponse } from '@app/core/models/api.response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthApiCardService {
  uniqueCards: Card[] = [];
  resApi: ApiResponse = new ApiResponse();
  _initialIndex: number = 0;
  _itemsToShow: number = 10;

  constructor(private service: CardsService) { }

  /**
   * Carga las cartas desde la API y filtra las únicas.
   * Retorna hasta 10 cartas únicas.
   *
   * @returns {Promise<Card[]>} Un arreglo de hasta 10 cartas únicas.
   */
  async preLoadCards(): Promise<Card[]> {
    try {
      const res = await this.getCardsWithApi(0);
      this.resApi = res;
      this.uniqueCards = [...this.uniqueCards, ...this.getUniqueCardsWithImage(resApi.cards)];
      
    } catch (error) {
      console.log('Error', error);
      this.uniqueCards = [];
    }
    return this.uniqueCards.slice(this._initialIndex, this._itemsToShow);
  }

  /**
   * Realiza una llamada a la API para obtener las cartas de una página específica.
   *
   * @param {number} page - El número de página a cargar.
   * @returns {Promise<ApiResponse>} La respuesta de la API.
   */
  async getCardsWithApi(page: number): Promise<ApiResponse> {
    let response: ApiResponse = new ApiResponse();
    try {
      response = await lastValueFrom(this.service.getCardsService(page));
    } catch (error) {
      console.log('Error', error);
    }
    return response;
  }

  /**
   * Filtra las cartas para devolver solo aquellas que tienen imágenes y nombres únicos.
   *
   * @param {Card[]} cards - Arreglo de cartas a filtrar.
   * @returns {Card[]} Un arreglo de cartas únicas que contienen imágenes.
   */
  private getUniqueCardsWithImage(cards: Card[]): Card[] {
    const unique = new Set<string>();
    const result: Card[] = [];
    cards.forEach(card => {
      if (card.imageUrl && !unique.has(card.name)) {
        unique.add(card.name);
        result.push(card);
      }
    });
    return result;
  }

  /**
   * Carga 10 cartas adicionales si hay más disponibles.
   * Actualiza el índice para la próxima carga.
   *
   * @returns {Card[]} Un arreglo de hasta 10 cartas adicionales, o un arreglo vacío si no hay más cartas.
   */
  getMoreCards(): Card[] {
    if (this._itemsToShow < this.uniqueCards.length) {
      this._initialIndex = this._itemsToShow;
      this._itemsToShow += 10;
      return this.uniqueCards.slice(this._initialIndex, this._itemsToShow);
    }
    return [];
  }


  nextPages() {
    const link = this.resApi.headers.get('Link');
    console.log('Link: ', link);
  }
}
