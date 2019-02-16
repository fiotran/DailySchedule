import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './activities.component';
import { ListActivitiesComponent } from './list-activities/list-activities.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [{
  path: '',
  component: ActivitiesComponent
}];

@NgModule({
  declarations: [
    ActivitiesComponent,
    ListActivitiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
