import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { ListDecksComponent } from "./components/list-decks/list-decks.component";
import { FilterDecksComponent } from "./components/filter-decks/filter-decks.component";
import { AuthDeckService } from '@app/core/services/deck/auth.deck.service';
import { LocalStorageService } from '@app/core/services/user/local-storage.service';
import { Deck } from '@app/core/models/deck.model';

@Component({
  selector: 'app-decks',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ListDecksComponent, FilterDecksComponent],
  templateUrl: './decks.component.html',
  styleUrl: './decks.component.css'
})
export class DecksComponent implements OnInit {
  decks: Deck[] = [];
  constructor(
    private _service: AuthDeckService,
    private _local : LocalStorageService,
  ) {}


  getSearch($event: any) {
    console.log('Search event', $event);
  }

  ngOnInit() {
    this.loadDecks();
    this._service.deckList$.subscribe((decks) => {
      this.decks = decks;
    });

  }

  async loadDecks(){
    try{
      const user = this._local.getUserLogged();
      if(user.id){
        await this._service.getDecksId(user.id);
      }
    }catch(e){
      console.error(e);
    }
  }



}
