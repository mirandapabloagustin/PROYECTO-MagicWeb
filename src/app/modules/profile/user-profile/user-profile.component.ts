import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/Models';
import { Card } from 'src/app/core/Models';
import { AuthTareaService } from 'src/app/core/service/auth-tarea.service';
import { AuthApiScrifallService } from 'src/app/core/service/serviceApiScryfall/auth-api-scrifall.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  //variable que va a recibir el usuario logueado
  user: User | undefined;
  cards: Card[] | undefined;
  pathimg: string = 'srcassetscard-door-to-nothingness.jpg';
  isPasswordHidden = true;

  constructor(
    private authTareaService: AuthTareaService,
    private authApiScryfallService: AuthApiScrifallService
  ) {}

  ngOnInit(): void {
    //recuperamos el usuario logueado desde el servicio
    this.user = this.authTareaService.getCurrentUser();
  }

  // hidePassword (id: string) {
  //   var password = document.getElementById(id);
  //   password?.classList.add("hidden");

  //   // ANOTACION! SI EL USUARIO CAMBIA DE PAGINA SIEMPRE TIENE QUE GUARDAR CAMBIOS

  // }

  // viewPassword (id: string) {
  //   var password = document.getElementById(id);
  //   password?.classList.remove("hidden");
  // }

  // togglePassword (id: string) {
  //   var password = document.getElementById(id);
  //   if(password?.classList.contains("hidden")){
  //     password?.classList.remove("hidden");
  //   }else{
  //     password?.classList.add("hidden");
  //   }

  // }

  togglePassword() {
    this.isPasswordHidden = !this.isPasswordHidden;
  }

  hidePasswordText(password: string | undefined): string {
    return password ? '•'.repeat(password.length) : '';
  }

 obtenerImagenCarta(id: string) {
   let carta = this.authApiScryfallService.getCardByIdentifier(id);
   console.log(carta);
   
  }
}
