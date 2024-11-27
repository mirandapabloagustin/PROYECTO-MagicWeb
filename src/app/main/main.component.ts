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
  prueba=
  {
    "object": "card",
    "id": "343d01cf-9806-4c2d-a993-ddc9ed248d7f",
    "oracle_id": "e12da2a1-e390-4487-b154-69e439cb7b05",
    "multiverse_ids": [
      580490
    ],
    "mtgo_id": 103030,
    "tcgplayer_id": 283686,
    "cardmarket_id": 672630,
    "name": "Activated Sleeper",
    "lang": "en",
    "released_at": "2022-09-09",
    "uri": "https://api.scryfall.com/cards/343d01cf-9806-4c2d-a993-ddc9ed248d7f",
    "scryfall_uri": "https://scryfall.com/card/dmc/24/activated-sleeper?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/3/4/343d01cf-9806-4c2d-a993-ddc9ed248d7f.jpg?1673304862",
      "normal": "https://cards.scryfall.io/normal/front/3/4/343d01cf-9806-4c2d-a993-ddc9ed248d7f.jpg?1673304862",
      "large": "https://cards.scryfall.io/large/front/3/4/343d01cf-9806-4c2d-a993-ddc9ed248d7f.jpg?1673304862",
      "png": "https://cards.scryfall.io/png/front/3/4/343d01cf-9806-4c2d-a993-ddc9ed248d7f.png?1673304862",
      "art_crop": "https://cards.scryfall.io/art_crop/front/3/4/343d01cf-9806-4c2d-a993-ddc9ed248d7f.jpg?1673304862",
      "border_crop": "https://cards.scryfall.io/border_crop/front/3/4/343d01cf-9806-4c2d-a993-ddc9ed248d7f.jpg?1673304862"
    },
    "mana_cost": "{2}{B}",
    "cmc": 3.0,
    "type_line": "Creature — Phyrexian Shapeshifter",
    "oracle_text": "Flash\nYou may have Activated Sleeper enter as a copy of any creature card in a graveyard that was put there from the battlefield this turn, except it's a Phyrexian in addition to its other types.",
    "power": "0",
    "toughness": "0",
    "colors": [
      "B"
    ],
    "color_identity": [
      "B"
    ],
    "keywords": [
      "Flash"
    ],
    "legalities": {
      "standard": "not_legal",
      "future": "not_legal",
      "historic": "not_legal",
      "timeless": "not_legal",
      "gladiator": "not_legal",
      "pioneer": "not_legal",
      "explorer": "not_legal",
      "modern": "not_legal",
      "legacy": "legal",
      "pauper": "not_legal",
      "vintage": "legal",
      "penny": "not_legal",
      "commander": "legal",
      "oathbreaker": "legal",
      "standardbrawl": "not_legal",
      "brawl": "not_legal",
      "alchemy": "not_legal",
      "paupercommander": "not_legal",
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
    "set_id": "78076b27-f888-4723-b27c-44074accd261",
    "set": "dmc",
    "set_name": "Dominaria United Commander",
    "set_type": "commander",
    "set_uri": "https://api.scryfall.com/sets/78076b27-f888-4723-b27c-44074accd261",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Admc&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/dmc?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/343d01cf-9806-4c2d-a993-ddc9ed248d7f/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ae12da2a1-e390-4487-b154-69e439cb7b05&unique=prints",
    "collector_number": "24",
    "digital": false,
    "rarity": "rare",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Mathias Kollros",
    "artist_ids": [
      "2ae0dd12-047c-4efb-80d7-bccc3bac5fba"
    ],
    "illustration_id": "5dc4ac5e-383d-4747-b849-bb44ab46bfd1",
    "border_color": "black",
    "frame": "2015",
    "security_stamp": "oval",
    "full_art": false,
    "textless": false,
    "booster": false,
    "story_spotlight": false,
    "edhrec_rank": 6486,
    "penny_rank": 6339,
    "prices": {
      "usd": "0.95",
      "usd_foil": "1.83",
      "usd_etched": null,
      "eur": "0.72",
      "eur_foil": "1.21",
      "tix": "0.45"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=580490&printed=false",
      "tcgplayer_infinite_articles": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26partner%3Dscryfall%26q%3DActivated%2BSleeper",
      "tcgplayer_infinite_decks": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26partner%3Dscryfall%26q%3DActivated%2BSleeper",
      "edhrec": "https://edhrec.com/route/?cc=Activated+Sleeper"
    },
    "purchase_uris": {
      "tcgplayer": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F283686%3Fpage%3D1",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Commander-Dominaria-United/Activated-Sleeper?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/103030?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
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
