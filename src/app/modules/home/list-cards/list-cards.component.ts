import { Component, Input, OnInit } from '@angular/core';
import { Card, Image_uris } from 'src/app/core/Models';
import { AuthApiScrifallService } from 'src/app/core/service/serviceApiScryfall/auth-api-scrifall.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {
  //variables
  dataApiResponse: any;
  dataApiResponseColection: any[] = [];
  searchText: string = '';
  page: number = 1;


  //constructor
  constructor(
    private authApiScrifallService: AuthApiScrifallService
  ) { }


  //metodos
  async ngOnInit(): Promise<void> {
    this.loadCards();
  }


  //@param: recibe un string con el nombre de la carta
  // @return: retorna un arreglo con la data de la api
  public async loadCards() {
    try {
      let data = await this.authApiScrifallService.getCardsApi();
      this.dataApiResponseColection = data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  public async searchElementApi() {
    try{
      let data = await this.authApiScrifallService.getCardByNameApi(this.searchText);
      this.dataApiResponseColection = data;
      console.log(data);
    }catch(error){
      console.log(error);
    }
  }

  public async nextPage() {
    this.dataApiResponseColection = [];
    try {
      this.page = this.page + 1;
      let data = await this.authApiScrifallService.getPageNextApi(this.page);
      this.dataApiResponseColection = data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }


  public async previousPage() {
    try {
      if (this.page > 1) {
        this.page = this.page - 1;
        this.dataApiResponseColection = [];
        let data = await this.authApiScrifallService.getPageNextApi(this.page);
        this.dataApiResponseColection = data;
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }




}
