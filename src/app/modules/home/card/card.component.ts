import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiScrifallService } from 'src/app/core/service/serviceApiScryfall/auth-api-scrifall.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  carta: any;

  @Input() carta2: any;

  constructor(
    private router: Router,
    private authApiScrifallService: AuthApiScrifallService
  ) { }


  async ngOnInit(): Promise<void> {
    this.getCards();
    console.log(this.carta2);
  }

  public async getCards() {
    try {
      this.carta = await this.authApiScrifallService.getApiRequestResponseCards()
      console.log(this.carta);
      console.log("hola");
    }
    catch (error) {
      console.log(error);
    }
  }

  public dataCard() {
    this.router.navigate(['/card']);
  }

}
