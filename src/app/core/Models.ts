import { Iuser,Icard, IdeckCard, Iimage_uris } from "./Interfaces";



export class Image_uris implements Iimage_uris{
    small: string | null;
    normal: string | null;
    large: string | null;
    png: string | null;
    art_crop: string | null;
    border_crop: string | null;

    constructor(image_uris ?: Iimage_uris) {
        this.small = image_uris?.small == undefined ? null : image_uris.small;
        this.normal = image_uris?.normal == undefined ? null : image_uris.normal;
        this.large = image_uris?.large == undefined ? null : image_uris.large;
        this.png = image_uris?.png == undefined ? null : image_uris.png;
        this.art_crop = image_uris?.art_crop == undefined ? null : image_uris.art_crop;
        this.border_crop = image_uris?.border_crop == undefined ? null : image_uris.border_crop;
    }
}

export class Card implements Icard {
    id: string | any;
    nameCard: string | any;
    image_uris: Image_uris | any;
    mana_cost: string | any;
    colors: string | any;

    constructor(card ?: Icard) {
        this.id = card?.id == undefined ? '' : card.id;
        this.nameCard = card?.nameCard == undefined ? '' : card.nameCard;
        this.image_uris = card?.image_uris == undefined ? '' : card.image_uris;
        this.mana_cost = card?.mana_cost == undefined ? '' : card.mana_cost;
        this.colors = card?.colors == undefined ? '' : card.colors;
    }
}

export class DeckCard implements IdeckCard {

    id: number | null;
    userIdDeck: number | null;
    nameDeck: string | null;
    cards: Card[] | null;

    constructor(deckCard ?: IdeckCard) {
        this.id = deckCard?.id == undefined ? null : deckCard.id;
        this.userIdDeck = deckCard?.userIdDeck == undefined ? null : deckCard.userIdDeck;
        this.nameDeck = deckCard?.nameDeck == undefined ? null : deckCard.nameDeck;
        this.cards = deckCard?.cards == undefined ? null : deckCard.cards;
    }
}

export class User implements Iuser {
    id: number | null;
    nickName: string | null;
    email: string | null;
    password: string | null;
    isLogin: boolean | null;

    constructor(user?: Iuser) {
        this.id = user?.id == undefined ? null : user.id;
        this.nickName = user?.nickName == undefined ? '' : user.nickName;
        this.email = user?.email == undefined ? '' : user.email;
        this.password = user?.password == undefined ? '' : user.password;
        this.isLogin = true;
    }
  
}