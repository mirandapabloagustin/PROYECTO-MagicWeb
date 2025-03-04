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

  all() : Observable<Deck[]> {
    return this.http.get<Deck[]>(`${this._ev}/decks`);
  }

  create(deck : Deck) : Observable<Deck[]> {
    return this.http.post<Deck[]>(`${this._ev}/decks`, deck);	
  }

  update(deck : Deck) : Observable<Deck> {
    return this.http.put<Deck>(`${this._ev}/decks/${deck.id}`, deck);
  }

  delete(id : string) : Observable<Deck> {
    return this.http.delete<Deck>(`${this._ev}/decks/${id}`);
  }

  getDecks(id : string) : Observable<Deck[]> {
    return this.http.get<Deck[]>(`${this._ev}/decks?userId=${id}`);
  }

  getDeckById(id : string) : Observable<Deck[]> {
    return this.http.get<Deck[]>(`${this._ev}/decks?id=${id}`);
  }


  getDeckParams(params : string) : Observable<Deck[]> {
    return this.http.get<Deck[]>(`${this._ev}/decks?${params}`);
  }


}
