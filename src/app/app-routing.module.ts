import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaAterrizajeComponent } from './modules/aterrizaje/pagina-aterrizaje/pagina-aterrizaje.component';

const routes: Routes = [
  {
    path:'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) //importo modulo home
  },
  {
    path:'aterrizaje',
    component: PaginaAterrizajeComponent, // cargo el componente
    loadChildren: () => import('./modules/aterrizaje/aterrizaje.module').then(m => m.AterrizajeModule) //importo modulo aterrizaje
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) //importo modulo auth
  },
  {
    path:'',
    redirectTo: 'aterrizaje',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo: 'aterrizaje',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
