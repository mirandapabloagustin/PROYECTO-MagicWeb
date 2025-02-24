import { Component, input, Input, OnInit } from '@angular/core';
import { HeaderComponent } from "@shared/header/header.component";
import { FooterComponent } from "@shared/footer/footer.component";
import { ListDecksComponent } from "./components/list-decks/list-decks.component";
import { FilterDecksComponent } from "./components/filter-decks/filter-decks.component";
import { AuthDeckService } from '@core/services/deck/auth.deck.service';
import { LocalStorageService } from '@core/services/user/local-storage.service';
import { Deck } from '@models/deck.model';
import { FilterDeckDTO } from '@models/dto/filter.deck.dto.model';

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


  getSearch(params: FilterDeckDTO) {
    this.decks = [];
    this.decks = this._service.getDecksByFilter(params);
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
        await this._service.getDecksUserId(user.id);
      }
    }catch(e){
      console.error(e);
    }
  }



}
