import { Component, Input } from '@angular/core';
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

}

