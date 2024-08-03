import { Component } from '@angular/core';
import { HeaderComponent } from '@app/shared/header/header.component';
import { FooterComponent } from '@app/shared/footer/footer.component';
import { MagicComponent } from './magic/magic.component';
import { GameComponent } from "./game/game.component";

const COMPONENTS = [HeaderComponent, FooterComponent, MagicComponent, GameComponent];

@Component({
  selector: 'app-about-magic',
  standalone: true,
  imports: [COMPONENTS],
  template: `
    <app-header />
    <app-magic />
    <app-game />
    <app-footer />

  `,
  styles: ``
})
export class AboutMagicComponent {

}
