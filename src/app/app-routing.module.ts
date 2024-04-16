import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/error404/error404.component';
import { authguardGuard } from './core/service/guards/authguard.guard';

const routes: Routes = [
  {
    path:'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule), //importo modulo profile
    canActivate: [authguardGuard]
  },
  {
    path:'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), //importo modulo home
    canActivate: [authguardGuard]
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
    path:'landing',
    loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) //importo modulo landing
  },
{
    path:'users',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) //importo modulo users
},


  {
    path:'',
    redirectTo: 'landing',
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
