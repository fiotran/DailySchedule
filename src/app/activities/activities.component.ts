import { Component } from '@angular/core';
import { ActivityModel } from '../data/activity.model';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html'
})
export class ActivitiesComponent {
  activities: ActivityModel[];

  constructor() { }

}
