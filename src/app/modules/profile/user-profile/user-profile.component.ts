import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/Models';
import { AuthTareaService } from 'src/app/core/service/auth-tarea.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  //variable que va a recibir el usuario logueado
  user:User | undefined;

  constructor(
    private authTareaService:AuthTareaService
  ) { }

  ngOnInit(): void {
    //recuperamos el usuario logueado desde el servicio 
    this.user = this.authTareaService.getCurrentUser();
  }


  // ANOTACION! SI EL USUARIO CAMBIA DE PAGINA SIEMPRE TIENE QUE GUARDAR CAMBIOS

}
