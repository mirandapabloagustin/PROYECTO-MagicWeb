import { Component } from '@angular/core';
import { FilterPanelComponent } from "./components/filter-panel/filter-panel.component";
import { ListCardsComponent } from "./components/list-cards/list-cards.component";
import { DetailsCardComponent } from '../shared/details-card/details-card.component';
import { FilterSearchDto } from '@app/core/models/dto/filter.search.dto.model';
import { CardsGalleryListComponent } from './components/cards-gallery/cards-gallery-list.component';

const MODULES = [FilterPanelComponent, CardsGalleryListComponent];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...MODULES, ListCardsComponent, DetailsCardComponent],
  template: `
    <main>
      <app-filter-panel
      (searchUserEvent)="handleUserSearch($event)"
      />
      <!-- List of cards
      @if(showList){
        <app-cards-gallery-list></app-cards-gallery-list>
        <app-list-cards (cardSelected)="showCardDetails($event)"></app-list-cards>
        }@else{
          }
          -->
        <app-details-card [cardData]="prueba"/>
    </main>
  `,
  styles: `
  `
})
export class MainComponent {
  showList = true;
  selectedCardId?:any;
  prueba={
    "object": "card",
    "id": "dad34ae5-56b4-4394-be02-e043dc1cc23d",
    "oracle_id": "80ecb069-36e2-490d-9f6c-ef553c00e997",
    "multiverse_ids": [
      607117,
      607118
    ],
    "mtgo_id": 110006,
    "arena_id": 84353,
    "tcgplayer_id": 492066,
    "cardmarket_id": 704783,
    "name": "Aetherblade Agent // Gitaxian Mindstinger",
    "lang": "en",
    "released_at": "2023-04-21",
    "uri": "https://api.scryfall.com/cards/dad34ae5-56b4-4394-be02-e043dc1cc23d",
    "scryfall_uri": "https://scryfall.com/card/mom/88/aetherblade-agent-gitaxian-mindstinger?utm_source=api",
    "layout": "transform",
    "highres_image": true,
    "image_status": "highres_scan",
    "cmc": 2.0,
    "type_line": "Creature — Human Rogue // Creature — Phyrexian Rogue",
    "color_identity": [
      "B",
      "U"
    ],
    "keywords": [
      "Transform",
      "Deathtouch"
    ],
    "card_faces": [
      {
        "object": "card_face",
        "name": "Aetherblade Agent",
        "mana_cost": "{1}{B}",
        "type_line": "Creature — Human Rogue",
        "oracle_text": "Deathtouch\n{4}{U/P}: Transform Aetherblade Agent. Activate only as a sorcery. ({U/P} can be paid with either {U} or 2 life.)",
        "colors": [
          "B"
        ],
        "power": "1",
        "toughness": "1",
        "flavor_text": "The Consulate of Kaladesh had always valued his particular talent for extracting information . . .",
        "artist": "Alexander Mokhov",
        "artist_id": "3a6a9d37-e62c-44bd-90f2-f5126324e3f0",
        "illustration_id": "ba97fc49-f605-4816-bb22-be8c0e7996a6",
        "image_uris": {
          "small": "https://cards.scryfall.io/small/front/d/a/dad34ae5-56b4-4394-be02-e043dc1cc23d.jpg?1682203531",
          "normal": "https://cards.scryfall.io/normal/front/d/a/dad34ae5-56b4-4394-be02-e043dc1cc23d.jpg?1682203531",
          "large": "https://cards.scryfall.io/large/front/d/a/dad34ae5-56b4-4394-be02-e043dc1cc23d.jpg?1682203531",
          "png": "https://cards.scryfall.io/png/front/d/a/dad34ae5-56b4-4394-be02-e043dc1cc23d.png?1682203531",
          "art_crop": "https://cards.scryfall.io/art_crop/front/d/a/dad34ae5-56b4-4394-be02-e043dc1cc23d.jpg?1682203531",
          "border_crop": "https://cards.scryfall.io/border_crop/front/d/a/dad34ae5-56b4-4394-be02-e043dc1cc23d.jpg?1682203531"
        }
      },
      {
        "object": "card_face",
        "name": "Gitaxian Mindstinger",
        "mana_cost": "",
        "type_line": "Creature — Phyrexian Rogue",
        "oracle_text": "Deathtouch\nWhenever Gitaxian Mindstinger deals combat damage to a player or battle, draw a card.",
        "colors": [
          "B",
          "U"
        ],
        "color_indicator": [
          "B",
          "U"
        ],
        "power": "3",
        "toughness": "3",
        "flavor_text": ". . . but the Chrome Host's methods were far more efficient.",
        "artist": "Alexander Mokhov",
        "artist_id": "3a6a9d37-e62c-44bd-90f2-f5126324e3f0",
        "illustration_id": "ddbcbb7d-9495-4292-86f8-1f81c448b7df",
        "image_uris": {
          "small": "https://cards.scryfall.io/small/back/d/a/dad34ae5-56b4-4394-be02-e043dc1cc23d.jpg?1682203531",
          "normal": "https://cards.scryfall.io/normal/back/d/a/dad34ae5-56b4-4394-be02-e043dc1cc23d.jpg?1682203531",
          "large": "https://cards.scryfall.io/large/back/d/a/dad34ae5-56b4-4394-be02-e043dc1cc23d.jpg?1682203531",
          "png": "https://cards.scryfall.io/png/back/d/a/dad34ae5-56b4-4394-be02-e043dc1cc23d.png?1682203531",
          "art_crop": "https://cards.scryfall.io/art_crop/back/d/a/dad34ae5-56b4-4394-be02-e043dc1cc23d.jpg?1682203531",
          "border_crop": "https://cards.scryfall.io/border_crop/back/d/a/dad34ae5-56b4-4394-be02-e043dc1cc23d.jpg?1682203531"
        }
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
      "alchemy": "not_legal",
      "paupercommander": "legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal",
      "predh": "not_legal"
    },
    "games": [
      "paper",
      "arena",
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
    "set_id": "392f7315-dc53-40a3-a2cc-5482dbd498b3",
    "set": "mom",
    "set_name": "March of the Machine",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/392f7315-dc53-40a3-a2cc-5482dbd498b3",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Amom&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/mom?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/dad34ae5-56b4-4394-be02-e043dc1cc23d/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A80ecb069-36e2-490d-9f6c-ef553c00e997&unique=prints",
    "collector_number": "88",
    "digital": false,
    "rarity": "common",
    "artist": "Alexander Mokhov",
    "artist_ids": [
      "3a6a9d37-e62c-44bd-90f2-f5126324e3f0"
    ],
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 16044,
    "penny_rank": 3762,
    "prices": {
      "usd": "0.04",
      "usd_foil": "0.08",
      "usd_etched": null,
      "eur": "0.02",
      "eur_foil": "0.08",
      "tix": "0.03"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=607117&printed=false",
      "tcgplayer_infinite_articles": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26partner%3Dscryfall%26q%3DAetherblade%2BAgent%2B%252F%252F%2BGitaxian%2BMindstinger",
      "tcgplayer_infinite_decks": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26partner%3Dscryfall%26q%3DAetherblade%2BAgent%2B%252F%252F%2BGitaxian%2BMindstinger",
      "edhrec": "https://edhrec.com/route/?cc=Aetherblade+Agent"
    },
    "purchase_uris": {
      "tcgplayer": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F492066%3Fpage%3D1",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/March-of-the-Machine/Aetherblade-Agent-Gitaxian-Mindstinger?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/110006?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  }
  


  handleUserSearch(searchCard: FilterSearchDto) {
    console.log(searchCard);
  }

  showCardDetails(card: any) {
    this.selectedCardId = card;
    this.showList = false;
  }

}
