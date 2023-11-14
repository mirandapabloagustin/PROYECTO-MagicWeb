import { Component, Input, OnInit } from '@angular/core';
import { AuthApiScrifallService } from 'src/app/core/service/serviceApiScryfall/auth-api-scrifall.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {

  @Input() filterCardsValue: string[] = [];
  @Input() filterCardsTypeValue: string[] = [];
  @Input() filterCardsCmcValue: number = 0;

  //variables
  dataApiResponse: any;
  dataApiResponseColection: any[] = [];
  searchText: string = '';
  searchConfirm: boolean = false;
  numberPage: number = 0;
  numberPagePrevious: number = 0;
  numberPageNext: number = 0;


  //constructor
  constructor(
    private authApiScrifallService: AuthApiScrifallService
  ) { }


  //metodos
  async ngOnInit(): Promise<void> {
    this.numberPage = 1;
    this.loadCards();
  }


  //@param: recibe un string con el nombre de la carta
  // @return: retorna un arreglo con la data de la api
  public async loadCards() {
    try {
      let data = await this.authApiScrifallService.getAllsCardsApi(this.numberPage);
      this.dataApiResponseColection = data;
    } catch (error) {
      console.log(error);
    }
  }

  
  public async searchElementApi() {
    this.searchConfirm = true;
    this.numberPage = 1;
    try {
      if (this.searchText.length == 0 && this.filterCardsValue.length == 0 && this.filterCardsTypeValue.length == 0 && this.filterCardsCmcValue == 0) {
        this.loadCards();
      } else {
        let data = await this.authApiScrifallService.getCardsWithParamApi(
          this.searchText,
          this.filterCardsValue.join(","),
          this.filterCardsTypeValue.join(","),
          this.filterCardsCmcValue,
          this.numberPage
        );

        this.dataApiResponseColection.splice(0, this.dataApiResponseColection.length);
        this.dataApiResponseColection = data;

        const element1 = document.getElementById('button-previous');
        element1?.removeAttribute('disabled');
        const element2 = document.getElementById('button-next');
        element2?.removeAttribute('disabled');
      }

    } catch (error) {
      console.log(error);
    }
  }

  public async getPageNext() {
    try {
      let data = await this.authApiScrifallService.getAllsCardsApi(this.numberPage + 1);

      if (data.length > 0) {
        this.dataApiResponseColection.splice(0, this.dataApiResponseColection.length);
        this.numberPage++;
        this.dataApiResponseColection = data;
        const element = document.getElementById('button-previous');
        element?.removeAttribute('disabled');
      } else {
        const element = document.getElementById('button-next');
        element?.setAttribute('disabled', 'true');
        this.dataApiResponseColection = data;
      }

    } catch (error) {
      console.log(error);
    }
  }

  public async getPagePrevious() {
    try {
      let data = await this.authApiScrifallService.getAllsCardsApi(this.numberPage - 1);
      if (data.length > 0 && this.numberPage > 1) {
        this.dataApiResponseColection.splice(0, this.dataApiResponseColection.length);
        this.numberPage--;
        this.dataApiResponseColection = data;
      } else {
        const element = document.getElementById('button-previous');
        element?.setAttribute('disabled', 'true');
      }
    } catch (error) {
      console.log(error);
    }
  }


  public async searchPagePrevious() {
    try {
      this.numberPage++;
      let data = await this.authApiScrifallService.getCardsWithParamApi(
        this.searchText,
        this.filterCardsValue.join(","),
        this.filterCardsTypeValue.join(","),
        this.filterCardsCmcValue,
        this.numberPage
      );
      if (data.length > 0) {
        this.dataApiResponseColection.splice(0, this.dataApiResponseColection.length);
        this.dataApiResponseColection = data;
      } else {
        this.numberPage--;
        const element = document.getElementById('button-previous');
        element?.setAttribute('disabled', 'true');
      }
    } catch (error) {
      console.log(error);
    }
  }



  public async searchPageNext() {
    try {
      this.numberPage++;
      let data = await this.authApiScrifallService.getCardsWithParamApi(
        this.searchText,
        this.filterCardsValue.join(","),
        this.filterCardsTypeValue.join(","),
        this.filterCardsCmcValue,
        this.numberPage
      );
      if (data.length > 0) {
        this.dataApiResponseColection.splice(0, this.dataApiResponseColection.length);
        this.dataApiResponseColection = data;
        const element = document.getElementById('button-previous');
        element?.removeAttribute('disabled');
      } else {
        this.numberPage--;
        const element = document.getElementById('button-next');
        element?.setAttribute('disabled', 'true');
      }
    } catch (error) {
      console.log(error);
    }
  }




}
