import { Component } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent {
  currentSlideIndex = 0;
  private intervalId: any;

  ngOnInit() {
    this.startSlideInterval();
  }

  ngOnDestroy() {
    this.stopSlideInterval();
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  startSlideInterval() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 10000); // Cambia de diapositiva cada 5 segundos (5000 milisegundos)
  }

  stopSlideInterval() {
    clearInterval(this.intervalId);
  }

  slides = [
    {
      title: "Slide 1",
      src: "../../../assets/carrousel_img/img1.jpg"
    },
    {
      title: "Slide 2",
      src: "../../../assets/carrousel_img/img2.jpg"
    },
    // Agrega más objetos de diapositivas según necesites
  ];
}
