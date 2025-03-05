import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '@shared/header/header.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { FilterDecksComponent } from '@app/decks/components/filter-decks/filter-decks.component';
import { ListDecksCommunityComponent } from './componenets/list-decks-community/list-decks-community.component';
import { FilterDeckDTO } from '@models/dto/filter.deck.dto.model';
import { Deck } from '@models/deck.model';
import { AuthDeckService } from '@services/deck/auth.deck.service';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';


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
    private _snackBar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.loadDecks();
  }

  async loadDecks() {
    try{
      this._service.getAllDecks();
      this._service.deckList$.subscribe((decks) => {
        this.decks = this.orderByVotes(decks);
      });
    }catch(e){
      console.error(e);
    }
  }

  getSearch(search: FilterDeckDTO) {
    const response = this._service.getDecksByFilter(search);
    if(response.length > 0){
      this.decks = this.orderByVotes(response);
    }else{
      this.loadDecks();
      this._snackBar.emitSnackbar('No se encontraron mazos acordes a tu busqueda.','info','Vuelve a intentarlo.');
    }
  }

  private orderByVotes(deck: Deck[]): Deck[] {
    return deck.sort((a, b) => (a.votesUser! < b.votesUser!) ? 1 : -1);
  }

}
