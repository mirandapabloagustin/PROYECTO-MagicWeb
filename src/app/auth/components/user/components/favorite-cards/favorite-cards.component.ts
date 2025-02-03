import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '@app/core/services/scroll/scroll.service';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';
import { SearchComponent } from "@shared/search/search.component";

@Component({
  selector: 'app-favorite-cards',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './favorite-cards.component.html',
  styleUrl: './favorite-cards.component.css'
})
export class FavoriteCardsComponent {
  @Input()  favCards: any[] = [];


  constructor(
    private _router: Router,
    private _snacbarService: SnackbarService,
    private _scrollService: ScrollService
  ) { }

  goToSearch() {
    this._router.navigate(['/main']);
    this._scrollService.scrollToTop();
    
  }

  searchFavCards(event: string) {
    console.log(event);
    if(this.favCards.length > 0) {
      console.log('Searching cards');
    }else{
      console.log('No cards to search');
      this._snacbarService.emitSnackbar('Lo sentimos, pero no tienes cartas guadadas...', 'error','Vuelva a intentarlo...');
    }
  }


}
