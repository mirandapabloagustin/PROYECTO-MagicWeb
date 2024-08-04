import { Component, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { AboutBannerComponent } from './about-banner/about-banner.component';
import { TeamComponent } from './team/team.component';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  AboutBannerComponent,
  TeamComponent,
];

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [COMPONENTS],
  template: `
    <app-header />
    <app-about-banner />
    <app-team />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.Emulated
})
export class AboutUsComponent {}
