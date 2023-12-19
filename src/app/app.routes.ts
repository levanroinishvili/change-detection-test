import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'joke',
        loadComponent: () => import('./joke/joke.component').then(m => m.JokeComponent),
    },
    {
        path: 'joke-analysis',
        loadComponent: () => import('./joke-analysis/joke-analysis.component').then(m => m.JokeAnalysisComponent),
    }
];
