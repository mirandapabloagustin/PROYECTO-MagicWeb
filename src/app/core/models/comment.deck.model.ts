import { ICommentDeck } from "../interfaces/comment.deck.interface";

export class CommentDeck implements ICommentDeck {
    id: string;
    deckId: string;
    userId: string;
    userName: string;
    userImage: string;
    comment: string;
    createdAt: Date;
    
    constructor(comment?: ICommentDeck) {
        this.id = comment?.id ?? '';
        this.deckId = comment?.deckId ?? '';
        this.userId = comment?.userId ?? '';
        this.userName = comment?.userName ?? '';
        this.userImage = comment?.userImage ?? '';
        this.comment = comment?.comment ?? '';
        this.createdAt = comment?.createdAt ?? new Date();
    }
}