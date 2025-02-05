import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { ListDecksComponent } from "./components/list-decks/list-decks.component";
import { FilterDecksComponent } from "./components/filter-decks/filter-decks.component";
import { SearchComponent } from "../shared/search/search.component";

@Component({
  selector: 'app-decks',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ListDecksComponent, FilterDecksComponent, SearchComponent],
  templateUrl: './decks.component.html',
  styleUrl: './decks.component.css'
})
export class DecksComponent {
  @Input() decks: any;

  constructor() {}

  

}
