import { Card, Image_uris } from './Models';

export interface Iimage_uris {
  small: string | null;
  normal: string | null;
  large: string | null;
  png: string | null;
  art_crop: string | null;
  border_crop: string | null;
}

export interface Icard {
  id: number | any | null;
  nameCard: string | any | null;
  image_uris: Image_uris | null ;
  mana_cost: string | any | null;
  colors: string | any | null;
}

export interface IdeckCard {
  id: number | null;
  userIdDeck: number | null;
  nameDeck: string | null;
  cards: Card[] | null;
}

export interface Iuser {
  id: number | null;
  nickName: string | null;
  email: string | null;
  password: string | null;
  isLogin: boolean | null;
}
