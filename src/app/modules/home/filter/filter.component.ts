import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthApiScrifallService } from 'src/app/core/service/serviceApiScryfall/auth-api-scrifall.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit{

  selectedColors: string[] = [];
  typesSelectedCards:string[] = [];

  typesCards:string[] = [
    "Artifact",
    "Conspiracy",
    "Creature",
    "Enchantment",
    "Instant",
    "Land",
    "Phenomenon",
    "Plane",
    "Planeswalker",
    "Scheme",
    "Sorcery",
    "Tribal",
    "Vanguard"
  ];

  

  cmcCards:number | undefined;


  @Output() sendFiltersColors = new EventEmitter<string[]>();
  @Output() sendFiltersTypes = new EventEmitter<string[]>();
  @Output() sendFiltersCmc = new EventEmitter<number>();

  constructor(
    private authApiScryfallService: AuthApiScrifallService
  ) { }
  ngOnInit(): void {
  }


  //@param: recibe un string con el tipo de carta a buscar
  public handleCheckboxChange(event: Event, value: string) {
    const checkbox = event.target as HTMLInputElement;
    checkbox.checked
      ? this.selectedColors.push(value)
      : (this.selectedColors = this.selectedColors.filter(
          (color) => color !== value
      ));
    this.sendFiltersColors.emit(this.selectedColors);
  }
  
  public handleSelectChange(event: Event, value: string) {
    const select = event.target as HTMLInputElement;
    select.checked
      ? this.typesSelectedCards.push(value)
      : (this.typesSelectedCards = this.typesSelectedCards.filter(
          (type) => type !== value
      ));
    this.sendFiltersTypes.emit(this.typesSelectedCards);
  }

  public getCardsCmc(event: Event){
    const select = event.target as HTMLInputElement;
    this.cmcCards = Number(select.value);
    this.sendFiltersCmc.emit(this.cmcCards);
  }

}
