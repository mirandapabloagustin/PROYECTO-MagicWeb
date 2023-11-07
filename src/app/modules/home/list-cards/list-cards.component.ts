import { Component ,OnInit} from '@angular/core';
import { AuthApiScrifallService } from 'src/app/core/service/serviceApiScryfall/auth-api-scrifall.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit{
  dataApiResponse: any;

  constructor(
    private authApiScrifallService: AuthApiScrifallService
  ) { }

  async ngOnInit(): Promise<void> {

  }

  public async getCards(){
    await this.authApiScrifallService.getApiRequestResponseCards().then
    (data => {
      this.dataApiResponse = data;
      console.log(this.dataApiResponse);
    });
  }

  


}
