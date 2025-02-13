import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deck } from '@app/core/models/deck.model';
import { HeaderComponent } from '@shared/header/header.component';
import { FooterComponent } from "@shared/footer/footer.component";

@Component({
  selector: 'app-view-deck',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './view-deck.component.html',
  styleUrl: './view-deck.component.css'
})
export class ViewDeckComponent implements OnInit {
  deckDetails: Deck | undefined;
  fake: Deck = {
    id: '1234',
    userId: '5678',
    name: 'Deck Name',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut consequatur accusantium at facere tempora labore quia exercitationem obcaecati.',
    imgDeck: 'https://cards.scryfall.io/art_crop/front/9/8/98739789-80b5-4224-a2e4-09e00654aa9d.jpg?1637082308',
    tags: ['agro', 'control'],
    createdAt: new Date(),
    updatedAt: new Date(),
    manaRatio: 0,
    colors: ['R', 'B'],
    votes: 0,
    cards: []
  }


  constructor(
    private _router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._router.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id);
    })
  }


}
