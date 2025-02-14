import { Routes } from '@angular/router';
import { NotFoundComponent } from '@shared/not-found/not-found.component';
import { authGuard } from '@services/guard/auth.guard';
import { ViewDeckComponent } from './decks/components/view-deck/view-deck.component';

export const routes: Routes = [

  {
    path: 'landing',
    loadComponent: () => import('./landing/landing.component').then(m => m.LandingComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/components/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/components/register/register.component').then(m => m.RegisterComponent),
  },
  {
    path: 'main',
    loadComponent: () => import('./main/main.component').then(m => m.MainComponent),
    //canActivate: [authGuard]
  },
  {
    path: 'profile',
    loadComponent: () => import('./auth/components/user/user.component').then(m => m.UserComponent),
    //canActivate: [authGuard]
  },
  {
    path: 'decks',
    loadComponent: () => import('./decks/decks.component').then(m => m.DecksComponent),
    //canActivate: [authGuard]
  },
  {
    path: 'decks/:id',
    loadComponent: () => import('./decks/components/view-deck/view-deck.component').then(m => m.ViewDeckComponent),
  },
  {
    path: '',
    redirectTo: 'decks',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
