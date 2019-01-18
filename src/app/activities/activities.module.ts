import { CustomiseComponent } from './components/customise/customise.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ACTIVITIES_ROUTES } from './activities.routing';
import { ActivitiesComponent } from './activities.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewPlanComponent } from './components/view-plan/view-plan.component';
import { ListActivitiesComponent } from './components/list-activities/list-activities.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  declarations: [
    ActivitiesComponent,
    ViewPlanComponent,
    ListActivitiesComponent,
    CustomiseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    DragDropModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forChild(ACTIVITIES_ROUTES)
  ]
})
export class ActivitiesModule {}
