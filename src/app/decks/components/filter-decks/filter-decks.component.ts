import { Component } from '@angular/core';
import { SearchComponent } from "@shared/search/search.component";

@Component({
  selector: 'app-filter-decks',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './filter-decks.component.html',
  styleUrl: './filter-decks.component.css'
})
export class FilterDecksComponent {

}
