import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './activities.component';
import { ListActivitiesComponent } from './list-activities/list-activities.component';
import { CommonModule } from '@angular/common';
import { ViewPlanComponent } from './view-plan/view-plan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomiseFormComponent } from './customise-form/customise-form.component';


const routes: Routes = [{
  path: '',
  component: ActivitiesComponent
}];

@NgModule({
  declarations: [
    ActivitiesComponent,
    ListActivitiesComponent,
    ViewPlanComponent,
    CustomiseFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
