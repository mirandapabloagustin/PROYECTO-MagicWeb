import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '@services/comment/comment.service';
import { CommentDeck } from '@models/comment.deck.model';

@Component({
  selector: 'app-management-user',
  standalone: true,
  imports: [],
  templateUrl: './management.comments.user.decks.component.html',
  styleUrl: './management.comments.user.decks.component.css'
})
export class ManagementCommentsUserDecksComponent implements OnInit {
  @Input() userId: string | undefined;
  comments: CommentDeck[] = [];
  constructor(private _commentService: CommentService) { }

  ngOnInit() {
    if (this.userId) {
      this._commentService.getCommentsByUserId(this.userId).subscribe({
        next: (comments) => {
         this.comments = comments;
        }
      });
    }
  }
}
