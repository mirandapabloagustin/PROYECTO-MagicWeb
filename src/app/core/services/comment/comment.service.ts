import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviorment } from '@env/enviroment';
import { CommentDeck } from '@app/core/models/comment.deck.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private _ev = enviorment.apiUser;

  constructor(
    private http: HttpClient
  ) { }

  all():Observable<CommentDeck[]> {
    return this.http.get<CommentDeck[]>(`${this._ev}/comments`);
  }

  create(comment: CommentDeck): Observable<CommentDeck[]> {
    return this.http.post<CommentDeck[]>(`${this._ev}/comments`, comment);
  }

  update(comment: CommentDeck): Observable<CommentDeck[]> {
    return this.http.put<CommentDeck[]>(`${this._ev}/comments/${comment.id}`, comment);
  }

  delete(id: string): Observable<CommentDeck> {
    return this.http.delete<CommentDeck>(`${this._ev}/comments/${id}`);
  }

  getCommentsByUserId(id: string): Observable<CommentDeck[]> {
    return this.http.get<CommentDeck[]>(`${this._ev}/comments?userId=${id}`);
  }

  getCommentByDeckId(id: string): Observable<CommentDeck[]> {
    return this.http.get<CommentDeck[]>(`${this._ev}/comments?deckId=${id}`);
  }





}
