import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { RouterModule } from '@angular/router';
import { AddActivityComponent } from './pages/add-activity/add-activity.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivitiesService } from './pages/services/activities.service';
import { CreatePlanComponent } from './pages/create-plan/create-plan.component';
import { ViewPlanComponent } from './pages/view-plan/view-plan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PrintComponent } from './pages/components/print/print.component';
import { APP_ROUTES } from './app.routing';
import { ActivitiesComponent } from './pages/activities.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    HeaderComponent,
    AddActivityComponent,
    CreatePlanComponent,
    ViewPlanComponent,
    PrintComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [ActivitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
