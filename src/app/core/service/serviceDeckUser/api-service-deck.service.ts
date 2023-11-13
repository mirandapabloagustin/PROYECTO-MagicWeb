import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeckCard } from '../../Models';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceDeckService {

  private url  = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  //@param deckCard: string
  //@return Observable<boolean> indica si se ha creado el deck
  public createDeckUser(deckCard: DeckCard): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}/decks`, deckCard)
  }

  //@param idUser: string
  //@return Observable<DeckCard[]> retorna un array de DeckCard que contiene todos los decks del usuario
  public getDecksUser(idUser: string): Observable<DeckCard[]> {
    return this.http.get<DeckCard[]>(`${this.url}/decks?userIdDeck=${idUser}`)
  }

  //@param nameDeck: string
  //@return Observable<DeckCard> retorna un DeckCard que contiene el deck del usuario
  public deleteDeckUser(nameDeck: string): Observable<DeckCard> {
    return this.http.delete<DeckCard>(`${this.url}/decks?nameDeck=${nameDeck}`)
  }

  //@param deckCard: DeckCard
  //@return Observable<boolean> retorna si se ha actualizado el deck
  public updateDeckUser(deckCard: DeckCard): Observable<boolean> {
    return this.http.put<boolean>(`${this.url}/decks/${deckCard.id}`, deckCard)
  }

  //@param idUser: string
  //@return Observable<DeckCard[]> retorna un array de DeckCard que contiene todos los decks del usuario
  public getIdNewDeckUser(): Observable<DeckCard[]> {
    return this.http.get<DeckCard[]>(`${this.url}/decks?id`)
  }

}
