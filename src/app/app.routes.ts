import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'landing',
        loadComponent: () => import('./landing/landing/landing.component').then(m => m.LandingComponent),
    },
    {
        path: 'about',
        loadComponent: () => import('./landing/about-us/about-us.component').then(m => m.AboutUsComponent),
    },
    {
        path: 'magic',
        loadComponent:() => import('./landing/about-magic/about-magic.component').then(m => m.AboutMagicComponent),
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
    },
    {
        path:'**',
        redirectTo: 'main',
        pathMatch: 'full'
    }
];
