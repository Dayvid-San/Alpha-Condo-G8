import { Routes } from '@angular/router';
import { ResidentComponent } from './features/resident/resident.component';
import { ForumComponent } from './features/forum/forum.component';


export const routes: Routes = [
  {
    path: 'residentes',
    component: ResidentComponent,
  },
  {
    path: 'forum',
    component: ForumComponent,
  }
];