import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBrush } from '@fortawesome/free-solid-svg-icons';
const MODULES_IMPORTS = [FontAwesomeModule];

@Component({
  selector: 'app-button-clean',
  standalone: true,
  imports: [MODULES_IMPORTS],
  template: `
    <div class="clean__group">
      <fa-icon
        class="clean__icon-filter"
        id="nick_icon"
        [icon]="brushIcon"
      ></fa-icon>
      <span class="clean__text">Limpiar Filtro</span>
    </div>
  `,
  styles: `

    .clean__group {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--text-color);
      border-radius: 2.5rem;
      height: 2.5rem;
      line-height: 2.5rem;
      padding: 0 20px 0 20px;
      transition: .4s ease all;
      cursor: pointer;
    }

    .clean__icon-filter {
      font-size: 1.5rem;
      transform: rotate(180deg); 
    }
    .clean__text {
      font-size: 0.8rem;
      margin-left: 0.5rem;
      font-weight: 700;
    }

    .clean__group:hover {
      background-color: var(--bg-black-color);
      color: var(--text-color);
    }
  `,
})
export class ButtonCleanComponent {
  brushIcon = faBrush;
}
