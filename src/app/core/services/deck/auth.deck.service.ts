import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Deck } from '@models/deck.model';
import { LocalStorageService } from '../user/local-storage.service';
import { SnackbarService } from '../snackbar/snackbar.service';
import { FilterDeckDTO } from '@models/dto/filter.deck.dto.model';
import { DeckStatus } from '@enums/status.deck';


@Injectable({
  providedIn: 'root'
})
export class AuthDeckService {
  private _listDecks = new BehaviorSubject<Deck[]>([]);
  public deckList$ = this._listDecks.asObservable();

  constructor(
    private _deckService: DeckService,
    private _local: LocalStorageService,
    private _snackBar: SnackbarService,
  ) {
  }
  /**
   * @description
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
   * @description
   * Metodo para crear un mazo
   * - Primero le asiga una id con la funcion uuidv4
   * - Luego llama al metodo create del servicio deckService pasando el mazo formateado, si se cumple retorna true sino muestra un mensaje de error.
   * - Verifica si se creo el mazo y lo agrega a al arreglo Observable.
   * @param {deck} deck - Mazo q contiene la informacion del mazo a crear 
   * @returns {boolean} Retorna true si se creo el mazo, false si no se pudo crear
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
   * @description
   * Metodo para obtener todos los mazos de un usuario
   * - Llama al metodo getByUserId del servicio deckService que recibe el id del usuario como referencia de busqueda, permite obtener los mazos de un usuario.
   * - Carga carga un arreglo Observable con los mazos obtenidos.
   * @param {string} id Id del usuario como referencia de busqueda.
   * @returns {void} No retorna nada.
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
   * @description
   * Metodo para obtener un mazo por id.
   * - lama al metodo getDeckById del servicio deckService.
   * @param {string} id Id del mazo a buscar.
   * @returns {Deck} Retorna un mazo si lo encuentra sino uno vacio.
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
   * @description
   * Metodo para obtener un mazo por parametros
   * - Primero verifica si el filtro esta vacio
   * - Obtiene los mazos de la lista de mazos
   * - Luego filtra los mazos por nombre, mana, tag y colores
   * @param {FilterDeckDTO} filter Filtro para buscar mazos
   * @returns {Deck} Retorna un mazo
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
   * @description
   * Metodo para actualizar un mazo
   * - Llama al metodo update del servicio deckService
   * @param {deck} deck - Mazo q contiene la informacion del mazo a actualizar
   * @returns {boolean} - Retorna true si se actualizo el mazo, false si no se pudo actualizar
   */
  async updateDeck(deck: Deck): Promise<Boolean> {
    try {
      deck = this.checkColorDeck(deck);
      deck.manaRatio = this.avarageMana(deck);
      const res = await lastValueFrom(this._deckService.update(deck));
      return res ? true : false;
    } catch (e) {
      this._snackBar.errorSave();
      console.error(e);
    }
    return false;
  }

  
  addColorOnDeck(card:any, deck: Deck): Deck {
    if(card.color_identity){
      card.color_identity.forEach((color: string) => {
        if (!deck.colors!.includes(color)) {
          deck.colors!.push(color);
        }
      });
    }
    return deck;
  }

  private checkColorDeck(deck: Deck): Deck {
    deck.colors = [];
    deck.cards!.forEach(card => {
      if(card.color_identity){
        card.color_identity.forEach((color: string) => {
          if (!deck.colors!.includes(color)) {
            deck.colors!.push(color);
          }
        });
      }
    });
    return deck;
  }

 


  avarageMana(deck: Deck): number {
    let sum = 0;
    deck.cards!.forEach(card => {
      sum += card.cmc;
    });
    return Math.round((sum / deck.cards!.length) * 100) / 100;
  }

  private formatDeck(deck: Deck): Deck {
    const user = this._local.getUserLogged();
    const deckFormated = {
      id: uuidv4(),
      userId: user.id,
      creator: user.nick,
      name: deck.name,
      description: deck.description,
      tags: deck.tags,
      imgDeck: 'https://cards.scryfall.io/art_crop/front/f/e/feddbdc6-0757-43cb-bb41-dc83c6cf42ea.jpg?1627709701',
      createdAt: deck.createdAt,
      updatedAt: deck.updatedAt,
      manaRatio: 0,
      colors: [],
      votes: 0,
      status: DeckStatus.Private,
      cards: [],
    };
    return deckFormated;
  }

  private clearContentDeck() {
    this._listDecks.next([]);
  }

  private checkFilterEmpty(filter: FilterDeckDTO): boolean {
    if (filter.name === '' && filter.mana === '' && filter.tag === '' && filter.colors.length === 0) {
      return true;
    }
    return false;
  }


  /**
   * @description
   * Metodo para validar si el nombre del mazo ya existe.
   * - Llama al metodo getDecksUserId, que recibe el id del usuario como referencia de busqueda.
   * - Obtiene los mazos de la lista de mazos y verifica si el nombre ya existe.
   * @param {string} name - Nombre del mazo a validar
   * @param {string} id - Id del usuario como referencia de busqueda
   * @returns {boolean} - Retorna un true si el nombre ya existe
   */
  checkNameExists(name: string,id:string): boolean {
    try{
      this.getDecksUserId(id);
      const decks = this._listDecks.getValue();
      return decks.some(deck => deck.name === name);
    }catch(e){
      console.error(e);
    }
    return false;
  }





}

