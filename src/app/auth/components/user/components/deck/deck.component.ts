import { Component } from '@angular/core';
import { SearchComponent } from "@shared/search/search.component";

@Component({
  selector: 'app-deck',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './deck.component.html',
  styleUrl: './deck.component.css'
})
export class DeckComponent {

  openModal() {
    console.log('Modal opened');
  }

  searchDeckInUserProfile(search: string) {
    console.log('Searching deck in user profile:', search);
  }
  

}
