import { Component, Input, OnInit } from '@angular/core';
import { DeckCard } from 'src/app/core/Models';
import { AuthApiScrifallService } from 'src/app/core/service/serviceApiScryfall/auth-api-scrifall.service';

@Component({
  selector: 'app-deck-show',
  templateUrl: './deck-show.component.html',
  styleUrls: ['./deck-show.component.css'],
})
export class DeckShowComponent implements OnInit {
  @Input() cardsDeckUser: any;
  deckCard: any[]=[];

  constructor(
    private authApi: AuthApiScrifallService
  ) { }

  ngOnInit(): void {
    //this.deckCard = this.cartasdelmazo();
   }

  public async cartasdelmazo() {
    let carta: any[]=[] ;
    try {
      for (let i = 0; i < this.cardsDeckUser.cards.length; i++) {
        carta.push(
          await this.authApi.getCardByIdentifier(this.cardsDeckUser.cards[i].id));
      }
      console.log(carta);
    } catch (error) {
      console.log(error);
    }
  }




}


