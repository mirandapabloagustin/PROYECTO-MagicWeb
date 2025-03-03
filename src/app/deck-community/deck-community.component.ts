import { Component } from '@angular/core';
import { HeaderComponent } from '@app/shared/header/header.component';
import { FooterComponent } from '@app/shared/footer/footer.component';
import { FilterDecksComponent } from '@app/decks/components/filter-decks/filter-decks.component';
import { ListDecksComponent } from "../decks/components/list-decks/list-decks.component";
import { FilterDeckDTO } from '@app/core/models/dto/filter.deck.dto.model';
import { Deck } from '@app/core/models/deck.model';


@Component({
  selector: 'app-deck-community',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FilterDecksComponent, ListDecksComponent],
  templateUrl: './deck-community.component.html',
  styleUrl: './deck-community.component.css'
})
export class DeckCommunityComponent {
  deckList!: Deck[];


  getSearch(search: FilterDeckDTO) {
    console.log(search);
  }

}
