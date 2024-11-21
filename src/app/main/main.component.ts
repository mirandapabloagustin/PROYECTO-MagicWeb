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
    "id": "29eb0e40-d184-423f-8484-ee288fda00cd",
    "oracle_id": "02718076-4c71-4bf5-988f-e6f94fbf0aef",
    "multiverse_ids": [
      555425
    ],
    "mtgo_id": 98667,
    "arena_id": 80375,
    "tcgplayer_id": 269089,
    "cardmarket_id": 652210,
    "name": "Spara's Adjudicators",
    "lang": "en",
    "released_at": "2022-04-29",
    "uri": "https://api.scryfall.com/cards/29eb0e40-d184-423f-8484-ee288fda00cd",
    "scryfall_uri": "https://scryfall.com/card/snc/224/sparas-adjudicators?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/2/9/29eb0e40-d184-423f-8484-ee288fda00cd.jpg?1664413807",
      "normal": "https://cards.scryfall.io/normal/front/2/9/29eb0e40-d184-423f-8484-ee288fda00cd.jpg?1664413807",
      "large": "https://cards.scryfall.io/large/front/2/9/29eb0e40-d184-423f-8484-ee288fda00cd.jpg?1664413807",
      "png": "https://cards.scryfall.io/png/front/2/9/29eb0e40-d184-423f-8484-ee288fda00cd.png?1664413807",
      "art_crop": "https://cards.scryfall.io/art_crop/front/2/9/29eb0e40-d184-423f-8484-ee288fda00cd.jpg?1664413807",
      "border_crop": "https://cards.scryfall.io/border_crop/front/2/9/29eb0e40-d184-423f-8484-ee288fda00cd.jpg?1664413807"
    },
    "mana_cost": "{2}{G}{W}{U}",
    "cmc": 5.0,
    "type_line": "Creature — Cat Citizen",
    "oracle_text": "When Spara's Adjudicators enters, target creature an opponent controls can't attack or block until your next turn.\n{2}, Exile Spara's Adjudicators from your hand: Target land gains \"{T}: Add {G}, {W}, or {U}\" until Spara's Adjudicators is cast from exile. You may cast Spara's Adjudicators for as long as it remains exiled.",
    "power": "4",
    "toughness": "4",
    "colors": [
      "G",
      "U",
      "W"
    ],
    "color_identity": [
      "G",
      "U",
      "W"
    ],
    "keywords": [],
    "produced_mana": [
      "G",
      "U",
      "W"
    ],
    "all_parts": [
      {
        "object": "related_card",
        "id": "93df6b13-d898-4afe-a60c-828933f5be32",
        "component": "combo_piece",
        "name": "Spara's Adjudicators",
        "type_line": "Creature — Cat Citizen",
        "uri": "https://api.scryfall.com/cards/93df6b13-d898-4afe-a60c-828933f5be32"
      },
      {
        "object": "related_card",
        "id": "f564085e-2abd-4ecc-9b7a-19a69ddabc84",
        "component": "combo_piece",
        "name": "A-Spara's Adjudicators",
        "type_line": "Creature — Cat Citizen",
        "uri": "https://api.scryfall.com/cards/f564085e-2abd-4ecc-9b7a-19a69ddabc84"
      }
    ],
    "legalities": {
      "standard": "not_legal",
      "future": "not_legal",
      "historic": "not_legal",
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
      "standardbrawl": "not_legal",
      "brawl": "not_legal",
      "alchemy": "not_legal",
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
    "set_id": "df837242-8c15-42e4-b049-c933a02dc501",
    "set": "snc",
    "set_name": "Streets of New Capenna",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/df837242-8c15-42e4-b049-c933a02dc501",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Asnc&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/snc?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/29eb0e40-d184-423f-8484-ee288fda00cd/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A02718076-4c71-4bf5-988f-e6f94fbf0aef&unique=prints",
    "collector_number": "224",
    "digital": false,
    "rarity": "common",
    "watermark": "brokers",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Aaron J. Riley",
    "artist_ids": [
      "f21b412c-aef5-4d15-88be-4f40615acde3"
    ],
    "illustration_id": "e05da8aa-ffa6-4e02-8280-58fc8a72a778",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 18328,
    "penny_rank": 12306,
    "preview": {
      "source": "Riley Knight",
      "source_uri": "https://twitter.com/RLYKNGHT/status/1514758512718794752",
      "previewed_at": "2022-04-15"
    },
    "prices": {
      "usd": "0.02",
      "usd_foil": "0.18",
      "usd_etched": null,
      "eur": "0.04",
      "eur_foil": "0.10",
      "tix": "0.01"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=555425&printed=false",
      "tcgplayer_infinite_articles": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26partner%3Dscryfall%26q%3DSpara%2527s%2BAdjudicators",
      "tcgplayer_infinite_decks": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26partner%3Dscryfall%26q%3DSpara%2527s%2BAdjudicators",
      "edhrec": "https://edhrec.com/route/?cc=Spara%27s+Adjudicators"
    },
    "purchase_uris": {
      "tcgplayer": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F269089%3Fpage%3D1",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Streets-of-New-Capenna/Sparas-Adjudicators?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/98667?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
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
