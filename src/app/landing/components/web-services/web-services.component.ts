import { Component } from '@angular/core';
import { CardServiceComponent } from '@app/shared/card-service/card-service.component';



@Component({
  selector: 'app-web-services',
  standalone: true,
  imports: [CardServiceComponent],
  templateUrl: './web-services.component.html',
  styleUrl: './web-services.component.css'
})
export class WebServicesComponent {

  services = [
    {
      title: 'Crea',
      description: 'Desarrolla tus propias estrategias para vencer a tus oponentes.',
      icon: 'icons/bombilla.png'
    },
    {
      title: 'Descubre',
      description: 'Encuentra nuevas posibilidades para tus estategias en nuestra web.',
      icon: 'icons/lupa.png'
    },
    {
      title: 'Comparte',
      description: 'Vizualiza tus decks y comparte tus estrategias con la comunidad.',
      icon: 'icons/compartir.png'
    },
    {
      title: 'Vota',
      description: 'Vota las estrategias de otros usuarios y ayuda a mejorar la comunidad.',
      icon: 'icons/voto-positivo.png'
    },
    {
      title: 'Comenta',
      description: 'Nuestros usuarios son importantes, comenta y comparte tus ideas.',
      icon: 'icons/comentario.png'
    },
    {
      title:'Personaliza',
      description: 'Deja tu huella en la comunidad, personaliza tu perfil y tus estrategias.',
      icon: 'icons/personalizar.png'
    }
  ];

}
