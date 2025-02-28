import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty',
  standalone: true,
  imports: [],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.css'
})
export class EmptyComponent {
  /**
   * @description
   * Esta propiedad se encarga de setear el título del componente.
  */
 @Input() title!: string ;
  /**
   * @description
   * Esta propiedad se encarga de setear el mensaje del componente.
   */
 @Input() message!: string ;
  /**
   * @description
   * Esta propiedad se encarga de habilitar o deshabilitar el botón.
   */
  @Input() habilited: boolean = true;
  /**
   * @description
   * Esta propiedad se encarga de setear el texto del botón.
   */
  @Input() buttonLabel!: string;
  /**
   * @description
   * Esta propiedad recibe una función que se ejecutará al hacer click en el botón habilitado.
   */
  @Input() redirectLinkFuntion!: () => void;
}
