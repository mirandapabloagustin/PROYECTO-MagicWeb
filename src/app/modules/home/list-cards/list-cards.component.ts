import { Component ,OnInit} from '@angular/core';
import { Card, Image_uris } from 'src/app/core/Models';
import { AuthApiScrifallService } from 'src/app/core/service/serviceApiScryfall/auth-api-scrifall.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit{
  imgReverso: Image_uris = {
    small: "assets/reverso-magic-small.png",
    normal: "assets/reverso-magic.png",
    large: null,
    png: null,
    art_crop: null,
    border_crop: null,
  };

  cardTReload: Card = {
    id: null,
    nameCard: null,
    image_uris: this.imgReverso,
    mana_cost: null,
    colors: null,
  };
  dataApiResponse: any;
  dataApiResponseColection: any[] =[];

  randomCards: Card [] | any = new Array(8).fill(this.cardTReload);

  constructor(
    private authApiScrifallService: AuthApiScrifallService
  ) { }

  async ngOnInit(): Promise<void> {
    this.dataApiResponseColection = this.randomCards;
    this.loadRandomCard();

  }



  public async loadRandomCard() {
    try {
      for (let i = 0; i < 8; i++) {
        this.dataApiResponse = await this.authApiScrifallService.getApiRequestResponseCards();
        for (let j = 0; j < this.dataApiResponse.length; j++) {
          this.randomCards[i] = this.dataApiResponse[j];
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  


}
