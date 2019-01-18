import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: './activities/activities.module#ActivitiesModule'
  }
];
