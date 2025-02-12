import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';
import { lastValueFrom } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Deck } from '@app/core/models/deck.model';
import { AuthUserService } from '../user/auth-user.service';
import { LocalStorageService } from '../user/local-storage.service';
import { SnackbarService } from '../snackbar/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthDeckService {

  constructor(
    private _deckService: DeckService,
    private _local : LocalStorageService,
    private _snackBar: SnackbarService

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
   async createDeck(deck: Deck): Promise<boolean> {
    try {
      const deckFormarted = this.formatDeck(deck);
      const res = await lastValueFrom(this._deckService.create(deckFormarted));
      if (res) {
        return true;
      }
    } catch (e) {
      this._snackBar.emitSnackbar('Tuvimos inconvenientes para poder crear tu mazo.', 'error','Vuelva a intentarlo mas tarde...');
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

  formatDeck(deck: Deck): Deck {
    const user = this._local.getUserLogged();
    const deckFormated = {
      id: uuidv4(),
      userId: user.id,
      name: deck.name,
      description: deck.description,
      tags: deck.tags,
      imgDeck: 'https://via.placeholder.com/200x150',
      createdAt: deck.createdAt,
      updatedAt: deck.updatedAt,
      manaRatio: 0,
      colors: [],
      votes: 0,
      cards: [],
    };
    return deckFormated;
  }

  
   


}

