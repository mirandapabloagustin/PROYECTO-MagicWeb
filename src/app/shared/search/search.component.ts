import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const MODULES_IMPORTS = [FontAwesomeModule];

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MODULES_IMPORTS],
  template: `
    <div class="input__group-filter">
      <input
        type="text"
        class="input__filter"
        placeholder="Busca tu carta magic..."
      />

      <fa-icon
        class="input__icon-filter"
        id="nick_icon"
        [icon]="iconMagnifyingGlass"
      ></fa-icon>
    </div>
  `,
  styles: `
  .input__group-filter{
    position: relative;
    min-width: 500px;
}

.input__filter {
    width: 100%;
    background-color: var(--text-color);
    border: 2px solid var(--border-color);
    border-radius: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    padding: 0 45px 0 10px;
    transition: .3s ease all;
}

.input__icon-filter {
    position: absolute;
    right: 1rem;
    top: 10px;
    z-index: 100;
    font-size: 1rem;
    transition: .3s ease all;
}
`,
})
export class SearchComponent {
  iconMagnifyingGlass = faMagnifyingGlass;
}
