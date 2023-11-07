import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/error404/error404.component';

const routes: Routes = [
  {
    path:'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) //importo modulo home
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) //importo modulo auth
  },
  {
    path:'aterrizaje',
    loadChildren: () => import('./modules/aterrizaje/aterrizaje.module').then(m => m.AterrizajeModule) //importo modulo aterrizaje
  },
  {
    path:'',
    redirectTo: 'aterrizaje',
    pathMatch: 'full'
  },
  {
    path:'**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
