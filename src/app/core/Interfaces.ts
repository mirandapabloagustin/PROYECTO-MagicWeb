import { Card } from './Models';

export interface Icard {
  id: string | null;
  nameCard: string | null;
  cmc: string | null;
  colorIdentity: string | null;
  type: string | null;
}

export interface IdeckCard {
  id: number | null;
  nameDeck: string | null;
  cards: Card[] | null;
}

export interface Iuser {
  id: number | null;
  nameUser: string | null;
  surName: string | null;
  birthDate: string | null;
  nickName: string | null;
  email: string | null;
  password: string | null;
  imagUser: string | null;
  description: string | null;
  decks: IdeckCard[] | null;
}
