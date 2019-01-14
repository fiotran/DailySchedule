import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ACTIVITIES_ROUTES } from './activities.routing';
import { ActivitiesComponent } from './activities.component';



@NgModule({
  declarations: [
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ACTIVITIES_ROUTES),
  ]
})
export class ActivitiesModule { }
