import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Deck } from '@app/core/models/deck.model';
import { AuthUserService } from '../user/auth-user.service';
import { LocalStorageService } from '../user/local-storage.service';
import { SnackbarService } from '../snackbar/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthDeckService {
  private _listDecks = new BehaviorSubject<Deck[]>([]);
  public deckList$ = this._listDecks.asObservable();

  constructor(
    private _deckService: DeckService,
    private _local : LocalStorageService,
    private _snackBar: SnackbarService

  ) {
   }

   async getAllDecks() {
    try {
      const res = await lastValueFrom(this._deckService.all());
      this._listDecks.next(res);
    } catch (e) {
      console.error(e);
    }
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
        this._listDecks.next([...this._listDecks.getValue(), deckFormarted]);
        return true;
      }
    } catch (e) {
      this._snackBar.emitSnackbar('Tuvimos inconvenientes para poder crear tu mazo.', 'error','Vuelva a intentarlo mas tarde...');
    }
    return false;
  }

  /**
   * Metodo para obtener todos los mazos de un usuario
   * Llama al metodo getByUserId del servicio deckService
   * @returns {Deck[]} - Retorna un arreglo de mazos
   */
  async getDecksId(id: string){
    try {
      const res = await lastValueFrom(this._deckService.getDecks(id));
      if(res.length > 0) {
        this.clearContentDeck();
        this._listDecks.next(res);
      }
    } catch (e) {
      console.error(e);
    }
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
      imgDeck: 'https://cards.scryfall.io/art_crop/front/f/e/feddbdc6-0757-43cb-bb41-dc83c6cf42ea.jpg?1627709701',
      createdAt: deck.createdAt,
      updatedAt: deck.updatedAt,
      manaRatio: 0,
      colors: [],
      votes: 0,
      cards: [],
    };
    return deckFormated;
  }

  private clearContentDeck() {
    this._listDecks.next([]);
  }

  
   


}

