import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';
import { lastValueFrom } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AuthDeckService {

  constructor(
    private _deckService: DeckService
  ) {
   }

   /**
    * Metodo para crear un mazo
    * Primero le asiga una id con la funcion uuidv4
    * Luego llama al metodo create del servicio deckService
    * Verifica si se creo el mazo.
    * @param {deck} deck - Mazo q contiene la informacion del mazo a crear 
    * @returns {boolean} - Retorna true si se creo el mazo, false si no se pudo crear
    */
   async createDeck(deck: any): Promise<boolean> {
    try {
      deck.id = uuidv4();
      const res = await lastValueFrom(this._deckService.create(deck));
      if (res) {
        return true;
      }
    } catch (e) {
      console.error(e);
    }
    return false;
  }

  async updateDeck(deck: any): Promise<boolean> {
    try {
      const res = await lastValueFrom(this._deckService.update(deck));
      if (res) {
        return true;
      }
    } catch (e) {
      console.error(e);
    }
    return false;
  }

   


}

