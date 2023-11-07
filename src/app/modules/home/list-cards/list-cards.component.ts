import { Component ,OnInit} from '@angular/core';
import { async } from 'rxjs';
import { AuthApiScrifallService } from 'src/app/core/service/serviceApiScryfall/auth-api-scrifall.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit{
  dataApiResponse: any;
  dataApiResponseColection: any;
  randomShowCard: any []= [];

  constructor(
    private authApiScrifallService: AuthApiScrifallService
  ) { }

  async ngOnInit(): Promise<void> {
    this.loadRandomCard();
  }



  public async loadRandomCard() {
    try {
      this.dataApiResponseColection = await this.authApiScrifallService.getApiRequestResponseCards();
    }
    catch (error) {
      console.log(error);
    }
  }
  


}
