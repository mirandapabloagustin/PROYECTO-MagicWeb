import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  selectedColors: string[] = [];
  @Output() sendFiltersColors = new EventEmitter<string>();

  public handleCheckboxChange(event: Event, value: string) {
    const checkbox = event.target as HTMLInputElement;
    console.log(value);
    checkbox.checked
      ? this.selectedColors.push(value)
      : (this.selectedColors = this.selectedColors.filter(
          (color) => color !== value
      ));
    console.log("soy filtro"+this.selectedColors.join(','));
    this.sendFiltersColors.emit(this.selectedColors.join(','));
  }
}
