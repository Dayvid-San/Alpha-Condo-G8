import { Routes } from '@angular/router';

import { routes as accountRoutes } from './accounts/accounts.routes';
import { NotFoundComponent } from './core/ui/not-found/not-found.component';


export const routes: Routes = [
    ...accountRoutes,
    { path: '', pathMatch: 'full', redirectTo: 'residentes' },
    { path: '**', pathMatch: 'full', component: NotFoundComponent },
];
