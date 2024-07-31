import { Component, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from '@shared/header/header.component';
import { BannerComponent } from './banner/banner.component';
import { OfferComponent } from './offer/offer.component';

const SHARED_COMPONENTS = [HeaderComponent, BannerComponent, OfferComponent];

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [SHARED_COMPONENTS],
  template: `
  
    <app-header />
 
      <app-banner />
      <app-offer />

    

  `,
  styles: `
  `,
  encapsulation: ViewEncapsulation.Emulated,
})
export class LandingComponent {}
