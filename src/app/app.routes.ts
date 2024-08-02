import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        path: 'landing',
        loadComponent: () => import('./components/landing/landing.component').then(m => m.LandingComponent),
    },
    {
        path: 'about',
        loadComponent: () => import('./components/about-us/about-us.component').then(m => m.AboutUsComponent),
    }
];
