import { Component, } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {

  selectCardsFilterColor: string []=[];
  selectCardsFilterType: string []=[];
  selectCardsFilterCmc: number = 0;
  
  constructor(
  ) { }

  ngOnInit(): void {

  }

  public sendsColorSelection(evento : string[]){
    this.selectCardsFilterColor = evento;
  }

  public sendsTypeSelection(evento : string[]){
    this.selectCardsFilterType = evento;
  }

  public sendsCmcSelection(evento : number){
    this.selectCardsFilterCmc = evento;
  }


  
}
