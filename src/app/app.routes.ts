import { Routes } from '@angular/router';

import { routes as accountRoutes } from './accounts/accounts.routes';


export const routes: Routes = [
    ...accountRoutes,
    { path: '', pathMatch: 'full', redirectTo: 'entrar' },
];
