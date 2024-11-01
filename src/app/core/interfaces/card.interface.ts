export interface ICard {
    name:          string | null;
    names:         string[] | null;
    manaCost:      string | null;
    cmc:           number | null;
    colors:        string[] | null;
    colorIdentity: string[] | null;
    type:          string | null;
    supertypes:    string[] | null;
    types:         string[] | null;
    subtypes:      string[] | null;
    rarity:        string | null;
    set:           string | null;
    text:          string | null;
    artist:        string | null;
    number:        string | null;
    power:         string | null;
    toughness:     string | null;
    layout:        string | null;
    multiverseid:  number | null;
    imageUrl:      string | null;
    rulings:       IRuling[] | null;
    foreignNames:  IForeignName[] | null;
    printings:     string[] | null;
    originalText:  string | null;
    originalType:  string | null;
    id:            string | null;
    legalities:    ILegality[] | null;
}

export interface IForeignName {
    name:         string | null;
    language:     string | null;
    multiverseid: number | null;
    flavor:       string | null;
    imageUrl:     string | null;
    text:         string | null;
    type:         string | null;
    
}

export interface IRuling {
    date: Date | null;
    text: string | null;
}

export interface ILegality {
    format: string | null;
    legality: string | null;
}