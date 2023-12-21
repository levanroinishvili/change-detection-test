import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () => import('./cd-root/cd-root.component').then(m => m.CdRootComponent),
    },
    {
        path: 'joke',
        title: 'Joke',
        loadComponent: () => import('./joke/joke.component').then(m => m.JokeComponent),
    }
];
