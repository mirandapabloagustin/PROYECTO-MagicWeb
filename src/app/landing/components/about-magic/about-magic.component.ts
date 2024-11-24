import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
register();


@Component({
  selector: 'app-about-magic',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './about-magic.component.html',
  styleUrl: './about-magic.component.css'
})
export class AboutMagicComponent {

  

}
