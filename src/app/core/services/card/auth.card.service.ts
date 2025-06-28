import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { CardsService } from './cards.service';
import { Cards } from 'scryfall-api';
import { FilterSearchDto } from '@app/core/models/dto/filter.search.dto.model';
import { SnackbarService } from '../snackbar/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class AuthApiCardService {
  private _randomCards: any[] = [];
  private _base: number = 0;
  private _limit: number = 9;
  private _top: boolean = false;
  private _bottom: boolean = false;
  private _total: number = 0;
  private _nextPageStatus = new BehaviorSubject<boolean>(false);
  public nextPageStatus$ = this._nextPageStatus.asObservable();
  private _prevPageStatus = new BehaviorSubject<boolean>(false);
  public prevPageStatus$ = this._prevPageStatus.asObservable();
  private _cardSubject = new BehaviorSubject<any[]>([]);
  public cards$ = this._cardSubject.asObservable();
  private _iterator = new BehaviorSubject<any[]>([]);
  public iterator$ = this._iterator.asObservable();
  private _listCards = new BehaviorSubject<any[]>([]);
  public listCars$ = this._listCards.asObservable();



  constructor(
    private _service: CardsService,
    private _snackbarService: SnackbarService,
  ) {}



  /**
   * @description
   * Metodo que obtiene las cartas aleatorias.
   * - Obtiene 5 cartas aleatorias.
   * - Actualiza el listado de cartas.
   * @returns {Promise<any>} - Retorna un array con las cartas aleatorias
   */
  async getCardsRandoms(): Promise<any> {
    this._randomCards = [];
    for (let i = 0; i < 5; i++) {
      try {
        const card = await Cards.random();
        this._randomCards.push(card);
      } catch (error) {
        this._snackbarService.errorFoundCards();
      }
    }
    return this._randomCards;
  }

  /**
   * @description
   * Metodo que actualiza el listado de cartas.
   * @param {any[]} Cards - Listado de cartas
   * @returns {void} - No retorna nada
   */
  updateCards(Cards: any[]) {
    this.clearCards();
    this._cardSubject.next(Cards);
  }

  /**
   * @description
   * Metodo que obtiene las cartas.
   * @returns {any[]} - Retorna un array con las cartas
   */
  getCards() {
    return this._cardSubject.getValue();
  }

  /**
   * @description
   * Metodo que limpia el listado de cartas.
   * @returns {void} - No retorna nada
   */

  clearCards() {
    this._cardSubject.next([]);
  }


  /**
   * @description
   * Metodo que prepara los parametros de busqueda.
   * @param {FilterSearchDto} filters - Filtros de busqueda
   * @returns {string} - Retorna un string con los parametros de busqueda
   */
  private _generateQueryParams(filters: FilterSearchDto): string {
    let query = 'q=';
    if (filters.q) {
      query += `${filters.q} `;
    }
    if (filters.color) {
      query += `color:${filters.color} `;
    }
    if (filters.mana) {
      query += `cmc:${filters.mana} `;
    }
    if (filters.type) {
      query += `type:${filters.type} `;
    }
    if (filters.format) {
      query += `format:${filters.format}`;
    }
    query += '(game=paper)';
    return query;
  }



  /**
   * @description
   * Metodo que busca las cartas en la api de scryfall.
   * - Recibe los filtros de busqueda y los parametros de busqueda.
   * - Verifica si existen mas paginas y las obtiene hasta que no hallan mas.
   * - Filtra las cartas que no son de tipo normal, split, flip o transform.
   * - Actualiza el listado de cartas.
   * @param {FilterSearchDto} filters - Filtros de busqueda
   * @returns {void} - No retorna nada
   */

  async searchCards(filters: FilterSearchDto): Promise<void> {
    const queryParams = this._generateQueryParams(filters);
    try {
      const res = await lastValueFrom(this._service.search(queryParams));
      const resFilter = this.cardsFilterWithEspecificLayout(res.data);
      this._setListValues(resFilter);
      if(res.has_more){
        const resMore = await lastValueFrom(this._service.getByUrl(res.next_page));
        this._listCards.next([...this._listCards.getValue(), ...resMore]);
        this._total = this._listCards.getValue().length;
      }
    } catch (error) {
      this._snackbarService.errorFoundCards();
    }
  }

  /**
   * @description
   * Metodo que filtra las cartas que no son de tipo normal, split, flip o transform.
   * @param vector 
   * @returns 
   */
  private cardsFilterWithEspecificLayout(vector : any[]) : any[]{
   return vector.filter((card) => card.layout === 'normal' || card.layout === 'split' || card.layout === 'flip' || card.layout === 'transform');
  }

  /**
   * @description
   * Metodo que resetea los valores de la paginacion.
   * @param {number} totalCards - Total de cartas
   * @param {number} base - Base de la paginacion
   * @param {boolean} top - Top de la paginacion
   * @param {boolean} bottom - Bottom de la paginacion
   * @returns {void} - No retorna nada
   */
  private _resetValuesPagination(totalCards: number, base: number, top: boolean, bottom: boolean) {
    this._base = base;
    this._top = top;
    this._bottom = bottom;
    this._total = totalCards;
  }

  /**
   * @description
   * Metodo que actualiza el listado de cartas.
   * @param { any } res - Listado de cartas
   * @returns {void} - No retorna nada
   */
  private _setListValues(res : any) {
    this._listCards.next(res);
    this._updateArraySubj(this._iterator, this._listCards.getValue().slice(0,9));
    const nextPrev = this._listCards.getValue().length > 9 ? false : true; 
    this._nextPageStatus.next(nextPrev);
    this._prevPageStatus.next(true);
    this._resetValuesPagination(this._listCards.getValue().length, 0, false, true);
  }

  /**
   * @description 
   * Metodo que actualiza el listado de cartas.
   * @param {BehaviorSubject<any>} list - Listado de cartas.
   * @param {any[]} data - Listado de cartas nuevas.
   */
  private _updateArraySubj(list: BehaviorSubject<any>, data: any[]) {
    list.next(data);
  }

  /**
   * @description
   * Metodo que limpia el listado de cartas.
   * @param {BehaviorSubject<any>} list - Listado de cartas.
   */
  private _cleanList(list: BehaviorSubject<any>) {
    list.next([]);
  }

  /**
   * @description
   * Metodo que obtiene las cartas de la siguiente pagina.
   * - Limpia el listado de cartas, actualiza el listado de cartas y verifica si existen mas paginas.
   * @returns {void} - No retorna nada
   */
  next() {
    this._base += this._limit;
    this._cleanList(this._iterator);
    const finalRange = Math.min(this._base + this._limit, this._total);
    if (!this._top) {
      this._iterator.next(this._listCards.getValue().slice(this._base, this._base + this._limit));
      if (finalRange >= this._total) {
        this._top = true;
        this._nextPageStatus.next(true);
      } else {
        this._nextPageStatus.next(false);
        this._prevPageStatus.next(false);
        this._bottom = false;
      }
    }
  }

  /**
   * @description
   * Metodo que obtiene las cartas de la pagina anterior.
   * - Limpia el listado de cartas, actualiza el listado de cartas y verifica si existen mas paginas.
   * @returns {void} - No retorna nada
   */
  prev() {
    this._base = this._base - this._limit;
      if(!this._bottom){
        this._cleanList(this._iterator);
        this._updateArraySubj(this._iterator, this._listCards.getValue().slice(this._base, this._base + this._limit));
        const nextPrev = this._listCards.getValue().length > 9 ? false : true; 
        this._nextPageStatus.next(nextPrev);
        this._top = false;
        if(this._base <= 0){
          this._resetValuesPagination(this._total, 0, false, true);
          this._prevPageStatus.next(true);
        }
      }  
  }





}

