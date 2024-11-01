import { ICard, IForeignName, ILegality, IRuling } from '../interfaces/card.interface';

export class Card implements ICard {

    name: string;
    names: string[];
    manaCost: string;
    cmc: number;
    colors: string[];
    colorIdentity: string[];
    type: string;
    supertypes: string[];
    types: string[];
    subtypes: string[];
    rarity: string;
    set: string;
    text: string;
    artist: string;
    number: string;
    power: string;
    toughness: string;
    layout: string;
    multiverseid: number;
    imageUrl: string;
    rulings: IRuling[];
    foreignNames: IForeignName[];
    printings: string[];
    originalText: string;
    originalType: string;
    id: string;
    legalities: ILegality[] | null;
    
    constructor(card?: ICard) {
        this.name = card?.name == undefined ? '' : card.name;
        this.names = card?.names == undefined ? [] : card.names;
        this.manaCost = card?.manaCost == undefined ? '' : card.manaCost;
        this.cmc = card?.cmc == undefined ? 0 : card.cmc;
        this.colors = card?.colors == undefined ? [] : card.colors;
        this.colorIdentity = card?.colorIdentity == undefined ? [] : card.colorIdentity;
        this.type = card?.type == undefined ? '' : card.type;
        this.supertypes = card?.supertypes == undefined ? [] : card.supertypes;
        this.types = card?.types == undefined ? [] : card.types;
        this.subtypes = card?.subtypes == undefined ? [] : card.subtypes;
        this.rarity = card?.rarity == undefined ? '' : card.rarity;
        this.set = card?.set == undefined ? '' : card.set;
        this.text = card?.text == undefined ? '' : card.text;
        this.artist = card?.artist == undefined ? '' : card.artist;
        this.number = card?.number == undefined ? '' : card.number;
        this.power = card?.power == undefined ? '' : card.power;
        this.toughness = card?.toughness == undefined ? '' : card.toughness;
        this.layout = card?.layout == undefined ? '' : card.layout;
        this.multiverseid = card?.multiverseid == undefined ? 0 : card.multiverseid;
        this.imageUrl = card?.imageUrl == undefined ? '' : card.imageUrl;
        this.rulings = card?.rulings == undefined ? [] : card.rulings;
        this.foreignNames = card?.foreignNames == undefined ? [] : card.foreignNames;
        this.printings = card?.printings == undefined ? [] : card.printings;
        this.originalText = card?.originalText == undefined ? '' : card.originalText;
        this.originalType = card?.originalType == undefined ? '' : card.originalType;
        this.id = card?.id == undefined ? '' : card.id;
        this.legalities = card?.legalities == undefined ? [] : card.legalities;
    }
}

export class ForeignName implements IForeignName {
    name: string ;
    language: string ;
    multiverseid: number ;
    flavor: string ;
    imageUrl: string ;
    text: string ;
    type: string ;
    

    constructor(foreignName?: IForeignName) {
        this.name = foreignName?.name == undefined ? '' : foreignName.name;
        this.language = foreignName?.language == undefined ? '' : foreignName.language;
        this.multiverseid = foreignName?.multiverseid == undefined ? 0 : foreignName.multiverseid;
        this.flavor = foreignName?.flavor == undefined ? '' : foreignName.flavor;
        this.imageUrl = foreignName?.imageUrl == undefined ? '' : foreignName.imageUrl;
        this.text = foreignName?.text == undefined ? '' : foreignName.text;
        this.type = foreignName?.type == undefined ? '' : foreignName.type;
    }
}

export class Ruling implements IRuling {
    date: Date ;
    text: string ;

    constructor(ruling?: IRuling) {
        this.date = ruling?.date == undefined ? new Date() : ruling.date;
        this.text = ruling?.text == undefined ? '' : ruling.text;
    }
}

export class Legality implements ILegality {
    format: string ;
    legality: string ;

    constructor(legality?: ILegality) {
        this.format = legality?.format == undefined ? '' : legality.format;
        this.legality = legality?.legality == undefined ? '' : legality.legality;
    }
}