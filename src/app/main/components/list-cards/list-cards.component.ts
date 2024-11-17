import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { CardComponent } from '@shared/card/card.component';
import { AuthApiCardService } from '@services/card/auth.card.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Card } from '@models/card.model';
import { ButtonStyleComponent } from '@shared/button-style/button-style.component';
import {
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const MODULES = [CardComponent, MatProgressSpinnerModule, ButtonStyleComponent, FontAwesomeModule];

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [...MODULES],
  templateUrl: `./list-cards.component.html`,
  styleUrls: [`./list-cards.component.css`],
})
export class ListCardsComponent implements OnInit {
  db: any[] = [
    {
      "object": "card",
      "id": "d332acbc-6224-43bc-a509-3a7edc877423",
      "oracle_id": "686f4a37-b5e4-46d4-9e0e-11794b2d12cd",
      "multiverse_ids": [
        643151
      ],
      "mtgo_id": 120815,
      "tcgplayer_id": 531050,
      "cardmarket_id": 748497,
      "name": "Golgari Grave-Troll",
      "lang": "en",
      "released_at": "2024-01-12",
      "uri": "https://api.scryfall.com/cards/d332acbc-6224-43bc-a509-3a7edc877423",
      "scryfall_uri": "https://scryfall.com/card/rvr/144/golgari-grave-troll?utm_source=api",
      "layout": "normal",
      "highres_image": true,
      "image_status": "highres_scan",
      "image_uris": {
        "small": "https://cards.scryfall.io/small/front/d/3/d332acbc-6224-43bc-a509-3a7edc877423.jpg?1702429564",
        "normal": "https://cards.scryfall.io/normal/front/d/3/d332acbc-6224-43bc-a509-3a7edc877423.jpg?1702429564",
        "large": "https://cards.scryfall.io/large/front/d/3/d332acbc-6224-43bc-a509-3a7edc877423.jpg?1702429564",
        "png": "https://cards.scryfall.io/png/front/d/3/d332acbc-6224-43bc-a509-3a7edc877423.png?1702429564",
        "art_crop": "https://cards.scryfall.io/art_crop/front/d/3/d332acbc-6224-43bc-a509-3a7edc877423.jpg?1702429564",
        "border_crop": "https://cards.scryfall.io/border_crop/front/d/3/d332acbc-6224-43bc-a509-3a7edc877423.jpg?1702429564"
      },
      "mana_cost": "{4}{G}",
      "cmc": 5.0,
      "type_line": "Creature — Troll Skeleton",
      "oracle_text": "Golgari Grave-Troll enters with a +1/+1 counter on it for each creature card in your graveyard.\n{1}, Remove a +1/+1 counter from Golgari Grave-Troll: Regenerate Golgari Grave-Troll.\nDredge 6 (If you would draw a card, you may mill six cards instead. If you do, return this card from your graveyard to your hand.)",
      "power": "0",
      "toughness": "0",
      "colors": [
        "G"
      ],
      "color_identity": [
        "G"
      ],
      "keywords": [
        "Dredge",
        "Mill"
      ],
      "legalities": {
        "standard": "not_legal",
        "future": "not_legal",
        "historic": "not_legal",
        "timeless": "not_legal",
        "gladiator": "not_legal",
        "pioneer": "not_legal",
        "explorer": "not_legal",
        "modern": "banned",
        "legacy": "legal",
        "pauper": "not_legal",
        "vintage": "restricted",
        "penny": "legal",
        "commander": "legal",
        "oathbreaker": "legal",
        "standardbrawl": "not_legal",
        "brawl": "not_legal",
        "alchemy": "not_legal",
        "paupercommander": "not_legal",
        "duel": "legal",
        "oldschool": "not_legal",
        "premodern": "not_legal",
        "predh": "legal"
      },
      "games": [
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
      "reprint": true,
      "variation": false,
      "set_id": "fed2c8cd-ab92-44f6-808a-41e7809bcfe2",
      "set": "rvr",
      "set_name": "Ravnica Remastered",
      "set_type": "masters",
      "set_uri": "https://api.scryfall.com/sets/fed2c8cd-ab92-44f6-808a-41e7809bcfe2",
      "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Arvr&unique=prints",
      "scryfall_set_uri": "https://scryfall.com/sets/rvr?utm_source=api",
      "rulings_uri": "https://api.scryfall.com/cards/d332acbc-6224-43bc-a509-3a7edc877423/rulings",
      "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A686f4a37-b5e4-46d4-9e0e-11794b2d12cd&unique=prints",
      "collector_number": "144",
      "digital": false,
      "rarity": "rare",
      "watermark": "golgari",
      "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
      "artist": "Greg Hildebrandt",
      "artist_ids": [
        "020f967b-0d2f-4166-aabe-901dba8bc7ec"
      ],
      "illustration_id": "7429ff5c-2cdc-49a6-8d66-c4a3b8705ab4",
      "border_color": "black",
      "frame": "2015",
      "security_stamp": "oval",
      "full_art": false,
      "textless": false,
      "booster": true,
      "story_spotlight": false,
      "edhrec_rank": 2298,
      "penny_rank": 937,
      "prices": {
        "usd": "2.47",
        "usd_foil": "2.79",
        "usd_etched": null,
        "eur": "0.88",
        "eur_foil": "1.05",
        "tix": "0.25"
      },
      "related_uris": {
        "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=643151&printed=false",
        "tcgplayer_infinite_articles": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26partner%3Dscryfall%26q%3DGolgari%2BGrave-Troll",
        "tcgplayer_infinite_decks": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26partner%3Dscryfall%26q%3DGolgari%2BGrave-Troll",
        "edhrec": "https://edhrec.com/route/?cc=Golgari+Grave-Troll"
      },
      "purchase_uris": {
        "tcgplayer": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F531050%3Fpage%3D1",
        "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Ravnica-Remastered/Golgari-Grave-Troll?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
        "cardhoarder": "https://www.cardhoarder.com/cards/120815?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
      }
    },{
      "object": "card",
      "id": "b5c9649e-9ae5-4926-bf08-71ba23aa37f1",
      "oracle_id": "722ee05f-6815-41b7-9813-5ec3902c1e9f",
      "multiverse_ids": [
        409790,
        409791
      ],
      "mtgo_id": 59886,
      "mtgo_foil_id": 59887,
      "tcgplayer_id": 114847,
      "cardmarket_id": 288640,
      "name": "Aberrant Researcher // Perfected Form",
      "lang": "en",
      "released_at": "2016-04-08",
      "uri": "https://api.scryfall.com/cards/b5c9649e-9ae5-4926-bf08-71ba23aa37f1",
      "scryfall_uri": "https://scryfall.com/card/soi/49/aberrant-researcher-perfected-form?utm_source=api",
      "layout": "transform",
      "highres_image": true,
      "image_status": "highres_scan",
      "cmc": 4.0,
      "type_line": "Creature — Human Insect // Creature — Insect Horror",
      "color_identity": [
        "U"
      ],
      "keywords": [
        "Flying",
        "Transform",
        "Mill"
      ],
      "card_faces": [
        {
          "object": "card_face",
          "name": "Aberrant Researcher",
          "mana_cost": "{3}{U}",
          "type_line": "Creature — Human Insect",
          "oracle_text": "Flying\nAt the beginning of your upkeep, mill a card. If an instant or sorcery card was milled this way, transform Aberrant Researcher.",
          "colors": [
            "U"
          ],
          "power": "3",
          "toughness": "2",
          "flavor_text": "\"Metamorphosis is a process.\"\n—Laboratory notes",
          "artist": "Nils Hamm",
          "artist_id": "c540d1fc-1500-457f-93cf-d6069ee66546",
          "illustration_id": "bd61ac7c-e0ad-437f-9796-b24dce5737dc",
          "image_uris": {
            "small": "https://cards.scryfall.io/small/front/b/5/b5c9649e-9ae5-4926-bf08-71ba23aa37f1.jpg?1576383982",
            "normal": "https://cards.scryfall.io/normal/front/b/5/b5c9649e-9ae5-4926-bf08-71ba23aa37f1.jpg?1576383982",
            "large": "https://cards.scryfall.io/large/front/b/5/b5c9649e-9ae5-4926-bf08-71ba23aa37f1.jpg?1576383982",
            "png": "https://cards.scryfall.io/png/front/b/5/b5c9649e-9ae5-4926-bf08-71ba23aa37f1.png?1576383982",
            "art_crop": "https://cards.scryfall.io/art_crop/front/b/5/b5c9649e-9ae5-4926-bf08-71ba23aa37f1.jpg?1576383982",
            "border_crop": "https://cards.scryfall.io/border_crop/front/b/5/b5c9649e-9ae5-4926-bf08-71ba23aa37f1.jpg?1576383982"
          }
        },
        {
          "object": "card_face",
          "name": "Perfected Form",
          "mana_cost": "",
          "type_line": "Creature — Insect Horror",
          "oracle_text": "Flying",
          "colors": [
            "U"
          ],
          "color_indicator": [
            "U"
          ],
          "power": "5",
          "toughness": "4",
          "flavor_text": "The final pages of the experiment log were blank. Investigators found it abandoned on a desk in the researcher's lab, open, the pages flipping in the wind from a shattered window.",
          "artist": "Nils Hamm",
          "artist_id": "c540d1fc-1500-457f-93cf-d6069ee66546",
          "illustration_id": "6077b805-d582-40e2-84ab-4d8d5d4386fe",
          "image_uris": {
            "small": "https://cards.scryfall.io/small/back/b/5/b5c9649e-9ae5-4926-bf08-71ba23aa37f1.jpg?1576383982",
            "normal": "https://cards.scryfall.io/normal/back/b/5/b5c9649e-9ae5-4926-bf08-71ba23aa37f1.jpg?1576383982",
            "large": "https://cards.scryfall.io/large/back/b/5/b5c9649e-9ae5-4926-bf08-71ba23aa37f1.jpg?1576383982",
            "png": "https://cards.scryfall.io/png/back/b/5/b5c9649e-9ae5-4926-bf08-71ba23aa37f1.png?1576383982",
            "art_crop": "https://cards.scryfall.io/art_crop/back/b/5/b5c9649e-9ae5-4926-bf08-71ba23aa37f1.jpg?1576383982",
            "border_crop": "https://cards.scryfall.io/border_crop/back/b/5/b5c9649e-9ae5-4926-bf08-71ba23aa37f1.jpg?1576383982"
          }
        }
      ],
      "all_parts": [
        {
          "object": "related_card",
          "id": "b5c9649e-9ae5-4926-bf08-71ba23aa37f1",
          "component": "combo_piece",
          "name": "Aberrant Researcher // Perfected Form",
          "type_line": "Creature — Human Insect // Creature — Insect Horror",
          "uri": "https://api.scryfall.com/cards/b5c9649e-9ae5-4926-bf08-71ba23aa37f1"
        },
        {
          "object": "related_card",
          "id": "4d323ead-24f5-42e4-9e23-aa14eb66264d",
          "component": "combo_piece",
          "name": "Shadows Over Innistrad Checklist 1",
          "type_line": "Card",
          "uri": "https://api.scryfall.com/cards/4d323ead-24f5-42e4-9e23-aa14eb66264d"
        }
      ],
      "legalities": {
        "standard": "not_legal",
        "future": "not_legal",
        "historic": "not_legal",
        "timeless": "not_legal",
        "gladiator": "not_legal",
        "pioneer": "legal",
        "explorer": "not_legal",
        "modern": "legal",
        "legacy": "legal",
        "pauper": "not_legal",
        "vintage": "legal",
        "penny": "not_legal",
        "commander": "legal",
        "oathbreaker": "legal",
        "standardbrawl": "not_legal",
        "brawl": "not_legal",
        "alchemy": "not_legal",
        "paupercommander": "restricted",
        "duel": "legal",
        "oldschool": "not_legal",
        "premodern": "not_legal",
        "predh": "not_legal"
      },
      "games": [
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
      "set_id": "5e914d7e-c1e9-446c-a33d-d093c02b2743",
      "set": "soi",
      "set_name": "Shadows over Innistrad",
      "set_type": "expansion",
      "set_uri": "https://api.scryfall.com/sets/5e914d7e-c1e9-446c-a33d-d093c02b2743",
      "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Asoi&unique=prints",
      "scryfall_set_uri": "https://scryfall.com/sets/soi?utm_source=api",
      "rulings_uri": "https://api.scryfall.com/cards/b5c9649e-9ae5-4926-bf08-71ba23aa37f1/rulings",
      "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A722ee05f-6815-41b7-9813-5ec3902c1e9f&unique=prints",
      "collector_number": "49",
      "digital": false,
      "rarity": "uncommon",
      "artist": "Nils Hamm",
      "artist_ids": [
        "c540d1fc-1500-457f-93cf-d6069ee66546"
      ],
      "border_color": "black",
      "frame": "2015",
      "frame_effects": [
        "sunmoondfc"
      ],
      "full_art": false,
      "textless": false,
      "booster": true,
      "story_spotlight": false,
      "edhrec_rank": 21954,
      "penny_rank": 10251,
      "prices": {
        "usd": "0.06",
        "usd_foil": "0.22",
        "usd_etched": null,
        "eur": "0.06",
        "eur_foil": "0.36",
        "tix": "0.03"
      },
      "related_uris": {
        "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=409790&printed=false",
        "tcgplayer_infinite_articles": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26partner%3Dscryfall%26q%3DAberrant%2BResearcher%2B%252F%252F%2BPerfected%2BForm",
        "tcgplayer_infinite_decks": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26partner%3Dscryfall%26q%3DAberrant%2BResearcher%2B%252F%252F%2BPerfected%2BForm",
        "edhrec": "https://edhrec.com/route/?cc=Aberrant+Researcher"
      },
      "purchase_uris": {
        "tcgplayer": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F114847%3Fpage%3D1",
        "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Shadows-over-Innistrad/Aberrant-Researcher-Perfected-Form?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
        "cardhoarder": "https://www.cardhoarder.com/cards/59886?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
      }
    },
    {
      "object": "card",
      "id": "864ad989-19a6-4930-8efc-bbc077a18c32",
      "oracle_id": "82959ca2-cd96-4cca-9ce0-afb8db209860",
      "multiverse_ids": [
        78600
      ],
      "mtgo_id": 21205,
      "mtgo_foil_id": 21206,
      "tcgplayer_id": 11958,
      "cardmarket_id": 11977,
      "name": "Bushi Tenderfoot // Kenzo the Hardhearted",
      "lang": "en",
      "released_at": "2004-10-01",
      "uri": "https://api.scryfall.com/cards/864ad989-19a6-4930-8efc-bbc077a18c32",
      "scryfall_uri": "https://scryfall.com/card/chk/2/bushi-tenderfoot-kenzo-the-hardhearted?utm_source=api",
      "layout": "flip",
      "highres_image": true,
      "image_status": "highres_scan",
      "image_uris": {
        "small": "https://cards.scryfall.io/small/front/8/6/864ad989-19a6-4930-8efc-bbc077a18c32.jpg?1562762069",
        "normal": "https://cards.scryfall.io/normal/front/8/6/864ad989-19a6-4930-8efc-bbc077a18c32.jpg?1562762069",
        "large": "https://cards.scryfall.io/large/front/8/6/864ad989-19a6-4930-8efc-bbc077a18c32.jpg?1562762069",
        "png": "https://cards.scryfall.io/png/front/8/6/864ad989-19a6-4930-8efc-bbc077a18c32.png?1562762069",
        "art_crop": "https://cards.scryfall.io/art_crop/front/8/6/864ad989-19a6-4930-8efc-bbc077a18c32.jpg?1562762069",
        "border_crop": "https://cards.scryfall.io/border_crop/front/8/6/864ad989-19a6-4930-8efc-bbc077a18c32.jpg?1562762069"
      },
      "mana_cost": "{W}",
      "cmc": 1.0,
      "type_line": "Creature — Human Soldier // Legendary Creature — Human Samurai",
      "power": "1",
      "toughness": "1",
      "colors": [
        "W"
      ],
      "color_identity": [
        "W"
      ],
      "keywords": [
        "Bushido",
        "Double strike"
      ],
      "card_faces": [
        {
          "object": "card_face",
          "name": "Bushi Tenderfoot",
          "mana_cost": "{W}",
          "type_line": "Creature — Human Soldier",
          "oracle_text": "When a creature dealt damage by Bushi Tenderfoot this turn dies, flip Bushi Tenderfoot.",
          "power": "1",
          "toughness": "1",
          "artist": "Mark Zug",
          "artist_id": "48e2b98c-5467-4671-bd42-4c3746115117",
          "illustration_id": "e8672d31-de00-4f84-b188-a89470816b6e"
        },
        {
          "object": "card_face",
          "name": "Kenzo the Hardhearted",
          "mana_cost": "",
          "type_line": "Legendary Creature — Human Samurai",
          "oracle_text": "Double strike; bushido 2 (Whenever this creature blocks or becomes blocked, it gets +2/+2 until end of turn.)",
          "power": "3",
          "toughness": "4",
          "artist": "Mark Zug",
          "artist_id": "48e2b98c-5467-4671-bd42-4c3746115117"
        }
      ],
      "legalities": {
        "standard": "not_legal",
        "future": "not_legal",
        "historic": "not_legal",
        "timeless": "not_legal",
        "gladiator": "not_legal",
        "pioneer": "not_legal",
        "explorer": "not_legal",
        "modern": "legal",
        "legacy": "legal",
        "pauper": "not_legal",
        "vintage": "legal",
        "penny": "not_legal",
        "commander": "legal",
        "oathbreaker": "legal",
        "standardbrawl": "not_legal",
        "brawl": "not_legal",
        "alchemy": "not_legal",
        "paupercommander": "restricted",
        "duel": "legal",
        "oldschool": "not_legal",
        "premodern": "not_legal",
        "predh": "legal"
      },
      "games": [
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
      "set_id": "6183d21f-a0af-4118-ba58-aca1d8719c01",
      "set": "chk",
      "set_name": "Champions of Kamigawa",
      "set_type": "expansion",
      "set_uri": "https://api.scryfall.com/sets/6183d21f-a0af-4118-ba58-aca1d8719c01",
      "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Achk&unique=prints",
      "scryfall_set_uri": "https://scryfall.com/sets/chk?utm_source=api",
      "rulings_uri": "https://api.scryfall.com/cards/864ad989-19a6-4930-8efc-bbc077a18c32/rulings",
      "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A82959ca2-cd96-4cca-9ce0-afb8db209860&unique=prints",
      "collector_number": "2",
      "digital": false,
      "rarity": "uncommon",
      "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
      "artist": "Mark Zug",
      "artist_ids": [
        "48e2b98c-5467-4671-bd42-4c3746115117"
      ],
      "illustration_id": "e8672d31-de00-4f84-b188-a89470816b6e",
      "border_color": "black",
      "frame": "2003",
      "full_art": false,
      "textless": false,
      "booster": true,
      "story_spotlight": false,
      "edhrec_rank": 16633,
      "penny_rank": 9422,
      "prices": {
        "usd": "0.27",
        "usd_foil": "4.96",
        "usd_etched": null,
        "eur": "0.21",
        "eur_foil": "1.22",
        "tix": "0.03"
      },
      "related_uris": {
        "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=78600&printed=false",
        "tcgplayer_infinite_articles": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26partner%3Dscryfall%26q%3DBushi%2BTenderfoot%2B%252F%252F%2BKenzo%2Bthe%2BHardhearted",
        "tcgplayer_infinite_decks": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26partner%3Dscryfall%26q%3DBushi%2BTenderfoot%2B%252F%252F%2BKenzo%2Bthe%2BHardhearted",
        "edhrec": "https://edhrec.com/route/?cc=Bushi+Tenderfoot"
      },
      "purchase_uris": {
        "tcgplayer": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F11958%3Fpage%3D1",
        "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Champions-of-Kamigawa/Bushi-Tenderfoot?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
        "cardhoarder": "https://www.cardhoarder.com/cards/21205?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
      }
    },
    {
      "object": "card",
      "id": "2cae24c1-53f1-4f3f-8795-b634c46a17c4",
      "oracle_id": "993b7b94-ed06-422d-9c7e-52a74ce9d045",
      "multiverse_ids": [
        673498
      ],
      "mtgo_id": 130317,
      "arena_id": 92167,
      "tcgplayer_id": 579325,
      "cardmarket_id": 788423,
      "name": "Derelict Attic // Widow's Walk",
      "lang": "en",
      "released_at": "2024-09-27",
      "uri": "https://api.scryfall.com/cards/2cae24c1-53f1-4f3f-8795-b634c46a17c4",
      "scryfall_uri": "https://scryfall.com/card/dsk/93/derelict-attic-widows-walk?utm_source=api",
      "layout": "split",
      "highres_image": true,
      "image_status": "highres_scan",
      "image_uris": {
        "small": "https://cards.scryfall.io/small/front/2/c/2cae24c1-53f1-4f3f-8795-b634c46a17c4.jpg?1726780598",
        "normal": "https://cards.scryfall.io/normal/front/2/c/2cae24c1-53f1-4f3f-8795-b634c46a17c4.jpg?1726780598",
        "large": "https://cards.scryfall.io/large/front/2/c/2cae24c1-53f1-4f3f-8795-b634c46a17c4.jpg?1726780598",
        "png": "https://cards.scryfall.io/png/front/2/c/2cae24c1-53f1-4f3f-8795-b634c46a17c4.png?1726780598",
        "art_crop": "https://cards.scryfall.io/art_crop/front/2/c/2cae24c1-53f1-4f3f-8795-b634c46a17c4.jpg?1726780598",
        "border_crop": "https://cards.scryfall.io/border_crop/front/2/c/2cae24c1-53f1-4f3f-8795-b634c46a17c4.jpg?1726780598"
      },
      "mana_cost": "{2}{B} // {3}{B}",
      "cmc": 7.0,
      "type_line": "Enchantment — Room // Enchantment — Room",
      "colors": [
        "B"
      ],
      "color_identity": [
        "B"
      ],
      "keywords": [],
      "card_faces": [
        {
          "object": "card_face",
          "name": "Derelict Attic",
          "mana_cost": "{2}{B}",
          "type_line": "Enchantment — Room",
          "oracle_text": "When you unlock this door, you draw two cards and you lose 2 life.\n(You may cast either half. That door unlocks on the battlefield. As a sorcery, you may pay the mana cost of a locked door to unlock it.)",
          "artist": "Marc Simonetti",
          "artist_id": "8089db55-5105-47b0-8c64-f320e08c97f0",
          "illustration_id": "01cdaf9c-3aad-4b44-8f6b-105b4ab6bce0"
        },
        {
          "object": "card_face",
          "name": "Widow's Walk",
          "mana_cost": "{3}{B}",
          "type_line": "Enchantment — Room",
          "oracle_text": "Whenever a creature you control attacks alone, it gets +1/+0 and gains deathtouch until end of turn.\n(You may cast either half. That door unlocks on the battlefield. As a sorcery, you may pay the mana cost of a locked door to unlock it.)",
          "artist": "Marc Simonetti",
          "artist_id": "8089db55-5105-47b0-8c64-f320e08c97f0"
        }
      ],
      "legalities": {
        "standard": "legal",
        "future": "legal",
        "historic": "legal",
        "timeless": "legal",
        "gladiator": "legal",
        "pioneer": "legal",
        "explorer": "legal",
        "modern": "legal",
        "legacy": "legal",
        "pauper": "legal",
        "vintage": "legal",
        "penny": "legal",
        "commander": "legal",
        "oathbreaker": "legal",
        "standardbrawl": "legal",
        "brawl": "legal",
        "alchemy": "legal",
        "paupercommander": "legal",
        "duel": "legal",
        "oldschool": "not_legal",
        "premodern": "not_legal",
        "predh": "not_legal"
      },
      "games": [
        "paper",
        "mtgo",
        "arena"
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
      "set_id": "a111d8a9-b647-48ec-afab-2b78f92173f5",
      "set": "dsk",
      "set_name": "Duskmourn: House of Horror",
      "set_type": "expansion",
      "set_uri": "https://api.scryfall.com/sets/a111d8a9-b647-48ec-afab-2b78f92173f5",
      "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Adsk&unique=prints",
      "scryfall_set_uri": "https://scryfall.com/sets/dsk?utm_source=api",
      "rulings_uri": "https://api.scryfall.com/cards/2cae24c1-53f1-4f3f-8795-b634c46a17c4/rulings",
      "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A993b7b94-ed06-422d-9c7e-52a74ce9d045&unique=prints",
      "collector_number": "93",
      "digital": false,
      "rarity": "common",
      "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
      "artist": "Marc Simonetti",
      "artist_ids": [
        "8089db55-5105-47b0-8c64-f320e08c97f0"
      ],
      "illustration_id": "01cdaf9c-3aad-4b44-8f6b-105b4ab6bce0",
      "border_color": "black",
      "frame": "2015",
      "full_art": false,
      "textless": false,
      "booster": true,
      "story_spotlight": false,
      "edhrec_rank": 10784,
      "prices": {
        "usd": "0.05",
        "usd_foil": "0.05",
        "usd_etched": null,
        "eur": "0.04",
        "eur_foil": "0.20",
        "tix": "0.01"
      },
      "related_uris": {
        "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=673498&printed=false",
        "tcgplayer_infinite_articles": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26partner%3Dscryfall%26q%3DDerelict%2BAttic%2B%252F%252F%2BWidow%2527s%2BWalk",
        "tcgplayer_infinite_decks": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26partner%3Dscryfall%26q%3DDerelict%2BAttic%2B%252F%252F%2BWidow%2527s%2BWalk",
        "edhrec": "https://edhrec.com/route/?cc=Derelict+Attic+%2F%2F+Widow%27s+Walk"
      },
      "purchase_uris": {
        "tcgplayer": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F579325%3Fpage%3D1",
        "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Duskmourn-House-of-Horror/Derelict-Attic-Widows-Walk?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
        "cardhoarder": "https://www.cardhoarder.com/cards/130317?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
      }
    },    
  ];
  loading = true;
  hasMoreItems = true; 
  isVisible = false;
  icon = faArrowUp;

  constructor(private serviceAuth: AuthApiCardService) {}

  ngOnInit(): void {
    this.loadCards();
  }

  @Output() cardSelected = new EventEmitter<any>();

  handleCardId(cardData: any) {
    this.cardSelected.emit(cardData);
  }

  async loadCards() {
    this.loading = false;
    
  }

  loadMoreCards() {

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 300; 
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  
}
