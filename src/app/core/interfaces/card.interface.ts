export interface ICard {
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
  }
  