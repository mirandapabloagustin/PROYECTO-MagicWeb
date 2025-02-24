import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deck } from '@app/core/models/deck.model';
import { HeaderComponent } from '@shared/header/header.component';
import { FooterComponent } from "@shared/footer/footer.component";
import { AuthDeckService } from '@app/core/services/deck/auth.deck.service';
import { EmptyComponent } from '@app/shared/empty/empty.component';
@Component({
  selector: 'app-view-deck',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, EmptyComponent],
  templateUrl: './view-deck.component.html',
  styleUrl: './view-deck.component.css'
})
export class ViewDeckComponent implements OnInit {
  deckDetails!: Deck;
  fake: Deck = {
    id: '1234',
    userId: '5678',
    name: 'Amorfeus Analalum Rotoruz',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut consequatur accusantium at facere tempora labore quia exercitationem obcaecati.',
    imgDeck: 'https://cards.scryfall.io/art_crop/front/9/8/98739789-80b5-4224-a2e4-09e00654aa9d.jpg?1637082308',
    tags: ['agro', 'control'],
    createdAt: new Date(),
    updatedAt: new Date(),
    manaRatio: 0,
    colors: ['R', 'B','U','G','W','MANA'],
    votes: 0,
    cards: []
  }


  constructor(
    private _router: ActivatedRoute,
    private _service : AuthDeckService
  ) { }

  ngOnInit(): void {
    this._router.paramMap.subscribe(params => {
      const id = params.get('idDeck');
      if(id) {
        this.getDeckById(id);
      }
    })
  }

  async getDeckById(id: string):Promise<void>{
    try {
      const deck = await this._service.getDeckById(id);
      this.deckDetails = deck;
    } catch (e) {
      console.error(e);
    }
  }

  getDeckColorImg(color: string) {
    return `./icons/cards_icons/${color}.svg`;
  }

  formartDate(date: Date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  transformDate(value : string, deck: Deck):string {
    if(value === 'create') {
      return this.formartDate(deck?.createdAt || new Date());
    } else {
      return this.formartDate(deck?.updatedAt || new Date());
    }
  }


}
