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
  prueba= {
    "object": "card",
    "id": "b769ba9e-2ac8-48a9-9f45-23a4ccd0cb96",
    "oracle_id": "ac2173f9-f223-440a-9231-fd98762bdc6f",
    "multiverse_ids": [],
    "tcgplayer_id": 239621,
    "tcgplayer_etched_id": 239399,
    "cardmarket_id": 566136,
    "name": "Force of Negation",
    "lang": "en",
    "released_at": "2021-06-18",
    "uri": "https://api.scryfall.com/cards/b769ba9e-2ac8-48a9-9f45-23a4ccd0cb96",
    "scryfall_uri": "https://scryfall.com/card/h1r/9/force-of-negation?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/b/7/b769ba9e-2ac8-48a9-9f45-23a4ccd0cb96.jpg?1630616412",
      "normal": "https://cards.scryfall.io/normal/front/b/7/b769ba9e-2ac8-48a9-9f45-23a4ccd0cb96.jpg?1630616412",
      "large": "https://cards.scryfall.io/large/front/b/7/b769ba9e-2ac8-48a9-9f45-23a4ccd0cb96.jpg?1630616412",
      "png": "https://cards.scryfall.io/png/front/b/7/b769ba9e-2ac8-48a9-9f45-23a4ccd0cb96.png?1630616412",
      "art_crop": "https://cards.scryfall.io/art_crop/front/b/7/b769ba9e-2ac8-48a9-9f45-23a4ccd0cb96.jpg?1630616412",
      "border_crop": "https://cards.scryfall.io/border_crop/front/b/7/b769ba9e-2ac8-48a9-9f45-23a4ccd0cb96.jpg?1630616412"
    },
    "mana_cost": "{1}{U}{U}",
    "cmc": 3.0,
    "type_line": "Instant",
    "oracle_text": "If it's not your turn, you may exile a blue card from your hand rather than pay this spell's mana cost.\nCounter target noncreature spell. If that spell is countered this way, exile it instead of putting it into its owner's graveyard.",
    "colors": [
      "U"
    ],
    "color_identity": [
      "U"
    ],
    "keywords": [],
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
      "paupercommander": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal",
      "predh": "not_legal"
    },
    "games": [
      "paper"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": false,
    "finishes": [
      "foil",
      "etched"
    ],
    "oversized": false,
    "promo": false,
    "reprint": true,
    "variation": false,
    "set_id": "7b3294cf-104e-43fb-8170-add3e78faca7",
    "set": "h1r",
    "set_name": "Modern Horizons 1 Timeshifts",
    "set_type": "draft_innovation",
    "set_uri": "https://api.scryfall.com/sets/7b3294cf-104e-43fb-8170-add3e78faca7",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ah1r&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/h1r?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/b769ba9e-2ac8-48a9-9f45-23a4ccd0cb96/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Aac2173f9-f223-440a-9231-fd98762bdc6f&unique=prints",
    "collector_number": "9",
    "digital": false,
    "rarity": "rare",
    "watermark": "wotc",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Paul Scott Canavan",
    "artist_ids": [
      "c19bfb77-5099-4f7c-8585-6eaf367712c9"
    ],
    "illustration_id": "ac811f1c-0e04-4eb5-a666-9bacc7c30d2f",
    "border_color": "black",
    "frame": "1997",
    "full_art": false,
    "textless": false,
    "booster": false,
    "story_spotlight": false,
    "promo_types": [
      "boosterfun"
    ],
    "edhrec_rank": 235,
    "preview": {
      "source": "Wizards of the Coast",
      "source_uri": "https://www.twitch.tv/videos/1029499176",
      "previewed_at": "2021-05-20"
    },
    "prices": {
      "usd": null,
      "usd_foil": "87.92",
      "usd_etched": "50.29",
      "eur": null,
      "eur_foil": "80.96",
      "tix": null
    },
    "related_uris": {
      "tcgplayer_infinite_articles": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26partner%3Dscryfall%26q%3DForce%2Bof%2BNegation",
      "tcgplayer_infinite_decks": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26partner%3Dscryfall%26q%3DForce%2Bof%2BNegation",
      "edhrec": "https://edhrec.com/route/?cc=Force+of+Negation"
    },
    "purchase_uris": {
      "tcgplayer": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F239621%3Fpage%3D1",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Modern-Horizons-Retro-Frame-Cards/Force-of-Negation-V1?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Force+of+Negation&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
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
