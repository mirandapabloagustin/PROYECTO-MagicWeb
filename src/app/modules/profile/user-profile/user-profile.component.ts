import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/Models';
import{Card} from 'src/app/core/Models';
import { AuthTareaService } from 'src/app/core/service/auth-tarea.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  //variable que va a recibir el usuario logueado
  user:User | undefined;
  cards:Card[] | undefined;
  isPasswordHidden = true;
  
  

  constructor(
    private authTareaService:AuthTareaService
  ) { }

  ngOnInit(): void {
    //recuperamos el usuario logueado desde el servicio 
    this.user = this.authTareaService.getCurrentUser();
    // muestra el usuario logueado en la consola
    console.log(this.user);
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
}