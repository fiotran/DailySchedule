import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: './pages/activities.module#ActivitiesModule'
  }
];
