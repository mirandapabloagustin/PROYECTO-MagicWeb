import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { ListDecksComponent } from "./components/list-decks/list-decks.component";
import { FilterDecksComponent } from "./components/filter-decks/filter-decks.component";
import { User } from '@app/core/models/user.model';

@Component({
  selector: 'app-decks',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ListDecksComponent, FilterDecksComponent],
  templateUrl: './decks.component.html',
  styleUrl: './decks.component.css'
})
export class DecksComponent implements OnInit {
  userLogged: User = new User();
  @Input() decksUser: any;

  constructor() {}


  getSearch($event: any) {
    console.log('Search event', $event);
  }

  fakeList = [
    {
      id:'1234',
      userId: '5678',
      name: 'Deck 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut consequatur accusantium at facere tempora labore quia exercitationem obcaecati.',
      imgDeck: 'https://cards.scryfall.io/art_crop/front/9/8/98739789-80b5-4224-a2e4-09e00654aa9d.jpg?1637082308',
      tags: ['agro', 'control'],
      createdAt: new Date(),
      updatedAt: new Date(),
      manaRatio: 0,
      colors: ['R', 'B'],
      votes: 0,
      cards: []
    },
    {
      id:'1212',
      userId:'2323',
      name: 'Deck 2',
      description: 'This is a deck description',
      imgDeck: 'https://cards.scryfall.io/art_crop/front/9/8/98739789-80b5-4224-a2e4-09e00654aa9d.jpg?1637082308',
      tags: ['agro', 'control'],
      createdAt: new Date(),
      updatedAt: new Date(),
      manaRatio: 0,
      colors: ['R', 'U'],
      votes: 0,
      cards: []
    },
    {
      id:'1234',
      userId: '5678',
      name: 'Deck 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut consequatur accusantium at facere tempora labore quia exercitationem obcaecati.',
      imgDeck: 'https://cards.scryfall.io/art_crop/front/9/8/98739789-80b5-4224-a2e4-09e00654aa9d.jpg?1637082308',
      tags: ['agro', 'control'],
      createdAt: new Date(),
      updatedAt: new Date(),
      manaRatio: 0,
      colors: ['G', 'W'],
      votes: 0,
      cards: []
    },
    {
      id:'1234',
      userId: '5678',
      name: 'Deck 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut consequatur accusantium at facere tempora labore quia exercitationem obcaecati.',
      imgDeck: 'https://cards.scryfall.io/art_crop/front/9/8/98739789-80b5-4224-a2e4-09e00654aa9d.jpg?1637082308',
      tags: ['agro', 'control'],
      createdAt: new Date(),
      updatedAt: new Date(),
      manaRatio: 0,
      colors: ['R', 'R'],
      votes: 0,
      cards: []
    }
  ]

  ngOnInit() {

  }



}
