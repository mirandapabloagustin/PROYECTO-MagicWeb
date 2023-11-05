import { Component,NgModule,OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';

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

