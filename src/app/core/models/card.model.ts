import { ICard } from "../interfaces/card.interface";

export class Card implements ICard {
  id: string | null;
  oracle_id: string | null;
  name: string | null;
  lang: string | null;
  released_at: string | null;
  uri: string | null;
  scryfall_uri: string | null;
  layout: string | null;
  highres_image: boolean | null;
  image_uris?: {
    small: string | null;
    normal: string | null;
    large: string | null;
    png: string | null;
    art_crop: string | null;
    border_crop: string | null;
  } | null;
  mana_cost: string | null;
  cmc: number | null;
  type_line: string | null;
  oracle_text: string | null;
  colors: string[] | null;
  color_identity: string[] | null;
  legalities: { [format: string]: string } | null;
  set: string | null;
  set_name: string | null;
  rarity: string | null;
  prices?: {
    usd: string | null;
    usd_foil: string | null;
    eur: string | null;
    tix: string | null;
  } | null;

  constructor(card?: ICard) {
    this.id = card?.id ?? null;
    this.oracle_id = card?.oracle_id ?? null;
    this.name = card?.name ?? null;
    this.lang = card?.lang ?? null;
    this.released_at = card?.released_at ?? null;
    this.uri = card?.uri ?? null;
    this.scryfall_uri = card?.scryfall_uri ?? null;
    this.layout = card?.layout ?? null;
    this.highres_image = card?.highres_image ?? null;
    this.image_uris = card?.image_uris ?? null;
    this.mana_cost = card?.mana_cost ?? null;
    this.cmc = card?.cmc ?? null;
    this.type_line = card?.type_line ?? null;
    this.oracle_text = card?.oracle_text ?? null;
    this.colors = card?.colors ?? null;
    this.color_identity = card?.color_identity ?? null;
    this.legalities = card?.legalities ?? null;
    this.set = card?.set ?? null;
    this.set_name = card?.set_name ?? null;
    this.rarity = card?.rarity ?? null;
    this.prices = card?.prices ?? null;
  }
}
