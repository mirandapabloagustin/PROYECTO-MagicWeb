import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-aterrizaje',
  templateUrl: './pagina-aterrizaje.component.html',
  styleUrls: ['./pagina-aterrizaje.component.css']
})

export class PaginaAterrizajeComponent implements OnInit {

  constructor(private enrutamiento : Router) { }

  ngOnInit(): void {
  }

  irAlLogin(){
    this.enrutamiento.navigate(['auth/login']);
  }

}
