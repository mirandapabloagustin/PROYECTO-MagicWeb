import { Component } from '@angular/core';
import { CardComponent } from '@shared/card/card.component';

const MODULES = [CardComponent];

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [...MODULES],
  templateUrl: `./list-cards.component.html`,
  styleUrl: `./list-cards.component.css`,
})
export class ListCardsComponent {

  dataCard = {
    "object": "card",
    "id": "9c1aee37-dcee-4e58-be9b-81ca57cedb53",
    "oracle_id": "d66f7ee7-e9a1-4714-b79c-8c86c6b6d5dc",
    "multiverse_ids": [457335],
    "mtgo_id": 71382,
    "arena_id": 69319,
    "tcgplayer_id": 183324,
    "cardmarket_id": 368501,
    "name": "Macabre Mockery",
    "lang": "en",
    "released_at": "2019-01-25",
    "uri": "https://api.scryfall.com/cards/9c1aee37-dcee-4e58-be9b-81ca57cedb53",
    "scryfall_uri": "https://scryfall.com/card/rna/191/macabre-mockery?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/9/c/9c1aee37-dcee-4e58-be9b-81ca57cedb53.jpg?1584831671",
      "normal": "https://cards.scryfall.io/normal/front/9/c/9c1aee37-dcee-4e58-be9b-81ca57cedb53.jpg?1584831671",
      "large": "https://cards.scryfall.io/large/front/9/c/9c1aee37-dcee-4e58-be9b-81ca57cedb53.jpg?1584831671",
      "png": "https://cards.scryfall.io/png/front/9/c/9c1aee37-dcee-4e58-be9b-81ca57cedb53.png?1584831671",
      "art_crop": "https://cards.scryfall.io/art_crop/front/9/c/9c1aee37-dcee-4e58-be9b-81ca57cedb53.jpg?1584831671",
      "border_crop": "https://cards.scryfall.io/border_crop/front/9/c/9c1aee37-dcee-4e58-be9b-81ca57cedb53.jpg?1584831671"
    },
    "mana_cost": "{2}{B}{R}",
    "cmc": 4,
    "type_line": "Instant",
    "oracle_text": "Put target creature card from an opponent's graveyard onto the battlefield under your control. It gets +2/+0 and gains haste until end of turn. Sacrifice it at the beginning of the next end step.",
    "colors": [
      "B",
      "R"
    ],
    "color_identity": [
      "B",
      "R"
    ],
    "keywords": [],
    "legalities": {
      "standard": "not_legal",
      "future": "not_legal",
      "historic": "legal",
      "timeless": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "explorer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "not_legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "oathbreaker": "legal",
      "standardbrawl": "not_legal",
      "brawl": "legal",
      "alchemy": "not_legal",
      "paupercommander": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal",
      "predh": "not_legal"
    },
    "games": [
      "arena",
      "paper",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "finishes": [
      "nonfoil",
      "foil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": false,
    "variation": false,
    "set_id": "97a7fd84-8d89-45a3-b48b-c951f6a3f9f1",
    "set": "rna",
    "set_name": "Ravnica Allegiance",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/97a7fd84-8d89-45a3-b48b-c951f6a3f9f1",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Arna&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/rna?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/9c1aee37-dcee-4e58-be9b-81ca57cedb53/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ad66f7ee7-e9a1-4714-b79c-8c86c6b6d5dc&unique=prints",
    "collector_number": "191",
    "digital": false,
    "rarity": "uncommon",
    "watermark": "rakdos",
    "flavor_text": "The Rakdos put the \"fun\" in \"funeral.\"",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Deruchenko Alexander",
    "artist_ids": [
      "806f6ff9-6ed4-4e93-998a-a562c0b792e6"
    ],
    "illustration_id": "c9b39f7c-db6a-40f4-96cd-9bff7ae2d6e0",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 11824,
    "penny_rank": 15461,
    "preview": {
      "source": "Possibility Storm",
      "source_uri": "https://www.patreon.com/posts/23867951",
      "previewed_at": "2019-01-10"
    },
    "prices": {
      "usd": "0.10",
      "usd_foil": "0.92",
      "usd_etched": null,
      "eur": "0.12",
      "eur_foil": "0.15",
      "tix": "0.03"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=457335&printed=false",
      "tcgplayer_infinite_articles": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26partner%3Dscryfall%26q%3DMacabre%2BMockery",
      "tcgplayer_infinite_decks": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26partner%3Dscryfall%26q%3DMacabre%2BMockery",
      "edhrec": "https://edhrec.com/route/?cc=Macabre+Mockery"
    },
    "purchase_uris": {
      "tcgplayer": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F183324%3Fpage%3D1",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Ravnica-Allegiance/Macabre-Mockery?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/71382?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  };

}