import { Component, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from '@shared/header/header.component';
import { BannerComponent } from './banner/banner.component';
import { OfferComponent } from './offer/offer.component';
import { FooterComponent } from '../../shared/footer/footer.component';

const SHARED_COMPONENTS = [HeaderComponent, BannerComponent, OfferComponent];

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [SHARED_COMPONENTS, FooterComponent],
  template: `
    <app-header />

    <app-banner />
    <app-offer />

    <app-footer />
  `,
  styles: `
  `,
  encapsulation: ViewEncapsulation.Emulated,
})
export class LandingComponent {}
