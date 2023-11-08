import { Component,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';
  @Output() searchEvent = new EventEmitter<string>();


  public searchItem(){
    this.searchEvent.emit(this.searchText);
    this.searchText = '';
  }

  
}
