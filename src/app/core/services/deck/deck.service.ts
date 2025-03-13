import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deck } from '@core/models/deck.model';
import { Observable } from 'rxjs';
import { enviorment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  private _ev = enviorment.apiUser;

  constructor(private http: HttpClient) { }

  /**
   * @description
   * Metodo que obtiene todos los mazos
   * @returns {Observable<Deck[]>} Retorna un observable con un array de mazos.
   */
  all() : Observable<Deck[]> {
    return this.http.get<Deck[]>(`${this._ev}/decks`);
  }

  /**
   * @description
   * Metodo que crea un mazo
   * @param { Deck } deck - Mazo a crear.
   * @returns { Observable<Deck[]> } Retorna un observable con un array de mazos.
   */
  create(deck : Deck) : Observable<Deck[]> {
    return this.http.post<Deck[]>(`${this._ev}/decks`, deck);	
  }

  /**
   * @description
   * Metodo que actualiza un mazo
   * @param { Deck } deck - Mazo a actualizar.
   * @returns { Observable<Deck> } Retorna un observable con un mazo.
   */
  update(deck : Deck) : Observable<Deck> {
    return this.http.put<Deck>(`${this._ev}/decks/${deck.id}`, deck);
  }

  /**
   * @description
   * Metodo que elimina un mazo
   * @param { string } id - Id del mazo a eliminar.
   * @returns { Observable<Deck> } Retorna un observable con un mazo.
   */
  delete(id : string) : Observable<Deck> {
    return this.http.delete<Deck>(`${this._ev}/decks/${id}`);
  }

  /**
   * @description
   * Metodo que obtiene un mazo por su id de usuario
   * @param { string } id - Id del mazo a obtener.
   * @returns { Observable<Deck[]> } Retorna un observable con un array de mazos.
   */
  getDecks(id : string) : Observable<Deck[]> {
    return this.http.get<Deck[]>(`${this._ev}/decks?userId=${id}`);
  }

  /**
   * @description
   * Metodo que obtiene un mazo por su id de baraja
   * @param { string } id - Id del mazo a obtener.
   * @returns { Observable<Deck[]> } Retorna un observable con un array de mazos.
   */
  getDeckById(id : string) : Observable<Deck[]> {
    return this.http.get<Deck[]>(`${this._ev}/decks?id=${id}`);
  }

  /**
   * @description
   * Metodo que obtiene un mazo por su id de usuario
   * @param { string } id - Id del mazo a obtener.
   * @returns { Observable<Deck[]> } Retorna un observable con un array de mazos.
   */
  getDeckParams(params : string) : Observable<Deck[]> {
    return this.http.get<Deck[]>(`${this._ev}/decks?${params}`);
  }


}
