export interface IDeck {
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
}
