import { IDeck } from '@interfaces/deck.interface';
import { DeckStatus } from '@enums/status.deck';
import { CopiedDeck } from '../enums/copied.deck.enum';

export class Deck implements IDeck {
    id: string | null;
    userId: string | null;
    creator: string | null;
    name: string | null;
    description: string | null;
    imgDeck: string | null;
    tags: string[] | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    manaRatio: number | null;
    colors: string[] | null;
    copied: CopiedDeck;
    votesUser: string[] | null;
    status: DeckStatus;
    cards: any[] | null;

    constructor(deck?: Deck) {
      this.id = deck?.id ?? '';
      this.userId = deck?.userId ?? '';
      this.creator = deck?.creator ?? '';
      this.name = deck?.name ?? '';
      this.description = deck?.description ?? '';
      this.imgDeck = deck?.imgDeck ?? '';
      this.tags = deck?.tags ?? [];
      this.createdAt = deck?.createdAt ?? new Date();
      this.updatedAt = deck?.updatedAt ?? new Date();
      this.manaRatio = deck?.manaRatio ?? 0;
      this.colors = deck?.colors ?? [];
      this.copied = deck?.copied ?? CopiedDeck.Original;
      this.votesUser = deck?.votesUser ?? [];
      this.status = deck?.status ?? DeckStatus.Private;
      this.cards = deck?.cards ?? [];
    }
}


