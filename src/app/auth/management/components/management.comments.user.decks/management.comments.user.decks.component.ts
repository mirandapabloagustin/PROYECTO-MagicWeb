import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthCommentService } from '@app/core/services/comment/auth.comment.service';
import { AuthDeckService } from '@app/core/services/deck/auth.deck.service';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';
import { LocalStorageService } from '@app/core/services/user/local-storage.service';
import { ConfirmDialogComponent } from '@app/shared/confirm-dialog/confirm-dialog.component';
import { CommentDeck } from '@models/comment.deck.model';

@Component({
  selector: 'app-management-user',
  standalone: true,
  imports: [],
  templateUrl: './management.comments.user.decks.component.html',
  styleUrl: './management.comments.user.decks.component.css'
})
export class ManagementCommentsUserDecksComponent {
  @Input() userId: string | undefined;
  @Input() commentsLoaded: CommentDeck[] | undefined;

  constructor(
    private _sComments: AuthCommentService,
    private _sDecks: AuthDeckService,
    private _snackbar: SnackbarService,
    private _dialog: MatDialog,
    private _router: Router,
    private _loggedUser: LocalStorageService
  ) {}

  async deleteComment(comment: CommentDeck) {
        const dialogConfirmRef = this._dialog.open(ConfirmDialogComponent, {
          data: {
            title: 'Editar Usuario',
            message: '¿Estás seguro que deseas editar este Perfil?'
          }
        });
    
        dialogConfirmRef.afterClosed().subscribe(result => {
          if (result) {
            this._sComments.deleteComment(comment.id!);
            this._snackbar.commentDelete();
          }
        });
  }

  async goToDeck(comment: CommentDeck) {
    try {
      const res = await this._sDecks.getDeckById(comment.deckId!);
      if(res.id){
        this._router.navigate([res.userId, 'decks', res.id], { queryParams: { public: true } });
      }
    }catch (error) {
      this._snackbar.errorServer();
    }
  }


}

