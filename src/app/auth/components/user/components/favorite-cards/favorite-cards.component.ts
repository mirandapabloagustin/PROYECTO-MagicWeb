import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '@app/core/services/scroll/scroll.service';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';
import { SearchComponent } from "@shared/search/search.component";
import { CardComponent } from "../../../../../shared/card/card.component";
import { DetailsCardComponent } from "../../../../../shared/details-card/details-card.component";
import { User } from '@app/core/models/user.model';
import { LocalStorageService } from '@app/core/services/user/local-storage.service';

@Component({
  selector: 'app-favorite-cards',
  standalone: true,
  imports: [SearchComponent, CardComponent, DetailsCardComponent],
  templateUrl: './favorite-cards.component.html',
  styleUrl: './favorite-cards.component.css'
})
export class FavoriteCardsComponent implements OnInit {
  @Input() favCards: any[] = [];
  private userLogged!: User;
  isSelect: boolean = false;
  cardSelectedData: any;


  constructor(
    private _router: Router,
    private _local: LocalStorageService,
    private _snacbarService: SnackbarService,
    private _scrollService: ScrollService
  ) { }

  ngOnInit(): void {
    this.userLogged = this._local.getUserLogged();
    this.favCards = this.userLogged.favCards!;

  }

  goToSearch() {
    this._router.navigate(['/main']);
    this._scrollService.scrollToTop();
    
  }

  searchFavCards(event: string) {
      const search = this.favCards.filter((card) => card.name.toLowerCase().includes(event.toLowerCase()));
      if(search.length > 0){
        this.favCards = search;
      }else{
        this._snacbarService.emitSnackbar('No se encontraron resultados.', 'warning','Volver a intentar.');	
      }
  }

  showCardSelected(event: any) {
    this.cardSelectedData = event;
    this.isSelect = true
  }

  closeDetails(){

  }


}
