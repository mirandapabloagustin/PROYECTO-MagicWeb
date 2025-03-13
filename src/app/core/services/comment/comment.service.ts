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
  
  /**
   * @description
   * Metodo que obtiene todos los comentarios
   * @returns {Observable<CommentDeck[]>} Retorna un observable con un array de comentarios.
   */
  all():Observable<CommentDeck[]> {
    return this.http.get<CommentDeck[]>(`${this._ev}/comments`);
  }

  /**
   * @description
   * Metodo que crea un comentario
   * @param { CommentDeck } comment - Comentario a crear.
   * @returns { Observable<CommentDeck[]> } Retorna un observable con un array de comentarios.
   */

  create(comment: CommentDeck): Observable<CommentDeck[]> {
    return this.http.post<CommentDeck[]>(`${this._ev}/comments`, comment);
  }

  /**
   * @description
   * Metodo que actualiza un comentario
   * @param { CommentDeck } comment - Comentario a actualizar.
   * @returns { Observable<CommentDeck[]> } Retorna un observable con un array de comentarios.
   */
  update(comment: CommentDeck): Observable<CommentDeck[]> {
    return this.http.put<CommentDeck[]>(`${this._ev}/comments/${comment.id}`, comment);
  }

  /**
   * @description
   * Metodo que elimina un comentario
   * @param { string } id - Id del comentario a eliminar.
   * @returns { Observable<CommentDeck> } Retorna un observable con un comentario.
   */
  delete(id: string): Observable<CommentDeck> {
    return this.http.delete<CommentDeck>(`${this._ev}/comments/${id}`);
  }

  /**
   * @description
   * Metodo que obtiene un comentario por su id de usuario
   * @param { string } id - Id del comentario a obtener.
   * @returns { Observable<CommentDeck> } Retorna un observable con un comentario.
   */
  getCommentsByUserId(id: string): Observable<CommentDeck[]> {
    return this.http.get<CommentDeck[]>(`${this._ev}/comments?userId=${id}`);
  }

  /**
   * @description
   * Metodo que obtiene un comentario por su id de deck
   * @param { string } id - Id del comentario a obtener.
   * @returns { Observable<CommentDeck> } Retorna un observable con un comentario.
   */
  getCommentByDeckId(id: string): Observable<CommentDeck[]> {
    return this.http.get<CommentDeck[]>(`${this._ev}/comments?deckId=${id}`);
  }





}
