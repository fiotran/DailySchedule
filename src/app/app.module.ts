import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivitiesService } from './pages/services/activities.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { APP_ROUTES } from './app.routing';
import { ActivitiesComponent } from './pages/activities.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CustomiseComponent } from './pages/components/customise/customise.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { CreatePlanComponent } from './pages/components/create-plan/create-plan.component';
import { ViewPlanComponent } from './pages/components/view-plan/view-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    HeaderComponent,
    CreatePlanComponent,
    ViewPlanComponent,
    CustomiseComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    DragDropModule
  ],
  providers: [ActivitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
