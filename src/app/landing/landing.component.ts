import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { WebServicesComponent } from "./components/web-services/web-services.component";
import { AboutMagicComponent } from "./components/about-magic/about-magic.component";
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";

const MODULES = [
  BannerComponent,
  WebServicesComponent,
  AboutMagicComponent
];

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [...MODULES, HeaderComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
