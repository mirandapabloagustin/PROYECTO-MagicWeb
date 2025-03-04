import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '@shared/header/header.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { FilterDecksComponent } from '@app/decks/components/filter-decks/filter-decks.component';
import { ListDecksCommunityComponent } from './componenets/list-decks-community/list-decks-community.component';
import { FilterDeckDTO } from '@models/dto/filter.deck.dto.model';
import { Deck } from '@models/deck.model';
import { AuthDeckService } from '@services/deck/auth.deck.service';


@Component({
  selector: 'app-deck-community',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FilterDecksComponent,ListDecksCommunityComponent ],
  templateUrl: './deck-community.component.html',
  styleUrl: './deck-community.component.css'
})
export class DeckCommunityComponent implements OnInit {
  decks: Deck[] = [];

  constructor(
    private _service: AuthDeckService,
  ) { }

  ngOnInit(): void {
    this.loadDecks();
  }

  async loadDecks() {
    try{
      this._service.getAllDecks();
      this._service.deckList$.subscribe((decks) => {
        this.decks = decks;
      });
    }catch(e){
      console.error(e);
    }
  }



  getSearch(search: FilterDeckDTO) {
    console.log(search);
  }

}
