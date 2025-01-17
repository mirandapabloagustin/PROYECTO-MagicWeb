import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faFilter,
  faDroplet,
  faPalette,
  faLayerGroup,
  faFingerprint,
} from '@fortawesome/free-solid-svg-icons';
import { SearchComponent } from '../../../shared/search/search.component';
import { CommonModule } from '@angular/common';
import { FilterSearchDto } from '@app/core/models/dto/filter.search.dto.model';
import { MANA_OPTIONS } from './constants/mana-options';
import { COLOR_OPTIONS } from './constants/color-options';
import { TYPE_OPTIONS } from './constants/type-options';
import { FORMAT_OPTIONS } from './constants/format-options';
import { FormsModule } from '@angular/forms';

const MODULES = [
  SearchComponent,
  FontAwesomeModule,
  CommonModule,
  FormsModule,
];

@Component({
  selector: 'app-filter-panel',
  standalone: true,
  imports: [...MODULES],
  templateUrl: './filter-panel.component.html',
  styleUrl: './filter-panel.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class FilterPanelComponent {
  @Output() searchUserEvent = new EventEmitter<FilterSearchDto>();
  cardSearch: FilterSearchDto = new FilterSearchDto();
  icons = [faBars, faDroplet, faFilter];

  selectsProperties = [
    {
      icon: faPalette,
      title: 'Color',
      options: COLOR_OPTIONS
    },
    {
      icon: faDroplet,
      title: 'Mana',
      options: MANA_OPTIONS
    },
    {
      icon: faLayerGroup,
      title: 'Tipo',
      options: TYPE_OPTIONS
    },
    {
      icon: faFingerprint,
      title: 'Formato',
      options: FORMAT_OPTIONS
    }
  ]

  handleSearch(searchCard: string) {
    this.cardSearch.q = searchCard;
    this.searchUserEvent.emit(this.cardSearch);
    this.cardSearch = new FilterSearchDto();
  }

}
