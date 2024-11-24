import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { WebServicesComponent } from "./components/web-services/web-services.component";
import { AboutMagicComponent } from "./components/about-magic/about-magic.component";

const MODULES = [
  BannerComponent,
  WebServicesComponent,
  AboutMagicComponent
];

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [...MODULES],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
