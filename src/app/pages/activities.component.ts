import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from './services/activities.service';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html'
})
export class ActivitiesComponent implements OnInit {
  activities: { "id": number; "name": string; "image": string; }[];

  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit() {
    this.activities = this.activitiesService.getActivities();
  }

  addToPlan(item) {
    this.activitiesService.addToPlan(item);
  }

}
