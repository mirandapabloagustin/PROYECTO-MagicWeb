import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthApiScrifallService } from 'src/app/core/service/serviceApiScryfall/auth-api-scrifall.service';
import { PopupCardComponent } from '../popup-card/popup-card.component';


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
    private authApiScrifallService: AuthApiScrifallService,
    private dialog: MatDialog,
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


OpenPopupCard(){
  var _popup = this.dialog.open(PopupCardComponent,{
    width: '60%',
    enterAnimationDuration:'500ms',
    exitAnimationDuration:'500ms',
    data:{
      title: "Aca va el nombre de la carta",
    }
       // this.router.navigate(['/card']);
  });

_popup.afterClosed().subscribe(item => {
  console.log(item);
})



}}
