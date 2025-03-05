import { DeckStatus } from "@enums/status.deck";
import { CopiedDeck } from "../enums/copied.deck.enum";

export interface IDeck {
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
}
