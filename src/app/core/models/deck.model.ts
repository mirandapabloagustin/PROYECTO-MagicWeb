import { IDeck } from '@interfaces/deck.interface';

export class Deck implements IDeck {
    id: string | null;
    userId: string | null;
    name: string | null;
    description: string | null;
    imgDeck: string | null;
    tags: string[] | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    manaRatio: number | null;
    colors: string[] | null;
    votes: number | null;
    cards: any[] | null;

    constructor(deck?: Deck) {
      this.id = deck?.id ?? '';
      this.userId = deck?.userId ?? '';
      this.name = deck?.name ?? '';
      this.description = deck?.description ?? '';
      this.imgDeck = deck?.imgDeck ?? '';
      this.tags = deck?.tags ?? [];
      this.createdAt = deck?.createdAt ?? new Date();
      this.updatedAt = deck?.updatedAt ?? new Date();
      this.manaRatio = deck?.manaRatio ?? 0;
      this.colors = deck?.colors ?? [];
      this.votes = deck?.votes ?? 0;
      this.cards = deck?.cards ?? [];
    }
}


