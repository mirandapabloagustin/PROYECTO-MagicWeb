import { DeckStatus } from "@enums/status.deck";

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
  votes: number | null;
  status: DeckStatus;
  cards: any[] | null;
}
