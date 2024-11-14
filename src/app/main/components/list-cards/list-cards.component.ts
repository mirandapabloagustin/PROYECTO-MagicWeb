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
      "edhrec_rank": 2297,
      "penny_rank": 936,
      "prices": {
        "usd": "2.49",
        "usd_foil": "2.79",
        "eur": "1.01",
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
    }
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
