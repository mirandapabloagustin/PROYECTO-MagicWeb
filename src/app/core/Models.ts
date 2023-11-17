import { Iuser,Icard, IdeckCard } from "./Interfaces";


export class Card implements Icard {
    id: string | null;
    nameCard: string | null;
    cmc: string | null;
    colorIdentity: string | null;
    type: string | null;

    constructor(card?: Icard) {
        this.id = card?.id == undefined ? null : card.id;
        this.nameCard = card?.nameCard == undefined ? null : card.nameCard;
        this.cmc = card?.cmc == undefined ? null : card.cmc;
        this.colorIdentity = card?.colorIdentity == undefined ? null : card.colorIdentity;
        this.type = card?.type == undefined ? null : card.type;
    }
}

export class DeckCard implements IdeckCard {

    id: number | null;
    nameDeck: string | null;
    cards: Card[] | null;

    constructor(deckCard ?: IdeckCard) {
        this.id = deckCard?.id == undefined ? null : deckCard.id;
        this.nameDeck = deckCard?.nameDeck == undefined ? null : deckCard.nameDeck;
        this.cards = deckCard?.cards == undefined ? null : deckCard.cards;
    }
}

export class User implements Iuser {
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


    constructor(user?: Iuser) {
        this.id = user?.id == undefined ? null : user.id;
        this.nameUser = user?.nameUser == undefined ? '' : user.nameUser;
        this.surName = user?.surName == undefined ? '' : user.surName;
        this.birthDate = user?.birthDate == undefined ? '' : user.birthDate;
        this.nickName = user?.nickName == undefined ? '' : user.nickName;
        this.email = user?.email == undefined ? '' : user.email;
        this.password = user?.password == undefined ? '' : user.password;
        this.imagUser = user?.imagUser == undefined ? "assets/iconUsers/new-user.png" : user.imagUser;
        this.description = user?.description == undefined ? '' : user.description;
        this.decks = user?.decks == undefined ? [] : user.decks;
    }
  
}