import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deck } from '@app/core/models/deck.model';
import { HeaderComponent } from '@shared/header/header.component';
import { FooterComponent } from "@shared/footer/footer.component";
import { AuthDeckService } from '@app/core/services/deck/auth.deck.service';
import { EmptyComponent } from '@app/shared/empty/empty.component';

@Component({
  selector: 'app-view-deck',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, EmptyComponent],
  templateUrl: './view-deck.component.html',
  styleUrl: './view-deck.component.css'
})

export class ViewDeckComponent implements OnInit {
  deckDetails!: Deck;
  types: any[] = [];
  @Input() isPublic: boolean = false;
  constructor(
    private _router: ActivatedRoute,
    private _service : AuthDeckService
  ) { }

  ngOnInit(): void {
    this._router.paramMap.subscribe(params => {
      const id = params.get('idDeck');
      if(id) {
        this.getDeckById(id);
       
      }
    })
  }

  async getDeckById(id: string):Promise<void>{
    try {
      const deck = await this._service.getDeckById(id);
      this.deckDetails = deck;
      if(this.deckDetails.cards!.length > 0) {
        this.types = this.organizeByTypes(this.deckDetails);
      }
    } catch (e) {
      console.error(e);
    }
  }

  organizeByTypes(deck: Deck): any[] {
    const types = deck.cards!.reduce((acc, card) => {
      if (!card.type_line) return acc; 
      const mainType = card.type_line.split("—")[0].trim();
      if (!acc[mainType]) {
        acc[mainType] = [];
      }
      acc[mainType].push(card);
      return acc; 
    }, {} as Record<string, any[]>); // indico que 
    return Object.entries(types);
  }

  contentTypes(type: string): boolean {
    return  this.types.some(t => t.includes(type));  
  }

  getDeckColorImg(color: string) {
    return `./icons/cards_icons/${color}.svg`;
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  
  getFormatDate(value: string) {
    const date = new Date(value);
    return this.formatDate(date);
  }


}
