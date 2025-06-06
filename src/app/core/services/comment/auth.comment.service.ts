import { Injectable } from '@angular/core';
import { CommentService } from './comment.service';
import { SnackbarService } from '../snackbar/snackbar.service';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { CommentDeck } from '@app/core/models/comment.deck.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AuthCommentService {
  private _listComments = new BehaviorSubject<CommentDeck[]>([]);
  public listComments$ = this._listComments.asObservable();

  constructor(
    private _cService: CommentService,
    private _snackBar: SnackbarService
  ) { }

  /**
   * @description
   * Metodo que obtiene todos los comentarios
   * - Llama al metodo all() del servicio de comentarios.
   * - Si la respuesta es correcta, se asigna la respuesta al BehaviorSubject listComments.
   * @returns {void} No retorna ningun valor.
   */
  async getAllComments() {
    let comments: CommentDeck[] = [];
    try {
      const res = await lastValueFrom(this._cService.all());
      if(res.length > 0) {
        comments = res;
        this._listComments.next(comments);
      }
    } catch (error) {
      this._snackBar.errorServer();
    }
  }

  /**
   * @description
   * Metodo que crea un comentario
   * - Llama al metodo create() del servicio de comentarios.
   * - Si la respuesta es correcta, se asigna el comentario al BehaviorSubject listComments.
   * @param {CommentDeck} comment - Comentario a crear.
   * @returns {void} No retorna ningun valor.
   */
  async createComment(comment: CommentDeck): Promise<boolean> {
    try {
      comment.id = uuidv4();
      const res = await lastValueFrom(this._cService.create(comment))
      if(res) {
        this._listComments.next([...this._listComments.getValue(), res[0]]);
        return true;
      }
    } catch (error) {
      this._snackBar.errorServer();
    }
    return false;
  }

  /**
   * @description
   * Metodo que actualiza un comentario
   * - Llama al metodo update() del servicio de comentarios.
   * - Si la respuesta es correcta, se asigna el comentario al BehaviorSubject listComments.
   * @param {CommentDeck} comment - Comentario a actualizar.
   * @returns {void} No retorna ningun valor.
   */
  async updateComment(comment: CommentDeck) {
    try {
      const res = await lastValueFrom(this._cService.update(comment));
      if(res.length > 0) {
        const comments = this._listComments.getValue();
        const index = comments.findIndex(c => c.id === comment.id);
        comments[index] = res[0];
        this._listComments.next(comments);
      }
    } catch (error) {
      this._snackBar.errorServer();
    }
  }

  /**
   * @description
   * Metodo que elimina un comentario
   * - Llama al metodo delete() del servicio de comentarios.
   * - Si la respuesta es correcta, se asigna el comentario al BehaviorSubject listComments.
   * @param {string} id - Id del comentario a eliminar.
   * @returns {void} No retorna ningun valor.
   */
  async deleteComment(id: string): Promise<boolean> {
    try {
      const res = await lastValueFrom(this._cService.delete(id));
      if(res.id) {

        return true;
      }
    } catch (error) {
      this._snackBar.errorServer();
    }
    return false;
  }

  /**
   * @description
   * Metodo que elimina todos los comentarios de un deck
   * - Llama al metodo getCommentByDeckId() del servicio de comentarios.
   * - Si la respuesta es correcta, se eliminan los comentarios.
   * @param {string} deckID - Id del deck.
   * @returns {void} No retorna ningun valor.
   */
  async deleteAllCommentsByDeckID(deckID: string) {
    try {
      const res = await lastValueFrom(this._cService.getCommentByDeckId(deckID));
      if(res.length > 0) {
        res.forEach(async (comment) => {
          await this.deleteComment(comment.id);
        });
      }
    } catch (error) {
      this._snackBar.errorServer();
    }
  }

  /**
   * @description
   * Metodo que obtiene los comentarios de un usuario
   * - Llama al metodo getCommentsByUserId() del servicio de comentarios.
   * - Si la respuesta es correcta, se asigna la respuesta al BehaviorSubject listComments.
   * @param {string} id - Id del usuario.
   * @returns {void} No retorna ningun valor.
   */
  async getCommentsByUserId(id: string) {
    let comments: CommentDeck[] = [];
    try {
      const res = await lastValueFrom(this._cService.getCommentsByUserId(id));
      if(res.length > 0) {
        this._listComments.next(comments);
      }
    } catch (error) {
      this._snackBar.errorServer();
    }
  }

  /**
   * @description
   * Metodo que obtiene los comentarios de un deck
   * - Llama al metodo getCommentByDeckId() del servicio de comentarios.
   * - Si la respuesta es correcta, se asigna la respuesta al BehaviorSubject listComments.
   * @param {string} id - Id del deck.
   * @returns {void} No retorna ningun valor.
   */
  async getCommentsByDeckId(id: string) {
    let comments: CommentDeck[] = [];
    try {
      const res = await lastValueFrom(this._cService.getCommentByDeckId(id));
      if(res.length > 0) {
        comments = res;
        this._listComments.next(comments);
      }
    } catch (error) {
      this._snackBar.errorServer();
    }
  }

  /**
   * @description
   * Metodo que obtiene los comentarios de la lista BehaviorSubject listComments.
   * @returns { CommentDeck[] } Retorna la lista de comentarios.
   */
  getComments() {
    return this._listComments.getValue();
  }


}
