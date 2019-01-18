import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ActivitiesService } from './activities/services/activities.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_ROUTES } from './app.routing';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule
  ],
  providers: [ActivitiesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
