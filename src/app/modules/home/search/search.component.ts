import { Component,Output,EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';
  actionSearch: boolean = false;


  @Output() searchAction = new EventEmitter<boolean>();
  @Output() searchEvent = new EventEmitter<string>();
  

  public searchItem() {
    if (this.searchText.length > 0) {
      this.actionSearch = true;
      this.searchAction.emit(this.actionSearch);
      this.searchEvent.emit(this.searchText);
    } else {
      this.actionSearch = false;
      this.searchAction.emit(this.actionSearch);
    }
  }


}
