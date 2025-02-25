import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Deck } from '@app/core/models/deck.model';
import { LocalStorageService } from '../user/local-storage.service';
import { SnackbarService } from '../snackbar/snackbar.service';
import { FilterDeckDTO } from '@app/core/models/dto/filter.deck.dto.model';


@Injectable({
  providedIn: 'root'
})
export class AuthDeckService {
  private _listDecks = new BehaviorSubject<Deck[]>([]);
  public deckList$ = this._listDecks.asObservable();

  constructor(
    private _deckService: DeckService,
    private _local: LocalStorageService,
    private _snackBar: SnackbarService

  ) {
  }
  /**
   * Metodo para obtener todos los mazos
   * Llama al metodo all del servicio deckService
   * @returns {Deck[]} - Retorna un arreglo de mazos
   */
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
      this._snackBar.emitSnackbar('Tuvimos inconvenientes para poder crear tu mazo.', 'error', 'Vuelva a intentarlo mas tarde...');
    }
    return false;
  }

  /**
   * Metodo para obtener todos los mazos de un usuario
   * Llama al metodo getByUserId del servicio deckService
   * @returns {Deck[]} - Retorna un arreglo de mazos
   */
  async getDecksUserId(id: string) {
    try {
      const res = await lastValueFrom(this._deckService.getDecks(id));
      if (res.length > 0) {
        this.clearContentDeck();
        this._listDecks.next(res);
      }
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Metodo para obtener un mazo por id
   * Llama al metodo getDeckById del servicio deckService
   * @param {string} id - Id del mazo a buscar
   * @returns {Deck} - Retorna un mazo
   */
  async getDeckById(id: string): Promise<Deck> {
    let deck!: Deck;
    try {
      const res = await lastValueFrom(this._deckService.getDeckById(id));
      if (res.length > 0) {
        deck = res[0];
      }
    } catch (e) {
      console.error(e);
    }
    return deck;
  }

  /**
   * Metodo para obtener un mazo por parametros
   * Primero verifica si el filtro esta vacio
   * Obtiene los mazos de la lista de mazos
   * Luego filtra los mazos por nombre, mana, tag y colores
   * Retorna los mazos filtrados
   * @param {FilterDeckDTO} filter - Filtro para buscar mazos
   * @returns {Deck} - Retorna un mazo
   */
  getDecksByFilter(filter: FilterDeckDTO): Deck[] {
    
    if (!this.checkFilterEmpty(filter)) {
      const decks = this._listDecks.getValue();

      const filterDecks = decks.filter(deck => {
        const name = deck.name === filter.name;
        const mana = deck.manaRatio !== null && deck.manaRatio.toString() == filter.mana;
        const tag = deck.tags && deck.tags.includes(filter.tag);
        if (filter.colors.length > 0) {
          const colors = filter.colors.every(color => deck.colors?.includes(color));
          return name || mana || tag || colors;
        }
        return name || mana || tag;
      });
      return filterDecks;
    }
    return this._listDecks.getValue();
  }


  /**
   * Metodo para actualizar un mazo
   * Llama al metodo update del servicio deckService
   * @param {deck} deck - Mazo q contiene la informacion del mazo a actualizar
   * @returns {boolean} - Retorna true si se actualizo el mazo, false si no se pudo actualizar
   */
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

  checkFilterEmpty(filter: FilterDeckDTO): boolean {
    if (filter.name === '' && filter.mana === '' && filter.tag === '' && filter.colors.length === 0) {
      return true;
    }
    return false;
  }





}

