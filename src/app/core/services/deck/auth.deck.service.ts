import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Deck } from '@models/deck.model';
import { LocalStorageService } from '../user/local-storage.service';
import { SnackbarService } from '../snackbar/snackbar.service';
import { FilterDeckDTO } from '@models/dto/filter.deck.dto.model';
import { DeckStatus } from '@enums/status.deck';
import { CopiedDeck } from '@app/core/enums/copied.deck.enum';


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
    let decks: Deck[] = [];
    try {
      const res = await lastValueFrom(this._deckService.all());
      if(res.length > 0){
        res.forEach(deck => {
          if(deck.status === DeckStatus.Public && deck.copied === CopiedDeck.Original){
            decks.push(deck);
          }
        });
        this._listDecks.next(decks);
      }
    } catch (e) {
      this._snackBar.errorServer();
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
      this._snackBar.errorSave();
      console.error(e);
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
      this.clearContentDeck();
      if (res.length > 0) {
        this._listDecks.next(res);
      }
    } catch (e) {
      this._snackBar.errorServer();
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
      this._snackBar.errorServer();
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
   * @returns {Deck[]} Retorna un arreglo de mazos
   */
  getDecksByFilter(filter: FilterDeckDTO): Deck[] {
    console.log('Filter applied:', filter);
    if (this.checkFilterEmpty(filter)) {
      return this._listDecks.getValue();
    }
  
    const decks = this._listDecks.getValue();
  
    return decks.filter(deck => {
      const nameMatch = filter.name ? deck.name?.toLowerCase().includes(filter.name.toLowerCase()) : true;
      const manaMatch = filter.mana ? deck.manaRatio !== null && deck.manaRatio.toString() === filter.mana : true;
      const tagMatch = filter.tag ? deck.tags?.includes(filter.tag) : true;
      const colorsMatch = filter.colors.length > 0 ? filter.colors.every(color => deck.colors?.includes(color)) : true;
  
      return nameMatch && manaMatch && tagMatch && colorsMatch;
    });
  }


  /**
   * @description
   * Metodo para actualizar un mazo.
   * - Llama al metodo update del servicio deckService.
   * @param {deck} deck - Mazo q contiene la informacion del mazo a actualizar.
   * @returns {boolean} - Retorna true si se actualizo el mazo, false si no se pudo actualizar.
   */
  async updateDeck(deck: Deck): Promise<Boolean> {
    try {
      deck = this.checkColorDeck(deck);
      deck.manaRatio = this.avarageMana(deck);
      const res = await lastValueFrom(this._deckService.update(deck));
      if (res){
        return true;
      }
    } catch (e) {
      this._snackBar.errorServer();
      console.error(e);
    }
    return false;
  }

  /**
   * @description
   * Metodo para eliminar un mazo.
   * - Llama al metodo delete del servicio deckService.
   * - Obtiene la respuesta del servicio y si se elimino el mazo lo elimina del arreglo Observable.
   * - Se actualiza el arreglo Observable.
   * @param {string} id - Id del mazo a eliminar.
   * @returns {boolean} - Retorna true si se elimino el mazo, false si no se pudo eliminar.
   */
  async deleteDeck(id: string): Promise<boolean> {
    try {
      const res = await lastValueFrom(this._deckService.delete(id));
      if (res) {
        const decks = this._listDecks.getValue().filter(deck => deck.id !== id);
        this._listDecks.next(decks);
        return true;
      }
    } catch (e) {
      this._snackBar.errorServer();
      console.error(e);
    }
    return false;
  }

  /**
   * @description
   * Metodo para copiar un mazo.
   * - Se establecen los valores del mazo a copiar.
   * - Llama al metodo create del servicio deckService.
   * @param {deck} deck - Mazo q contiene la informacion del mazo a copiar.
   * @param {string} userID - Id del usuario que copia el mazo.
   * @returns {boolean} - Retorna true si se copio el mazo, false si no se pudo copiar.
   */
  async copyDeck(deck: Deck, userID : string): Promise<boolean> {
    try{
      deck.id = uuidv4();
      deck.userId = userID;
      deck.copied = CopiedDeck.Copied;
      deck.status = DeckStatus.Private;
      deck.votesUser = [];
      deck.createdAt = new Date();
      deck.updatedAt = new Date();
      const res = await lastValueFrom(this._deckService.create(deck));
      if(res){
        return true;
      }
    }catch(e){
      this._snackBar.errorServer();
      console.error(e);
    }
    return false;
  }

  /**
   * @description
   * Metodo para agregar un color al mazo.
   * - Recorre los colores del mazo y si no existe lo agrega.
   * @param {any} card - Carta a agregar al mazo.
   * @param {Deck} deck - Mazo al que se le agregara el color.
   * @returns {Deck} - Retorna el mazo con el color agregado.
   */
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

  /**
   * @description
   * Metodo para verificar los colores del mazo.
   * - Recorre las cartas del mazo y si no existe el color lo agrega.
   * @param {Deck} deck - Mazo a verificar los colores.
   * @returns {Deck} - Retorna el mazo con los colores verificados.
   */
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

  /**
   * @description
   * Metodo para calcular el promedio de mana del mazo.
   * - Recorre las cartas del mazo y suma el mana de cada carta.
   * - Calcula el promedio de mana del mazo.
   * @param {Deck} deck - Mazo a calcular el promedio de mana.
   * @returns {number} - Retorna el promedio de mana del mazo.
   */
  avarageMana(deck: Deck): number {
    let sum = 0;
    deck.cards!.forEach(card => {
      sum += card.cmc;
    });
    return Math.round((sum / deck.cards!.length) * 100) / 100;
  }

  /**
   * @description
   * Metodo para formatear un mazo.
   * - Se establecen los valores del mazo.
   * @param {Deck} deck - Mazo a formatear.
   * @returns {Deck} - Retorna el mazo formateado.
   */
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
      copied: CopiedDeck.Original,
      votesUser: [],
      status: DeckStatus.Private,
      cards: [],
    };
    return deckFormated;
  }

  /**
   * @description
   * Metodo para limpiar el arreglo Observable de mazos.
   * - Llama al metodo next del BehaviorSubject y le asigna un arreglo vacio.
   * @returns {void} - No retorna nada.
   */
  private clearContentDeck() {
    this._listDecks.next([]);
  }

  /**
   * @description
   * Metodo para verificar si el filtro esta vacio.
   * - Verifica si el nombre, mana, tag y colores estan vacios.
   * @param {FilterDeckDTO} filter - Filtro a verificar.
   * @returns {boolean} - Retorna true si el filtro esta vacio.
   */
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

  /**
   * @description
   * Metodo para verificar si un mazo existe.
   * - Llama al metodo getDecks del servicio deckService, que recibe el id del usuario como referencia de busqueda.
   * - Obtiene los mazos de la lista de mazos y verifica si el mazo ya existe.
   * @param {string} userID - Id del usuario como referencia de busqueda.
   * @param {Deck} deck - Mazo a verificar si existe.
   * @returns {boolean} - Retorna true si el mazo ya existe.
   */
  async checkDeckExists(userID: string, deck:Deck): Promise<boolean> {
    try {
      const res = await lastValueFrom(this._deckService.getDecks(userID));
      if (res.length > 0) {
        return res.some(deckDB => deckDB.id === deck.id);
      }
    } catch (e) {
      this._snackBar.errorServer();
      console.error(e);
    }
    return false;
  }





}

