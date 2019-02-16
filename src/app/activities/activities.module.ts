import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './activities.component';
import { ListActivitiesComponent } from './list-activities/list-activities.component';
import { CommonModule } from '@angular/common';
import { ViewPlanComponent } from './view-plan/view-plan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomiseFormComponent } from './customise-form/customise-form.component';
import {
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ActivitiesRoutingModule } from './activities-routing';


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
    MatDatepickerModule,
    MatNativeDateModule,
    ActivitiesRoutingModule,
    DragDropModule]
})
export class ActivitiesModule { }
