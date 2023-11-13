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
  user2:User={
    id:1,
    nickName:'Jungkook',
    email:'exmpl@gmail.com',
    password:'1234',
    imagUser:'https://i.pinimg.com/564x/5d/07/96/5d07960ab7ed41256e85e07627cadee9.jpg'
   

  }

  constructor(
    private authTareaService:AuthTareaService
  ) { }

  ngOnInit(): void {
    //recuperamos el usuario logueado desde el servicio 
    this.user = this.authTareaService.getCurrentUser();
    // muestra el usuario logueado en la consola
    console.log(this.user);
  }


  // ANOTACION! SI EL USUARIO CAMBIA DE PAGINA SIEMPRE TIENE QUE GUARDAR CAMBIOS

}
