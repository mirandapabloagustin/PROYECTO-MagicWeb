import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@models/user.model';
import { CommentDeck } from '@models/comment.deck.model';
import { LocalStorageService } from '@services/user/local-storage.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-comment-card',
  standalone: true,
  imports: [],
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.css'
})
export class CommentCardComponent implements OnInit {
  @Input() comment!: CommentDeck;
  @Input() isPrivate!: boolean;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();
  private userLogged!: User;

  constructor(
    private _local: LocalStorageService,
    private _matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.userLogged = this._local.getUserLogged();
  }

  /**
   * @description
   * Metodo para eliminar un comentario.
   * @param {string} id - Id del comentario a eliminar.
   * @returns {void} No retorna ningun valor.
   */
  deleteComment(id : string) {
        const dialogConfirmRef = this._matDialog.open(ConfirmDialogComponent, {
          data: {
            title: 'Eliminar comentario',
            message: '¿Estas seguro que deseas eliminar este comentario?'
          }
        });

        dialogConfirmRef.afterClosed().subscribe(result => {
          if(result) {
            this.delete.emit(id);
          }
        });
  }

  /**
   * @description
   * Metodo que verifica si el comentario es del usuario logueado.
   * @returns {boolean} Retorna true si el comentario es del usuario logueado, de lo contrario retorna false.
   */
  isOwner() : boolean {
    return this.comment.userId === this.userLogged.id;
  }

  /**
   * @description
   * Metodo para obtener los dias que pasaron desde que se creo el comentario.
   * @returns {string} Retorna el numero de dias que han pasado desde que se creo el comentario.
   */
  getDays() : string {
    const today = new Date();
    const created = new Date(this.comment.createdAt);
    const diff = today.getTime() - created.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    switch (days) {
      case 0: return 'Hoy';
      case 1: return 'Ayer';
      default: return `${days} días`;
    }
  }
}
